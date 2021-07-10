import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';

function HomePage() {
  return (
    <div className="d-flex justify-content-center col-12">
      <Posts />
    </div>
  );
}

export default withAuthProtected(HomePage);
