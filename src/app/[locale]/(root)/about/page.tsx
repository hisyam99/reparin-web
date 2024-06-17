import Section from "@/components/layout/aboutus/Section";
import {
  LightbulbIcon,
  UsersIcon,
  MountainIcon,
} from "@/components/layout/aboutus/icons";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main className="space-y-12">
      <Section
        title={t("aboutUs.title")}
        description={t("aboutUs.description")}
        icon={
          <LightbulbIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
        }
        founders
      />
      <Section
        className="bg-gray-100 dark:bg-gray-900"
        title={t("ourValues.title")}
        description={t("ourValues.description")}
        icon={
          <UsersIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
        }
        values
      />
      <Section
        title={t("achievements.title")}
        description={t("achievements.description")}
        icon={
          <MountainIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
        }
        achievements
      />
    </main>
  );
}
