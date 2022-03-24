import React, { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  const { user, setUser } = context;

  async function loadUser() {
    try {
      const result = await api.get("/user/1");
      setUser(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  return { user, loadUser };
}
