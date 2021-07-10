import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';

const getPostLikes = (list, postId) => {
  return list.filter((item) => item.postId === postId);
};
function DrawLikes({ postId }) {
  const { likesList } = useContext(PostsContext);

  return <>{getPostLikes(likesList, postId).length}</>;
}

export default DrawLikes;
