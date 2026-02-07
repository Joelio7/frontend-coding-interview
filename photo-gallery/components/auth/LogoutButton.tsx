"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export function LogoutButton() {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="
    flex items-center gap-2 px-4 py-2
    text-body text-gray-700 
    hover:text-brand-blue hover:bg-blue-50
    rounded-lg transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed
  "
    >
      <LogOut size={20} className={isLoading ? "animate-spin" : ""} />
      <span>Log out</span>
    </button>
  );
}
