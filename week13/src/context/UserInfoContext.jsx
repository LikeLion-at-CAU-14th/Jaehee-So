
import React, { createContext, useReducer } from 'react';


export const UserInfoContext = createContext(null);


const initialState = {
  name: '',
  email: '',
  birth: '',
  gender: '',
};


const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


export const UserInfoProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userInfoReducer, initialState);

  return (
    <UserInfoContext.Provider value={{ state, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = React.useContext(UserInfoContext);
  return context;
};