import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';
import { PROFILE_PATH } from '../../utils/routePaths';
import PostItem from './PostItem';

const getFilteredPosts = (list, userId, type) => {
  if (type === PROFILE_PATH) {
    const newList = list.filter((item) => item.userId === userId);
    return newList;
  }
  return list;
};
function DrawPosts({ type }) {
  const userId = useSelector(authUserIdSelector);
  const { postsList } = useContext(PostsContext);

  return (
    <>
      {getFilteredPosts(postsList, userId, type).map((item, index) => (
        <PostItem key={index} item={item} />
      ))}
    </>
  );
}

export default DrawPosts;
