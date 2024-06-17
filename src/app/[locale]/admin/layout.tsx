import { getServerSession } from "next-auth";
import authOption from "@/auth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { redirect } from "next/navigation";

export default async function Admin({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOption);

  if (!session || session.user.role !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
