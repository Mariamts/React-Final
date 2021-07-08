import { useContext, useState } from 'react';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';

function AddPost() {
  const [post, setPost] = useState('');

  const { addPost } = useContext(PostsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      post,
      id: Math.random(),
      userId: Math.random(),
    };

    addPost(newPost);
    setPost('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Post" className="form-label">
        Post - {post}
      </label>
      <input
        type="text"
        className="form-control"
        id="post"
        placeholder=""
        value={post}
        onChange={({ target }) => {
          setPost(target.value);
        }}
        required
      />
    </form>
  );
}

export default AddPost;
