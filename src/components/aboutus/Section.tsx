import React from "react";
import Founders from "./Founders";
import Values from "./Values";
import Achievements from "@/components/aboutus/Achievements";

interface SectionProps {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  founders?: boolean;
  values?: boolean;
  achievements?: boolean;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  title,
  description,
  icon,
  founders,
  values,
  achievements,
}) => {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      <div className="container px-4 md:px-6 flex flex-col items-center">
        {icon && <div className="mx-auto w-20 h-20">{icon}</div>}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {founders && <Founders />}
          {values && <Values />}
          {achievements && <Achievements />}
        </div>
      </div>
    </section>
  );
};

export default Section;
