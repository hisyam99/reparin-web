"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent } from "react";
import Link from "next/link";

import LoginForm from "@/components/LoginForm";

export default function Login() {
  const t = useTranslations("Login");
  const router = useRouter();

  const backgroundStyle = {
    minHeight: "100vh",
    padding: "20px",
  };

  function handleLoginSuccess() {
    router.push("/");
  }

  return (
    <div style={backgroundStyle}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <LoginForm onSubmitSuccess={handleLoginSuccess} />
        <div className="mt-4">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
