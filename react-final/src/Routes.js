import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AuthPage from './pages/auth';
import HomePage from './pages/home-page';
import * as routes from './utils/routePaths';

const ProfilePage = React.lazy(() => import('./pages/profile-page'));

const isActive = (path) => path === location.pathname;
function Routes() {
  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-start py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to={routes.HOME_PATH}
                className={`nav-link ${isActive(routes.HOME_PATH) ? 'active' : ''}`}>
                Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={routes.PROFILE_PATH}
                className={`nav-link ${
                  isActive(routes.PROFILE_PATH) ? 'active' : ''
                }`}>
                Profile
              </Link>
            </li>
          </ul>
        </header>
      </div>
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
  );
}

export default Routes;
