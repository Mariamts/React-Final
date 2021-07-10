import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';
import { IconButton, Icon } from 'rsuite';

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
          <IconButton
            data-bs-toggle="tooltip"
            data-bs-html="true"
            title="unlike"
            appearance="primary"
            onClick={() => removeLike(hasLiked(likesList, postId, userId))}
            icon={<Icon icon="star" />}
          />
        ) : (
          <IconButton
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="like"
            onClick={() => addLike(postId, userId)}
            icon={<Icon icon="star" />}
          />
        )}
      </div>
    </div>
  );
}

export default AddLike;
