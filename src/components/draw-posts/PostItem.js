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
    <div className="d-flex justify-content-center">
      <div className="card mb-5 shadow-lg col-12">
        <div className="d-flex justify-content-end mr-5">
          {canRemovePost(item.userId, userId) && (
            <button
              className="btn btn-close m-3 "
              onClick={() => removePost(item.id)}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Delete post"></button>
          )}
        </div>
        <h5 className="card-title p-3  border-bottom">{item.post}</h5>
        <div
          className="card-body d-flex align-items-center justify-content-between"
          style={{ width: '7%' }}>
          <div>
            <DrawLikes postId={item.id} />
          </div>
          <div>
            <AddLike postId={item.id} />
          </div>
        </div>

        <div>
          <DrawComments postId={item.id} />
          <AddComment className="mb-3" postId={item.id} />
        </div>
      </div>
    </div>
  );
}

export default PostItem;
