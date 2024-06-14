"use client";

import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { UserNav } from "./layout/user-nav";

const SignInButton: React.FC = () => {
  const { data: session } = useSession();
  const t = useTranslations("Header");

  return (
    <>
      {session ? (
        <UserNav />
      ) : (
        <Button variant="default" onClick={() => signIn()}>
          {t("nav.login")}
        </Button>
      )}
    </>
  );
};

export default SignInButton;
