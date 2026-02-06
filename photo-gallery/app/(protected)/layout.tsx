import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import { ROUTES } from "@/constants";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  return <>{children}</>;
}
