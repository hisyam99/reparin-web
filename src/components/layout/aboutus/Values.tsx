import React from "react";
import { useTranslations } from "next-intl";
import {
  RocketIcon,
  UsersIcon,
  BoltIcon,
  BriefcaseIcon,
  LightbulbIcon,
  AwardIcon,
} from "@/components/layout/aboutus/icons";

const Values: React.FC = () => {
  const t = useTranslations("values");

  const values = [
    {
      icon: <RocketIcon />,
      title: t("innovation.title"),
      description: t("innovation.description"),
    },
    {
      icon: <UsersIcon />,
      title: t("collaboration.title"),
      description: t("collaboration.description"),
    },
    {
      icon: <BoltIcon />,
      title: t("agility.title"),
      description: t("agility.description"),
    },
    {
      icon: <BriefcaseIcon />,
      title: t("excellence.title"),
      description: t("excellence.description"),
    },
    {
      icon: <LightbulbIcon />,
      title: t("creativity.title"),
      description: t("creativity.description"),
    },
    {
      icon: <AwardIcon />,
      title: t("recognition.title"),
      description: t("recognition.description"),
    },
  ];

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {values.map((value, index) => (
        <div key={index} className="grid gap-4 text-center">
          {React.cloneElement(value.icon, {
            className: "mx-auto h-8 w-8 text-gray-500 dark:text-gray-400",
          })}
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{value.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
