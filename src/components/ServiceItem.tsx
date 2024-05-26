import React from "react";
import Link from "next/link";

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
    <div className="mb-4">
      <div>
        <h5 className="font-bold mb-2">{service.name}</h5>
        <p className="text-sm text-gray-500 mb-2">{service.description}</p>
        <p className="text-sm text-gray-500 mb-2">
          Location: {service.location}
        </p>
        <p className="text-sm text-gray-500 mb-2">Rating: {service.rating}</p>
        <Link href={`/services/?id=${service.id}`} passHref>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
