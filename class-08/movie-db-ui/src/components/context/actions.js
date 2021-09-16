import { logIn, logOut } from '../../services/auth';
import { LOGIN, LOGIN_ERROR, LOGOUT, REQUEST_LOGIN } from './constants';

export const login = async (dispatch, loginDetails) => {
  dispatch({ type: REQUEST_LOGIN });

  try {
    const response = await logIn(loginDetails.username, loginDetails.password);
    dispatch({ type: LOGIN, payload: response });
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('currentUser', response.user.username);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = async dispatch => {
  dispatch({ type: LOGOUT });
  await logOut();
};
