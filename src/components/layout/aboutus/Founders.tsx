import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

const Founders: React.FC = () => {
  const t = useTranslations("founders");

  const founders = [
    {
      name: t("1.name"),
      title: t("1.title"),
      description: t("1.description"),
      image: t("1.image"),
    },
    {
      name: t("2.name"),
      title: t("2.title"),
      description: t("2.description"),
      image: t("2.image"),
    },
    {
      name: t("3.name"),
      title: t("3.title"),
      description: t("3.description"),
      image: t("3.image"),
    },
    {
      name: t("4.name"),
      title: t("4.title"),
      description: t("4.description"),
      image: t("4.image"),
    },
  ];

  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {founders.map((founder, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <Avatar className="w-48 h-48">
            {" "}
            <AvatarImage
              src={founder.image}
              alt={founder.name}
              className="rounded-full object-cover"
              style={{ width: "100%", height: "100%" }}
            />
            <AvatarFallback>{founder.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 mt-4">
            <h3 className="text-lg font-bold">{founder.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {founder.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {founder.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;
