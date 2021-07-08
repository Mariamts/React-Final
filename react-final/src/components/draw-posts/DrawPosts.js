import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import PostItem from './PostItem';

function DrawPosts(type) {
  const { postsList } = useContext(PostsContext);
  return (
    <>
      {postsList.map((item, index) => (
        <PostItem key={index} item={item} />
      ))}
    </>
  );
}

export default DrawPosts;
