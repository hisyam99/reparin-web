"use client";

import { useTranslations } from "next-intl";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceItems } from "@/components/ServiceItems";
import { HeroSectionFlipWord } from "@/components/HeroSection/HeroSectionFlipWords";
import { PlaceholdersAndVanishInputDemo } from "@/components/HeroSection/PlaceholdersAndVanishInputDemo";
import { GlobeDemo } from "@/components/HeroSection/GlobeDemo";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center background-custom">
          <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex-grow md:flex-grow-0 flex">
              <PlaceholdersAndVanishInputDemo />
            </div>

            <div className="flex-grow flex items-center justify-center">
              <GlobeDemo />
            </div>
          </div>
        </section>

        <section className="container">
          <ServiceItems />
        </section>

        <section className="container mb-16">
          <h2 className="text-3xl text-center font-semibold mb-6">
            {t("whyChooseUs")}
          </h2>
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

        <section className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">{t("testimoni")}</h2>
          <p className="text-lg mb-6">{t("description")}</p>
          <CarouselPlugin />
        </section>

        <section className="container text-center">
          <h2 className="text-3xl font-semibold mt-8 mb-6">
            {t("getInTouch")}
          </h2>
          <p className="text-lg mb-6">{t("getInTouchMessage")}</p>
          <div className="flex  gap-2  justify-center">
            <Link href="/contact">
              <Button className="items-center">Contact</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
