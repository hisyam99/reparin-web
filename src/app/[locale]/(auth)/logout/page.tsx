"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  useEffect(() => {
    const signOutUser = async () => {
      const data = await signOut({ redirect: true, callbackUrl: "/" });
      if (data) {
        console.log("User signed out successfully.");
      } else {
        console.error("Error signing out user.");
      }
    };

    signOutUser();
  }, []);

  return <div>Signing out...</div>;
};

export default Logout;
