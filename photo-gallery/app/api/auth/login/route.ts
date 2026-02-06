import { NextRequest, NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/auth";
import type { LoginCredentials } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginCredentials;
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 },
      );
    }

    if (username.trim().length === 0 || password.trim().length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    await setAuthCookie({ username: username.trim() });

    return NextResponse.json(
      { success: true, user: { username: username.trim() } },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
