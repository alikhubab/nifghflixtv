import { createContext, useContext } from "react";

const AuthContext = createContext({ user: null });

const useAuthContext = () => {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
};

export { useAuthContext, AuthContext };
