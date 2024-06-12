"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SignInButton from "./SignInButton";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const MenuDrawer = dynamic(() => import("./MenuDrawer"), { ssr: false });
import MainNavigationMenu from "./MainNavigationMenu";

type MenuItem = {
  title: string;
  href: string;
};

const Header = () => {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const getMenuItems = (): MenuItem[] => [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.dashboard"), href: "/dashboard" },
  ];

  const menuItems = getMenuItems();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`supports-backdrop-blur:bg-background/60 sticky left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur transition-all duration-300 items-center ${
        isScrolled ? "min-h-[60px] py-2" : "min-h-[80px] py-4"
      }`}
    >
      <div className={`container flex justify-between items-center px-4`}>
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src={
                currentTheme === "dark"
                  ? "/icon/fixitnow-icon-dark.png"
                  : "/icon/fixitnow-icon.png"
              }
              alt={t("nav.title")}
              width={isScrolled ? 100 : 125}
              height={isScrolled ? 100 : 125}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mx-4 block md:hidden">
            <MenuDrawer menuItems={menuItems} />
          </div>
          <nav className="hidden md:block mx-4">
            <MainNavigationMenu menuItems={menuItems} />
          </nav>
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Header;