import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import { Logo } from "@/components/ui";
import { LoginForm } from "@/components/auth";
import { ROUTES } from "@/constants";

export default async function LoginPage() {
  const user = await getAuthenticatedUser();
  if (user) {
    redirect(ROUTES.PHOTOS);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Logo size="lg" />
          <h1 className="mt-6 pb-6 text-heading-1 text-gray-900">
            Sign in to your account
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
