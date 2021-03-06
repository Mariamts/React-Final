import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { PostsContext } from '../../contexts/posts-provider/PostsProvider';
import { useSelector } from 'react-redux';
import { authUserIdSelector } from '../../redux/selectors/auth-selectors';

function AddComment({ postId }) {
  const userId = useSelector(authUserIdSelector);

  const [comment, setComment] = useState('');
  const { addComment } = useContext(PostsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addComment(postId, userId, comment);
    setComment('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control rounded mb-3 px-3"
        id="comment"
        placeholder="comment"
        value={comment}
        onChange={({ target }) => {
          setComment(target.value);
        }}
        required
      />
    </form>
  );
}

AddComment.prototypes = {
  postId: PropTypes.number.isRequired,
};

export default AddComment;
