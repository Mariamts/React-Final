import PostsProviderComponent from '../../contexts/posts-provider/PostsProvider';
import AddPost from '../add-post';
import DrawPosts from '../draw-posts';
import { Panel, PanelGroup } from 'rsuite';

function Posts({ type }) {
  return (
    <div className="col-6">
      <PanelGroup accordion bordered className="mt-5 mb-5 shadow-lg">
        <PostsProviderComponent>
          <Panel header=" Add Posts here">
            <AddPost />
          </Panel>
          <Panel header="Posts">
            <DrawPosts type={type} />
          </Panel>
        </PostsProviderComponent>
      </PanelGroup>
    </div>
  );
}

export default Posts;
