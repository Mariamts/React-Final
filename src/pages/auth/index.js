import classNames from 'classnames';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import SignIn from './sign-in';
import SignUp from './sign-up';
import { withNoAuthProtected } from '../../hoc';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../utils/routePaths';
import { Button } from 'rsuite';

function AuthPage() {
  const { pathname } = useLocation();
  return (
    <div
      className="row p-5 mt-5 m-0"
      style={{ width: '50%', backgroundColor: '#ebeced' }}>
      <div className="col-12 mb-5">
        <ul className="nav nav-pills">
          {pathname.includes(SIGN_UP_PATH) && (
            <li className="nav-item ml-5">
              <Button color="cyan" appearance="ghost">
                <Link
                  to={SIGN_IN_PATH}
                  className={classNames({
                    active: pathname.includes(SIGN_IN_PATH),
                  })}>
                  Sign In
                </Link>
              </Button>
            </li>
          )}

          {pathname.includes(SIGN_IN_PATH) && (
            <li className="nav-item d-flex justify-content-center align-items-center">
              <h6 className="mb-0 mr-5">Do not have account ? </h6>{' '}
              <a color="cyan" appearance="ghost" className="ml-5">
                <Link
                  to={SIGN_UP_PATH}
                  className={classNames({
                    active: pathname.includes(SIGN_UP_PATH),
                  })}>
                  Register
                </Link>
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="row">
        <Switch>
          <Route path={SIGN_IN_PATH}>
            <SignIn />
          </Route>
          <Route path={SIGN_UP_PATH}>
            <SignUp />
          </Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
}

// export default AuthPage;
export default withNoAuthProtected(AuthPage);
