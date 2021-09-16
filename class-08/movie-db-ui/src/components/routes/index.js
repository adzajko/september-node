import { useAuthState } from '../context';
import Login from '../login';
import Movies from '../movies';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Contact } from '../contact';
import Register from '../register';

const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
    exact: false
  },
  {
    path: '/home',
    component: Movies,
    exact: true,
    isPrivate: false
  },
  {
    path: '/contact',
    component: Contact,
    isPrivate: false,
    exact: false
  },
  {
    path: '/register',
    component: Register,
    isPrivate: false,
    exact: false
  },
  {
    path: '/',
    component: Movies,
    isPrivate: true,
    exact: true
  }
];

const AppRoute = ({
  component: Component,
  path,
  isPrivate,
  exact,
  ...rest
}) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        isPrivate && !userDetails.user ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, isPrivate }) => (
        <AppRoute
          key={path}
          path={path}
          component={component}
          isPrivate={isPrivate}
        />
      ))}
    </Switch>
  );
};
