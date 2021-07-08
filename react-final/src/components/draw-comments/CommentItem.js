import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';

function CommentItem({ item }) {
  const { removeComment } = useContext(PostsContext);
  return (
    <>
      <h5>{item.comment}</h5>
      <button className="btn btn-warning" onClick={() => removeComment(item.id)}>
        კომენტარის წაშლა
      </button>
    </>
  );
}

export default CommentItem;
