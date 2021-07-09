import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';
import signIn from '../auth/sign-in';

function HomePage() {
  return (
    <div>
      <Posts />
    </div>
  );
}

export default withAuthProtected(HomePage);
