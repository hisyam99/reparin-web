import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import BottomNavbar from "@/components/BottomNavbar";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
      <BottomNavbar /> {/* Add BottomNavbar component */}
    </>
  );
}
