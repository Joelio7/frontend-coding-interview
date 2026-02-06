"use client";

import { type ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { LikesProvider } from "@/contexts/LikesContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <LikesProvider>{children}</LikesProvider>
    </AuthProvider>
  );
}
