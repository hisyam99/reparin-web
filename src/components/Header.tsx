// File 1: /src/components/Header.tsx

"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "./ModeToggle";
import UserActionButton from "./UserActionButton";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";

type MenuItem = {
  title: string;
  href: string;
  onClick?: () => void;
};

const Header = () => {
  const { data: session } = useSession();
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const updatedMenuItems: MenuItem[] = [
      { title: t("nav.home"), href: "/" },
      { title: t("nav.service"), href: "/services" },
      { title: t("nav.createService"), href: "/services/create" },
    ];

    if (session) {
      updatedMenuItems.push({ title: t("nav.dashboard"), href: "/dashboard" });
    }

    setMenuItems(updatedMenuItems);
  }, [session, t]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container flex justify-between items-center p-4 min-h-[80px]">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="/icon/fixitnow-icon.png"
              alt={t("nav.title")}
              width={125}
              height={125}
              priority
            />
          </Link>
        </div>
        <div className="flex">
          <div className="mx-4 block md:hidden">
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
            <MenuDrawer
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              menuItems={menuItems}
            />
          </div>
          <nav className="hidden md:block mx-4">
            <MainNavigationMenu
              menuItems={menuItems}
              onClose={() => setIsOpen(false)}
            />
          </nav>
          <UserActionButton />
        </div>
      </div>
    </header>
  );
};

function MenuDrawer({
  isOpen,
  setIsOpen,
  menuItems,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  menuItems: MenuItem[];
}) {
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
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
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MainNavigationMenu({
  menuItems,
  onClose,
}: {
  menuItems: MenuItem[];
  onClose: () => void;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <ModeToggle />
        <LocaleSwitcher />
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              href={item.href}
              className={navigationMenuTriggerStyle()}
              onClick={onClose}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
