"use client"; // Add this line to mark the component as client-side

import React from "react";
import ServiceForm from "@/components/ServiceForm";

const CreateService: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    minHeight: "100vh",
    padding: "20px",
  };

  const handleSubmit = async (serviceData: {
    name: string;
    description: string;
    location: string;
    rating: string;
  }) => {
    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...serviceData,
          rating: parseFloat(serviceData.rating),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create service. Please try again.");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return (
    <div style={backgroundStyle}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create Service</h1>
        <ServiceForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateService;
