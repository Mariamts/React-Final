import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import CommentItem from './CommentItem';

const filterComments = (list, postId) => {
  return list.filter((item) => item.postId === postId);
};

function DrawComments({ postId }) {
  const { commentsList } = useContext(PostsContext);
  return (
    <>
      {filterComments(commentsList, postId).map((item, index) => (
        <CommentItem key={index} item={item} />
      ))}
    </>
  );
}

export default DrawComments;
