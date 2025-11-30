"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

const Header: React.FC = () => {
  const router = useRouter();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully");
      router.push("/"); // redirect to home after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/assets/icons/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 items-center">
            {currentUser ? (
              <>
                <li className="font-medium">Hello, {currentUser.email}</li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white font-serif font-semibold px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/auth/authpage"
                    className="bg-green-500 text-white font-serif font-semibold px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
