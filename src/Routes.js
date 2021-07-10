import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import AuthPage from './pages/auth';
import HomePage from './pages/home-page';
import * as routes from './utils/routePaths';

const ProfilePage = React.lazy(() => import('./pages/profile-page'));

// const isActive = (path) => path === location.pathname;
function Routes() {
  return (
    <div>
      {/* <div style={{ backgroundColor: '#ebeced' }}>
        <header className="d-flex justify-content-start py-3">
          <Nav justified>
            <Nav.Item className="nav-item">
              <Link
                to={routes.HOME_PATH}
                className={`nav-link ${isActive(routes.HOME_PATH) ? 'active' : ''}`}>
                Feed
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                to={routes.PROFILE_PATH}
                className={`nav-link ${
                  isActive(routes.PROFILE_PATH) ? 'active' : ''
                }`}>
                Profile
              </Link>
            </Nav.Item>
          </Nav>
        </header>
      </div> */}
      <div className="container d-flex justify-content-center">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={routes.PROFILE_PATH}>
              <ProfilePage />
            </Route>
            <Route path={routes.AUTH_PATH}>
              <AuthPage />
            </Route>

            <Route path={routes.HOME_PATH}>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default Routes;
