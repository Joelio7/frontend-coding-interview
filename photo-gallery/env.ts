export const env = {
  PEXELS_API_KEY: process.env.PEXELS_API_KEY!,
  AUTH_COOKIE_NAME: process.env.AUTH_COOKIE_NAME || "ci-auth",
} as const;

if (!process.env.PEXELS_API_KEY) {
  throw new Error("Missing PEXELS_API_KEY environment variable");
}
