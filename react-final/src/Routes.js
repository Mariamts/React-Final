import { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import AuthPage from './pages/auth';
import HomePage from './pages/home-page';
import * as routes from './utils/routePaths';

function Routes() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {/* <Route path={routes.PROFILE_PATH}>
        <Profile title="Secured Profile Page" />
      </Route> */}
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>

        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
