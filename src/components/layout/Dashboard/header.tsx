"use client";

import ThemeToggle from "@/components/layout/Dashboard/ThemeToggle/theme-toggle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTheme } from "next-themes";

export default function Header() {
  const t = useTranslations("Header");
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden md:block">
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
        </div>
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <div className="hidden md:block">
            <UserNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
