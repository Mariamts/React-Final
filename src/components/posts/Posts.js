import PostsProviderComponent from '../../contexts/posts-provider/PostsProvider';
import AddPost from '../add-post';
import DrawPosts from '../draw-posts';
import { Panel, PanelGroup } from 'rsuite';

function Posts({ type }) {
  return (
    <PanelGroup accordion bordered className="mt-5 mb-5 col-6 shadow-lg">
      <PostsProviderComponent>
        <Panel header=" Add Posts here">
          <AddPost />
        </Panel>
        <Panel header="Posts">
          <DrawPosts type={type} />
        </Panel>
      </PostsProviderComponent>
    </PanelGroup>
  );
}

export default Posts;
