import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  id: number;
  name: string;
  description: string;
  location: string;
  rating: number;
};

type ServiceItemProps = {
  service: Service;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <CardTitle className="font-bold">{service.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-2">
          {service.description}
        </CardDescription>
        <p className="text-sm mb-2">Location: {service.location}</p>
        <p className="text-sm mb-2">Rating: {service.rating}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* <Link href={`/services/?id=${service.id}`} passHref>
          <Button>Details</Button>
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export default ServiceItem;
