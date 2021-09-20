import { logIn, logOut } from '../../services/auth';
import { LOGIN, LOGIN_ERROR, LOGOUT, REQUEST_LOGIN } from './constants';

export const login = async (dispatch, loginDetails) => {
  dispatch({ type: REQUEST_LOGIN });

  try {
    const response = await logIn(loginDetails.username, loginDetails.password);
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('currentUser', response.user.username);
    dispatch({ type: LOGIN, payload: response });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
    throw error;
  }
};

export const logout = async dispatch => {
  dispatch({ type: LOGOUT });
  await logOut();
};
