import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';

function AddPost() {
  const [post, setPost] = useState('');
  const userId = useSelector(authUserIdSelector);

  const { addPost } = useContext(PostsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      post,
      id: Math.random(),
      userId: userId,
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
