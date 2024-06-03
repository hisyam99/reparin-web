"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";

import LoginForm from "@/components/LoginForm";

export default function Login() {
  const t = useTranslations("Login");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const backgroundStyle = {
    minHeight: "100vh",
    padding: "20px",
  };

  function handleLoginSuccess() {
    router.refresh();
    router.push("/");
  }

  if (status === "loading" || status === "authenticated") {
    return (
      <div style={backgroundStyle}>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
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
