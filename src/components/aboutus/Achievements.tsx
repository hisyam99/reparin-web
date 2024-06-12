import React from "react";
import { useTranslations } from "next-intl";
import { AwardIcon, UsersIcon, RocketIcon } from "@/components/aboutus/icons";

const Achievements: React.FC = () => {
  const t = useTranslations("achievements");

  const achievements = [
    {
      icon: <AwardIcon />,
      title: t("industryAwards.title"),
      description: t("industryAwards.description"),
    },
    {
      icon: <UsersIcon />,
      title: t("satisfiedClients.title"),
      description: t("satisfiedClients.description"),
    },
    {
      icon: <RocketIcon />,
      title: t("rapidGrowth.title"),
      description: t("rapidGrowth.description"),
    },
  ];

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {achievements.map((achievement, index) => (
        <div key={index} className="grid gap-4 text-center">
          {React.cloneElement(achievement.icon, {
            className: "mx-auto h-8 w-8 text-gray-500 dark:text-gray-400",
          })}
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{achievement.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {achievement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
