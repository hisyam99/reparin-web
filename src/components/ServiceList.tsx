import React from "react";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface Service {
  id: number; // Changed from ID to id
  name: string;
  description: string;
}

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  const t = useTranslations("ServiceList");
  return (
    <Card className="p-4 rounded-lg shadow-md">
      <CardTitle className="text-lg font-semibold mb-4">
        {t("service-list")}
      </CardTitle>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.ID} className="hover:bg-gray-100 p-2 rounded-md">
            <Link href={`/services/ /?id=${service.ID}`} passHref>
              <span className="block">
                {" "}
                {/* Ganti <a> dengan <span> */}
                <span className="font-bold text-base">{service.name}</span>
                <p className="text-sm text-gray-600">{service.description}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ServiceList;
