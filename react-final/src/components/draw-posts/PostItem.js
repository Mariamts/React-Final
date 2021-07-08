import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import AddComment from '../add-comment';
import AddLike from '../add-like';
import DrawComments from '../draw-comments';
import DrawLikes from '../draw-likes';

function PostItem({ item }) {
  const { removePost } = useContext(PostsContext);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.post}</h5>
        <div>
          <h5>add like</h5>
          <DrawLikes postId={item.id} />
          <AddLike postId={item.id} />
        </div>
        <AddComment postId={item.id} />
        <DrawComments postId={item.id} />
        <button className="btn btn-danger" onClick={() => removePost(item.id)}>
          პოსტის წაშლა
        </button>
      </div>
    </div>
  );
}

export default PostItem;
