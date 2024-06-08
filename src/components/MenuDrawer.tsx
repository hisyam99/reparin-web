"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "./ModeToggle";
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
          <div className="p-4 pb-0 space-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <div
                  className="bg-muted flex items-center justify-center rounded-lg h-12 cursor-pointer mb-2"
                  onClick={handleMenuItemClick}
                >
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
            {/* {session && (
              <Link href="/dashboard" passHref>
                <div
                  className="bg-muted flex items-center justify-center rounded-lg h-12 cursor-pointer mb-2"
                  onClick={handleMenuItemClick}
                >
                  <p>{t("nav.dashboard")}</p>
                </div>
              </Link>
            )} */}
            <LocaleSwitcher />
            <ModeToggle />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
