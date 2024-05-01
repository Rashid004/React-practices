/** @format */

import { useState } from "react";

import UserContextAp from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(children);
  return (
    <UserContextAp.Provider value={{ user, setUser }}>
      {children}
    </UserContextAp.Provider>
  );
};

export default UserContextProvider;
