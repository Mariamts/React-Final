import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Posts />
    </div>
  );
}

export default withAuthProtected(HomePage);
