import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';
const canRemoveComment = (commentUserId, userId) => commentUserId === userId;

function CommentItem({ item }) {
  const userId = useSelector(authUserIdSelector);
  const { removeComment } = useContext(PostsContext);
  return (
    <>
      <h5>{item.comment}</h5>
      {canRemoveComment(item.userId, userId) && (
        <button className="btn btn-warning" onClick={() => removeComment(item.id)}>
          კომენტარის წაშლა
        </button>
      )}
    </>
  );
}

export default CommentItem;
