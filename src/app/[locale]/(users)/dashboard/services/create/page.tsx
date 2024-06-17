"use client";

import ServiceForm from "@/components/layout/ServiceForm";
import withAuthorization from "@/components/layout/Dashboard/withClientSideAuthorization";

function CreateService() {
  const backgroundStyle = {
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
      const response = await fetch("/apis/services", {
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
      console.error("Error creating service:", (error as Error).message);
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
}

export default withAuthorization(CreateService, ["admin", "repairman"]);
