"use client";

import { parseCookies } from "nookies";
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  useMemo,
} from "react";

import User from "../models/user";

interface AuthContextProps {
  user: User | null;
}

const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const { "food-user": newUserString } = parseCookies();
    if (newUserString) {
      const newUser = JSON.parse(newUserString);
      setUser(newUser);
    }
  }, []);

  const authContextValue = useMemo(() => {
    return { user };
  }, [user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
