import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Service {
  id: number;
  name: string;
  description: string;
}

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  const t = useTranslations("ServiceList");

  try {
    if (!services || services.length === 0) {
      throw new Error("No services available.");
    }

    return (
      <Card className="container w-full p-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-4">
            {t("service-list")}
          </CardTitle>
          <CardDescription>{t("service-list-description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {services.map((service) => (
              <li
                key={service.id}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Link href={`/dashboard/services/ /?id=${service.id}`} passHref>
                  <span className="block cursor-pointer">
                    <span className="font-bold text-base">{service.name}</span>
                    <p className="text-sm ">{service.description}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">{t("cancel")}</Button>
          <Button>{t("view-all-services")}</Button> */}
        </CardFooter>
      </Card>
    );
  } catch (error: any) {
    return (
      <Card className="container w-full p-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold mb-4">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{error.message}</p>
        </CardContent>
      </Card>
    );
  }
};

export default ServiceList;
