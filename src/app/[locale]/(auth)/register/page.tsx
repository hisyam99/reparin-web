"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { SkeletonDemo } from "@/components/Skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
  const t = useTranslations("Login");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  function handleRegisterSuccess() {
    router.refresh();
  }

  if (status === "loading" || status === "authenticated") {
    return (
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <SkeletonDemo />
      </div>
    );
  }

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute top-10 left-10">
        <Image
          src="/icon/fixitnow-icon.png"
          alt={t("nav.title")}
          width={125}
          height={125}
          className="w-auto h-auto"
          priority
        />
      </div>
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 hidden md:right-8 md:top-8"
        )}
      >
        Register
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: 'url("/background-form.jpg")' }}
        />
        <div className="relative flex items-center text-lg font-medium">
          <Image
            src="/icon/fixitnow-icon.png"
            alt={t("nav.title")}
            width={125}
            height={125}
            className="w-auto h-auto"
            priority
          />
        </div>
        <div className="relative mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Tempat servis terbaik yang pernah ada !&rdquo;
            </p>
            <footer className="text-sm">FixITnow</footer>
          </blockquote>
        </div>
      </div>
      <div className="grid h-full items-center p-4">
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <BackButton />
            <CardTitle className="text-center">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Enter your email and password to register
              </p>
              <RegisterForm onSubmitSuccess={handleRegisterSuccess} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
