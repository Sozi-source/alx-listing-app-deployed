"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "../firebase/firebase";


interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<any>;
  signin: (email: string, password: string) => Promise<any>;
  logout: ()=> Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  signup: async () => { throw new Error("signup not implemented"); },
  signin: async () => { throw new Error("login not implemented"); },
  logout: async () => { throw new Error("logout not implemented"); },
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  const signup = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
  return await signOut(auth);
};


  return (
    <AuthContext.Provider value={{ currentUser, loading, signin, signup, logout}}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
