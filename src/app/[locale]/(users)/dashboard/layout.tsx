import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import BottomNavbar from "@/components/BottomNavbar";
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
