import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { PostsContext } from '../../contexts/posts-provider/PostsProvider';

function AddComment({ postId }) {
  const [comment, setComment] = useState('');
  const { addComment } = useContext(PostsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      comment,
      id: Math.random(),
      userId: Math.random(),
      postId: postId,
    };
    addComment(postId, Math.random(), comment);
    setComment('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="comment" className="form-label">
        comment - {comment}
      </label>
      <input
        type="text"
        className="form-control"
        id="comment"
        placeholder=""
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
