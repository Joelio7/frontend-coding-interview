"use client";

import { useState, type SyntheticEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Input, Button } from "@/components/ui";
import Link from "next/link";

export function LoginForm() {
  const { login, isLoading: authLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login({ username, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = isSubmitting || authLoading;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-small text-red-600">{error}</p>
        </div>
      )}

      <Input
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        required
        disabled={isLoading}
        autoComplete="username"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        disabled={isLoading}
        autoComplete="current-password"
        rightElement={
          <Link
            href="#"
            className="text-brand-blue text-body hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </Link>
        }
      />

      <Button
        type="submit"
        fullWidth
        isLoading={isLoading}
        disabled={!username || !password}
      >
        Sign in
      </Button>
    </form>
  );
}
