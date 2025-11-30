"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";
import Signin from "./signin";
import Signup from "./signup";

type AuthMode = "signin" | "signup";

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("signin");
  const router = useRouter();
  const { currentUser, loading } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (!loading && currentUser) {
      const redirect = (router.query.redirect as string) || "/";
      router.push(redirect);
    }
  }, [currentUser, loading, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </h1>

        {/* Render the correct form */}
        {mode === "signin" ? <Signin /> : <Signup />}

        {/* Toggle link */}
        <div className="text-center text-sm text-gray-600 mb-2 mt-4">
          {mode === "signin" ? (
            <>
              Don&apos;t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="cursor-pointer font-semibold text-yellow-600 hover:underline"
              >
                Create one
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("signin")}
                className="cursor-pointer font-semibold text-yellow-600 hover:underline"
              >
                Sign In
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
