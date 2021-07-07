import { withAuthProtected } from '../../hoc';

function ProfilePage() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

export default withAuthProtected(ProfilePage);
