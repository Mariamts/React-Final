import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';
import AddComment from '../add-comment';
import AddLike from '../add-like';
import DrawComments from '../draw-comments';
import DrawLikes from '../draw-likes';

const canRemovePost = (postUserId, userId) => postUserId === userId;

function PostItem({ item }) {
  const userId = useSelector(authUserIdSelector);

  const { removePost } = useContext(PostsContext);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.post}</h5>
        <div>
          <DrawLikes postId={item.id} />
          <AddLike postId={item.id} />
        </div>
        <AddComment postId={item.id} />
        <DrawComments postId={item.id} />
        {canRemovePost(item.userId, userId) && (
          <button className="btn btn-danger" onClick={() => removePost(item.id)}>
            პოსტის წაშლა
          </button>
        )}
      </div>
    </div>
  );
}

export default PostItem;
