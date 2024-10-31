import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (user) {
      setUserData({ _id: user.userId, name: user.name, email: user.email });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
