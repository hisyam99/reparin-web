"use client";

import React, { useEffect, useState, useCallback, CSSProperties } from "react";
import ServiceList from "@/components/layout/ServiceList";

interface Service {
  id: number;
  name: string;
  description: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  const backgroundStyle: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  };

  const fetchServices = useCallback(async () => {
    try {
      const response = await fetch("/apis/services");
      if (!response.ok) {
        throw new Error("Failed to fetch services.");
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", (error as Error).message);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <div style={backgroundStyle}>
      <section>
        <h1 className="container text-3xl font-bold mt-4 mb-4">
          Available Services
        </h1>
        <ServiceList services={services} />
      </section>
    </div>
  );
}
