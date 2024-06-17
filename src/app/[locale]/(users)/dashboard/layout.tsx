import Header from "@/components/layout/Dashboard/header";
import Sidebar from "@/components/layout/Dashboard/sidebar";
import BottomNavbar from "@/components/layout/BottomNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Cepat, Dekat, Terpercaya.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
      <BottomNavbar />
    </>
  );
}
