import { LOGIN, LOGIN_ERROR, LOGOUT, REQUEST_LOGIN } from './constants';

const user = sessionStorage.getItem('currentUser');
const authToken = sessionStorage.getItem('token');

export const initialState = {
  userDetails: user || null,
  authToken: authToken || null,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...initialState,
        userDetails: action.payload.user,
        authToken: action.payload.token
      };
    }
    case LOGOUT: {
      return { ...initialState, authToken: null, userDetails: null };
    }
    case REQUEST_LOGIN: {
      return { ...initialState, loading: true };
    }
    case LOGIN_ERROR: {
      return { ...initialState, errorMessage: action.payload };
    }
    default: {
      return initialState;
    }
  }
};
