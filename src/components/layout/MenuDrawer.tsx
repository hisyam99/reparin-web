"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "@/components/layout/Dashboard/ThemeToggle/theme-toggle";
import { useTheme } from "next-themes";
// import { useSession } from "next-auth/react";

type MenuItem = {
  title: string;
  href: string;
};

interface MenuDrawerProps {
  menuItems: MenuItem[];
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  // const { data: session } = useSession();

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
          <div className="flex justify-between items-center pt-4 px-4">
          <Link href="/" passHref>
            <Image
              src={
                currentTheme === "dark"
                  ? "/icon/fixitnow-icon-dark.png"
                  : "/icon/fixitnow-icon.png"
              }
              alt={t("nav.title")}
              width={125}
              height={125}
              priority
            />
          </Link>
            <Button variant="ghost" onClick={toggleMenu}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className="p-4 pb-0 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                className={`flex items-center justify-center rounded-lg h-12 cursor-pointer mb-2 ${
                  pathname === item.href ? "bg-muted" : "bg-muted"
                }`}
                onClick={handleMenuItemClick}
                key={index}
                href={item.href}
                passHref
              >
                <p>{item.title}</p>
              </Link>
            ))}
            {/* {session && (
              <Link href="/dashboard" passHref>
                <a
                  className={`flex items-center justify-center rounded-lg h-12 cursor-pointer mb-2 ${
                    pathname === "/dashboard" ? "bg-blue-500 text-white" : "bg-muted"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  <p>{t("nav.dashboard")}</p>
                </a>
              </Link>
            )} */}
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
