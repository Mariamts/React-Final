import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import CommentItem from './CommentItem';

const filterComments = (list, postId) => {
  return list.filter((item) => item.postId === postId);
};

function DrawComments({ postId }) {
  const { commentsList } = useContext(PostsContext);
  return (
    <div>
      <h3 className="mb-5 mt-5 p-3">comments</h3>
      <div className="mt-3">
        {filterComments(commentsList, postId).map((item, index) => (
          <CommentItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DrawComments;
