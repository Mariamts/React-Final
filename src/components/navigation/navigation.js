import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelector } from '../../redux/selectors/auth-selectors';

import { Nav } from 'rsuite';

import { useHistory } from 'react-router';
import { setAuthGuestAction } from '../../redux/actions';
import { logOut } from '../../services';
import * as routes from '../../utils/routePaths';

// import css from './navigation.module.css';

const isActive = (path) => path === location.pathname;

function Navigation() {
  const authorized = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = async () => {
    await logOut();
    dispatch(setAuthGuestAction());

    history.replace(routes.AUTH_PATH);
  };

  return (
    <div style={{ backgroundColor: '#ebeced' }}>
      <header className="d-flex justify-content-start py-3">
        <Nav justified>
          <Nav.Item className="nav-item">
            <Link
              to={routes.HOME_PATH}
              className={`nav-link ${isActive(routes.HOME_PATH) ? 'active' : ''}`}>
              Feed
            </Link>
          </Nav.Item>
          {authorized && (
            <Nav.Item className="nav-item">
              <Link
                to={routes.PROFILE_PATH}
                className={`nav-link ${
                  isActive(routes.PROFILE_PATH) ? 'active' : ''
                }`}>
                Profile
              </Link>
            </Nav.Item>
          )}
          {!authorized && (
            <Nav.Item className="nav-item">
              <Link
                to={routes.AUTH_PATH}
                className={`nav-link ${isActive(routes.AUTH_PATH) ? 'active' : ''}`}>
                Auth
              </Link>
            </Nav.Item>
          )}
          {authorized && (
            <Nav.Item className="nav-item">
              <button className="nav-link" onClick={() => logout()}>
                Log Out
              </button>
            </Nav.Item>
          )}
        </Nav>
      </header>
    </div>
  );
}

export default Navigation;
