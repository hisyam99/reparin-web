import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  const t = useTranslations("UnauthorizedPage");

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      <p className="max-w-[460px] text-center mb-8 text-2xl">
        {t("description")}
      </p>
      <Button variant="destructive" asChild>
        <Link href="/dashboard">{t("backToHome")}</Link>
      </Button>
    </section>
  );
}
