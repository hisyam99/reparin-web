import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const UserActionButton = () => {
  const [user, setUser] = useState(null);
  const t = useTranslations("Header");

  useEffect(() => {
    const fetchUserSession = async () => {
      const response = await fetch("/api/auth/session");
      const session = await response.json();
      setUser(session.user);
    };
    fetchUserSession();
  }, []);

  const actionLabel = user ? t("nav.logout") : t("nav.login");
  const actionURL = user ? "/api/auth/signout" : "/login";

  return (
    <div className="flex justify-between gap-2">
      <Link href={actionURL}>
        <Button>{actionLabel}</Button>
      </Link>
    </div>
  );
};

export default UserActionButton;
