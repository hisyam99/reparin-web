import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="w-full text-center py-12 relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center gradient-overlay"
          style={{ backgroundImage: "url('/background.jpg')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">
            {t("welcomeTitle")}
          </h1>
          <p className="text-lg mb-6 text-white">{t("welcomeMessage")}</p>
        </div>
      </section>

      <section className="w-full max-w-5xl grid lg:grid-cols-3 gap-8 py-12">
        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("laptopRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("laptopRepairsMessage")}</p>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("mobileRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("mobileRepairsMessage")}</p>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("tabletRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("tabletRepairsMessage")}</p>
        </div>
      </section>

      <section className="w-full max-w-5xl py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">{t("whyChooseUs")}</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("expertTechniciansTitle")}
            </h3>
            <p className="text-sm opacity-70">
              {t("expertTechniciansMessage")}
            </p>
          </div>

          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("qualityPartsTitle")}
            </h3>
            <p className="text-sm opacity-70">{t("qualityPartsMessage")}</p>
          </div>

          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("customerSatisfactionTitle")}
            </h3>
            <p className="text-sm opacity-70">
              {t("customerSatisfactionMessage")}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">{t("getInTouch")}</h2>
        <p className="text-lg mb-6">{t("getInTouchMessage")}</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-blue-500 text-white px-6 py-3 hover:bg-blue-700"
        >
          {t("contactUsButton")}
        </a>
      </section>
    </main>
  );
}
