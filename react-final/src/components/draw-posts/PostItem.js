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
    <div>
      <div className="card">
        <h5 className="card-title">{item.post}</h5>
        <div className="card-body d-flex justify-content-between">
          <div>
            <DrawLikes postId={item.id} />
          </div>
          <div>
            <AddLike postId={item.id} />
          </div>
          <div>
            {canRemovePost(item.userId, userId) && (
              <button
                className="btn btn-danger mb-3"
                onClick={() => removePost(item.id)}>
                Delete Post
              </button>
            )}
          </div>
        </div>
      </div>
      <DrawComments postId={item.id} />
      <AddComment postId={item.id} />
    </div>
  );
}

export default PostItem;
