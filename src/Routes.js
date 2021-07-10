import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import AuthPage from './pages/auth';
import HomePage from './pages/home-page';
import * as routes from './utils/routePaths';

const ProfilePage = React.lazy(() => import('./pages/profile-page'));

function Routes() {
  return (
    <div>
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
