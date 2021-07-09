import PostsProviderComponent from '../../contexts/posts-provider/PostsProvider';
import AddPost from '../add-post';
import DrawPosts from '../draw-posts';

function Posts({ type }) {
  return (
    <PostsProviderComponent>
      <div>
        <h1>პოსტის დამდები ტიპი</h1>
        <div>
          <AddPost />
        </div>

        <div>
          აქ იქნება თვითონ პოსტები
          <DrawPosts type={type} />
        </div>
      </div>
    </PostsProviderComponent>
  );
}

export default Posts;
