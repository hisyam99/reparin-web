"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ServiceItem from "@/components/ServiceItem";
import DeleteConfirmation from "@/components/DeleteConfirmation";

interface Service {
  id: string;
  name: string;
  description: string;
  // Add other properties of the service here
}

const ServiceDetail: React.FC = () => {
  const [service, setService] = useState<Service | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const backgroundStyle = {
    minHeight: "100vh",
  };

  useEffect(() => {
    if (id) {
      fetch(`/api/services/${id}`)
        .then((response) => response.json())
        .then((data) => setService(data))
        .catch((error) =>
          console.error("Error fetching service details:", error)
        );
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/services");
      } else {
        console.error("Failed to delete service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4" style={backgroundStyle}>
      <ServiceItem service={service} />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setOpenDeleteDialog(true)}
      >
        Delete Service
      </button>
      <DeleteConfirmation
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ServiceDetail;
