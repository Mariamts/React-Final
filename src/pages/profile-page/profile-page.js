import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';

import { PROFILE_PATH } from '../../utils/routePaths';

function ProfilePage() {
  return (
    <div className="mt-5 col-12">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>My Posts</h2>
        <Posts type={PROFILE_PATH} />
      </div>
    </div>
  );
}

export default withAuthProtected(ProfilePage);
