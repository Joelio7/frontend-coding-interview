import { cookies } from "next/headers";
import type { User } from "@/types";
import { env } from "@/env";

const COOKIE_NAME = env.AUTH_COOKIE_NAME;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export interface AuthCookieValue {
  user: User;
  createdAt: number;
}

export async function setAuthCookie(user: User): Promise<void> {
  const cookieStore = await cookies();
  const value: AuthCookieValue = {
    user,
    createdAt: Date.now(),
  };

  cookieStore.set(COOKIE_NAME, JSON.stringify(value), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

export async function getAuthCookie(): Promise<AuthCookieValue | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);

  if (!cookie?.value) return null;

  try {
    return JSON.parse(cookie.value) as AuthCookieValue;
  } catch {
    return null;
  }
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAuthenticatedUser(): Promise<User | null> {
  const auth = await getAuthCookie();
  return auth?.user ?? null;
}
