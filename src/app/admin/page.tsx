import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const session = await auth();

  if (!session) redirect("/admin/login");

  const role = (session.user as any)?.role;
  if (role !== "ADMIN") redirect("/");

  return <AdminClient />;
}