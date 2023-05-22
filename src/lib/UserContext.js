import React from 'react';

const UserContext = React.createContext(null);

export const UserProvider = ({ children, userData }) => {
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export default UserContext;