"use client"

import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu"; // Ubah path sesuai dengan struktur proyek Anda
import { useTranslations } from "next-intl";

const SignInButton: React.FC = () => {
  const { data: session } = useSession();
  const t = useTranslations("Header");

  return (
    <>
      {session ? (
        <UserMenu session={session} />
      ) : (
        <Button variant="default" onClick={() => signIn()}>
          {t("nav.login")}
        </Button>
      )}
    </>
  );
};

export default SignInButton;