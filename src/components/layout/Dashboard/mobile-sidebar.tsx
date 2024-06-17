"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/data";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useTheme } from "next-themes";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({ className }: SidebarProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="outline" onClick={toggleMenu}>
        <span className="sr-only">Toggle menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </Button>
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="h-screen top-0 right-auto left-auto mt-0 w-[300px] rounded-none">
          <ScrollArea className="h-screen">
            <div className="p-4 pb-0 space-y-6">
              <div className="flex p-4">
              <Link href="/" passHref>
            <Image
              src={
                currentTheme === "dark"
                  ? "/icon/fixitnow-icon-dark.png"
                  : "/icon/fixitnow-icon.png"
              }
              alt="reparin"
              width={125}
              height={125}
              priority
            />
          </Link>
              </div>
              <div className="px-4">
                <h2 className="mb-4 text-lg font-semibold tracking-tight">
                  Overview
                </h2>
                <div className="space-y-2">
                  <DashboardNav
                    items={navItems}
                    isMobileNav={true}
                    setOpen={setIsOpen}
                  />
                </div>
              </div>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}
