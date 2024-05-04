import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  // 'loading', 'error', 'authorized', 'unauthorized', 'signup'
  status: 'unauthorized',
  isLoggedIn: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'loggedIn':
      return {
        ...state,
        isLoggedIn: true,
        status: 'authorized',
      };
    case 'loggedOut':
      return {
        ...state,
        isLoggedIn: false,
        status: 'unauthorized',
      };
    case 'signUp':
      return {
        ...state,
        status: 'signup',
      };
    default:
      throw new Error('Action unkonwn');
  }
}

function AppProvider({ children }) {
  const [{ status, isLoggedIn }, dispatch] = useReducer(
    appReducer,
    initialState
  );

  return (
    <AppContext.Provider
      value={{
        status,
        isLoggedIn,

        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error('AppContext was used outside of the AppProvider');
  return context;
}

export { AppProvider, useAppContext };
