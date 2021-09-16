import { useAuthState } from '../context';
import Login from '../login';
import Movies from '../movies';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Contact } from '../contact';

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
    isPrivate: true
  },
  {
    path: '/contact',
    component: Contact
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
        isPrivate && !Boolean(userDetails.user) ? (
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
