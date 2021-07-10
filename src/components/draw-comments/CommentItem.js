import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';
const canRemoveComment = (commentUserId, userId) => commentUserId === userId;

function CommentItem({ item }) {
  const userId = useSelector(authUserIdSelector);
  const { removeComment } = useContext(PostsContext);
  return (
    <div className="comment mb-2 d-flex justify-content-between align-items-center">
      <h5 className="p-3">{item.comment}</h5>
      {canRemoveComment(item.userId, userId) && (
        <button
          className="btn btn-danger ml-3"
          onClick={() => removeComment(item.id)}>
          Delete Comment
        </button>
      )}
    </div>
  );
}

export default CommentItem;
