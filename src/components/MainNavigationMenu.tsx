"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
// import { useSession } from "next-auth/react";

type MenuItem = {
  title: string;
  href: string;
};

interface MainNavigationMenuProps {
  menuItems: MenuItem[];
}

const MainNavigationMenu: React.FC<MainNavigationMenuProps> = ({
  menuItems,
}) => {
  // const { data: session } = useSession();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <ThemeToggle />
        <LocaleSwitcher />
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              href={item.href}
              className={navigationMenuTriggerStyle()}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {/* {session && (
          <NavigationMenuItem key="dashboard">
            <NavigationMenuLink
              href="/dashboard"
              className={navigationMenuTriggerStyle()}
            >
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem>
        )} */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavigationMenu;
