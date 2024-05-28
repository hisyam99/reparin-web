"use client";

import React, { useEffect, useState } from "react";
import ServiceList from "@/components/ServiceList";

interface Service {
  id: number;
  name: string;
  description: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  const backgroundStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  };

  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div style={backgroundStyle}>
      <section>
        <h1 className="container text-3xl font-bold mt-4 mb-4">Available Services</h1>
        <ServiceList services={services} />
      </section>
    </div>
  );
};

export default Services;
