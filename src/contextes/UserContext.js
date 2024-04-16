import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [character, setChar] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, character, setChar }}>
      {children}
    </UserContext.Provider>
  );
};
