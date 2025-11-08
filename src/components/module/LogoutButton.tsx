"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/module/LogoutButton.module.css";

function LogoutButton() {
  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
  };
  return (
    <button className={styles.button} onClick={handleSignOut}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
