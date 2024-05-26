"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.service"), href: "/services" },
    { title: t("nav.createService"), href: "/services/create" },
  ];

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src="/logo/logo_sipinter.png"
          alt="Company Logo"
          width={150}
          height={150}
        />
      </div>
      <div className="block md:hidden">
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
        <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />
      </div>
      <nav className="hidden md:block">
        <MainNavigationMenu menuItems={menuItems} onClose={() => setIsOpen(false)} />
      </nav>
    </header>
  );
};

type MenuItem = {
  title: string;
  href: string;
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
  const t = useTranslations("Header");

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-screen top-0 right-auto left-auto mt-0 w-[300px] rounded-none">
        {/* <DrawerHeader>
          <DrawerTitle>{t("drawerTitle")}</DrawerTitle>
        </DrawerHeader> */}
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
          <ModeToggle />
          <br />
          <LocaleSwitcher />
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
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={onClose} // Close the drawer when a menu item is clicked
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <LocaleSwitcher />
        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
