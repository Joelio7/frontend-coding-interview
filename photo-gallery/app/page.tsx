import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import { ROUTES } from "@/constants";

export default async function HomePage() {
  const user = await getAuthenticatedUser();

  if (user) {
    redirect(ROUTES.PHOTOS);
  } else {
    redirect(ROUTES.LOGIN);
  }
}
