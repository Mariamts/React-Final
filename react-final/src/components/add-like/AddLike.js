import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';

const hasLiked = (list, postId, userId) => {
  return (
    list.find((item) => item.postId === postId && item.userId === userId) &&
    list.find((item) => item.postId === postId && item.userId === userId).id
  );
};

function AddLike({ postId }) {
  const userId = useSelector(authUserIdSelector);
  const { likesList, addLike, removeLike } = useContext(PostsContext);

  return (
    <div className="d-flex">
      <div>
        {hasLiked(likesList, postId, userId) ? (
          <button
            className="btn btn-info"
            onClick={() => removeLike(hasLiked(likesList, postId, userId))}>
            unlike
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => addLike(postId, userId)}>
            like
          </button>
        )}
      </div>
    </div>
  );
}

export default AddLike;
