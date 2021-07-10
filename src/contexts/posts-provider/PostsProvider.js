import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, setLikes, setPosts } from '../../redux/actions';
import { commentsSelector } from '../../redux/selectors/comments-selectors';
import { likesSelector } from '../../redux/selectors/likes-selectors';
import { postsSelector } from '../../redux/selectors/posts-selectors';
import { COMMENTS, LIKES, POSTS } from '../../utils/constants';

export const PostsContext = React.createContext(null);

function PostsProviderComponent({ children }) {
  const dispatch = useDispatch();
  const { posts: postsList } = useSelector(postsSelector);
  const { comments: commentsList } = useSelector(commentsSelector);
  const { likes: likesList } = useSelector(likesSelector);

  const addPost = (post) => {
    const newList = [post, ...postsList];
    localStorage.setItem(POSTS, JSON.stringify(newList));
    dispatch(setPosts(newList));
  };

  const removePost = (postId) => {
    const newPostsList = postsList.filter((post) => post.id !== postId);
    const newCommentsList = commentsList.filter(
      (comment) => comment.postId !== postId
    );
    const newLikesList = commentsList.filter((like) => like.postId !== postId);
    dispatch(setLikes(newLikesList));
    dispatch(setComments(newCommentsList));
    dispatch(setPosts(newPostsList));
    localStorage.setItem(POSTS, JSON.stringify(newPostsList));
    localStorage.setItem(COMMENTS, JSON.stringify(newCommentsList));
    localStorage.setItem(LIKES, JSON.stringify(newPostsList));
  };

  const addComment = (postId, userId, comment) => {
    const commentObject = {
      id: Math.random(),
      comment: comment,
      postId: postId,
      userId: userId,
    };
    const newList = [...commentsList, commentObject];
    dispatch(setComments(newList));
    localStorage.setItem(COMMENTS, JSON.stringify(newList));
  };

  const removeComment = (id) => {
    const newList = commentsList.filter((comment) => comment.id !== id);
    dispatch(setComments(newList));
    localStorage.setItem(COMMENTS, JSON.stringify(newList));
  };

  const addLike = (postId, userId) => {
    const likeObject = {
      id: Math.random(),
      userId: userId,
      postId: postId,
    };
    const newList = [...likesList, likeObject];
    dispatch(setLikes(newList));
    localStorage.setItem(LIKES, JSON.stringify(newList));
  };

  const removeLike = (id) => {
    const newList = likesList.filter((like) => like.id !== id);
    dispatch(setLikes(newList));

    localStorage.setItem(LIKES, JSON.stringify(newList));
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
