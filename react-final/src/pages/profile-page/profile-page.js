import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';
import { PROFILE_PATH } from '../../utils/routePaths';

function ProfilePage() {
  return (
    <div>
      <h2>Profile</h2>
      <Posts type={PROFILE_PATH} />
    </div>
  );
}

export default withAuthProtected(ProfilePage);
