import { createContext, useContext, useReducer } from 'react';
import { AuthReducer, initialState } from './reducers';

const AuthStateContext = createContext();
const AuthStateDispatch = createContext();

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('Cannot use context outside an Auth Provider!');
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthStateDispatch);
  if (!context) {
    throw new Error('Auth dispatch must be used within an Auth provider!');
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthStateDispatch.Provider value={dispatch}>
        {children}
      </AuthStateDispatch.Provider>
    </AuthStateContext.Provider>
  );
};
