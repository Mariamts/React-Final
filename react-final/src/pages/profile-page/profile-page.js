import { useHistory } from 'react-router';
import Posts from '../../components/posts';
import { withAuthProtected } from '../../hoc';
import { logOut } from '../../services';
import { AUTH_PATH, PROFILE_PATH } from '../../utils/routePaths';

function ProfilePage() {
  const history = useHistory();

  const logout = () => {
    logOut();
    history.replace(AUTH_PATH);
  };

  return (
    <div>
      <h2>Profile</h2>
      <button className="btn btn-primary" onClick={() => logout()}>
        logout
      </button>
      <Posts type={PROFILE_PATH} />
    </div>
  );
}

export default withAuthProtected(ProfilePage);
