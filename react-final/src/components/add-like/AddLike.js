import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';

const hasLiked = (list, postId) => {
  return (
    list.find((item) => item.postId === postId) &&
    list.find((item) => item.postId === postId).id
  );
};

function AddLike({ postId }) {
  const { likesList, addLike, removeLike } = useContext(PostsContext);

  return (
    <div>
      {hasLiked(likesList, postId) ? (
        <button
          className="btn btn-info"
          onClick={() => removeLike(hasLiked(likesList, postId))}>
          unlike
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => addLike(postId, Math.random())}>
          like
        </button>
      )}
    </div>
  );
}

export default AddLike;
