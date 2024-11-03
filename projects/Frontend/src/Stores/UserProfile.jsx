import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
