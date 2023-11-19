import { createContext, useReducer } from 'react';

const initUser = {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
};

export const UserContext = createContext(initUser);
export const UserDispatchContext = createContext();

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(
    userReducer,
    {}
  );

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

function userReducer(user, action) {
  switch (action.type) {
    case 'update': {
      return action.data;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
