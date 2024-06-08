import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SignInButton from "./SignInButton";
import dynamic from "next/dynamic";

const MenuDrawer = dynamic(() => import("./MenuDrawer"), { ssr: false });
import MainNavigationMenu from "./MainNavigationMenu";

type MenuItem = {
  title: string;
  href: string;
};

const Header = () => {
  const t = useTranslations("Header");

  const getMenuItems = (): MenuItem[] => [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.dashboard"), href: "/dashboard" },
  ];

  const menuItems = getMenuItems();

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
