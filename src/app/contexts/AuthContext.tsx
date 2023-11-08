"use client";
import { EnumValue } from "@/app/models/enumValue";
import { api } from "@/app/services/api";
import { getUser, signInRequest } from "@/app/services/authService";
import { useRouter } from 'next/navigation'
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { createContext, useEffect, useState } from "react";


type User = {
  fullName: string;
  email: string;
  userType: EnumValue;
};

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'picpaychallenge.token': token } = parseCookies();

    if (token) {
      getUser().then(res => setUser(res));
    }
  }, []);

  async function signIn({ email, password }: SignInData) {

    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "picpaychallenge.token", token, {
      maxAge: 60 * 60 * 8, //8 hours
    });

    setUser({
        email: user.email,
        fullName: user.fullName,
        userType: user.userType,
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    router.push("/dashboard");
  }
  
  async function signOut() {
    destroyCookie(undefined, 'picpaychallenge.token');
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
