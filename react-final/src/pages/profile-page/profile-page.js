import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';

function ProfilePage() {
  return (
    <div>
      <h2>Profile</h2>
      <Posts />
    </div>
  );
}

export default withAuthProtected(ProfilePage);
