"use client";

import * as React from "react";
import { useState } from "react";
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
    <header>
      <div className="container flex justify-between items-center p-4 min-h-[80px]">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="/icon/fixitnow-icon.png"
              alt="Company Logo"
              width={125}
              height={125}
            />
          </Link>
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
          <MenuDrawer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            menuItems={menuItems}
          />
        </div>
        <nav className="hidden md:block">
          <MainNavigationMenu
            menuItems={menuItems}
            onClose={() => setIsOpen(false)}
          />
        </nav>
      </div>
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
          <UserActionButton />
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
        <UserActionButton />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;
