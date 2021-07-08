import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, setLikes, setPosts } from '../../redux/actions';
import commentsSelector from '../../redux/selectors/comments-selectors';
import likesSelector from '../../redux/selectors/likes-selectors';
import postsSelector from '../../redux/selectors/posts-selectors';

export const PostsContext = React.createContext(null);

function PostsProviderComponent({ children }) {
  const dispatch = useDispatch();
  // that should be reducer
  const { posts: postsList } = useSelector(postsSelector);
  const { comments: commentsList } = useSelector(commentsSelector);
  const { likes: likesList } = useSelector(likesSelector);
  console.log(postsList, commentsList, likesList);

  // const [postsList, setPostsList] = useState([]);
  // const [commentsList, setCommentsList] = useState([]);
  // const [likesList, setLikessList] = useState([]);
  // should have counters for each array, to set new value with unique id

  useEffect(() => {
    // call action to get data from localstorage into store
  }, []);

  const addPost = (post) => {
    const newList = [post, ...postsList];
    localStorage.setItem('posts', JSON.stringify(newList));
    dispatch(setPosts(newList));
  };

  const removePost = (postId) => {
    const newPostsList = postsList.filter((post) => post.id !== postId);
    const newCommentsList = commentsList.filter(
      (comment) => comment.postId !== postId
    );
    const newLikesList = commentsList.filter((like) => like.postId !== postId);
    // setCommentsList(newCommentsList);
    // setLikessList(newLikesList);
    dispatch(setLikes(newLikesList));
    dispatch(setComments(newCommentsList));
    dispatch(setPosts(newPostsList));
    localStorage.setItem('posts', JSON.stringify(newPostsList));
    localStorage.setItem('comments', JSON.stringify(newCommentsList));
    localStorage.setItem('likes', JSON.stringify(newPostsList));
  };

  const addComment = (postId, userId, comment) => {
    const commentObject = {
      id: Math.random(),
      comment: comment,
      postId: postId,
      userId: userId,
    };
    const newList = [...commentsList, commentObject];
    // setCommentsList(newList);
    dispatch(setComments(newList));
    localStorage.setItem('comments', JSON.stringify(newList));
  };

  const removeComment = (id) => {
    const newList = commentsList.filter((comment) => comment.id !== id);
    // setCommentsList(newList);
    dispatch(setComments(newList));
    localStorage.setItem('comments', JSON.stringify(newList));
  };

  const addLike = (postId, userId) => {
    const likeObject = {
      id: Math.random(),
      userId: userId,
      postId: postId,
    };
    const newList = [...likesList, likeObject];
    dispatch(setLikes(newList));
    // setLikessList(newList);
    localStorage.setItem('likes', JSON.stringify(newList));
  };

  const removeLike = (id) => {
    const newList = likesList.filter((like) => like.id !== id);
    // setLikessList(newList);
    dispatch(setLikes(newList));

    localStorage.setItem('likes', JSON.stringify(newList));
  };

  PostsContext.displayName = 'PostsContext';

  return (
    <PostsContext.Provider
      value={{
        postsList,
        commentsList,
        likesList,
        addPost,
        removePost,
        addComment,
        removeComment,
        addLike,
        removeLike,
      }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProviderComponent;
