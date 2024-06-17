"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import ServiceItem from "@/components/layout/ServiceItem";
import DeleteConfirmation from "@/components/layout/DeleteConfirmation";

interface Service {
  id: number;
  name: string;
  description: string;
  location: string;
  rating: number;
}

export default function ServiceDetail() {
  const [service, setService] = useState<Service | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const fetchServiceDetails = useCallback(async () => {
    if (!id) return;

    try {
      const response = await fetch(`/apis/services/${id}`);
      if (!response.ok) throw new Error("Failed to fetch service details");

      const data = await response.json();
      setService(data);
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchServiceDetails();
  }, [fetchServiceDetails]);

  const handleDelete = useCallback(async () => {
    try {
      const response = await fetch(`/apis/services/${id}`, {
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
  }, [id, router]);

  if (!service) return null;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <ServiceItem service={service} />
      {session?.user.role === "admin" && (
        <>
          <Button onClick={() => setOpenDeleteDialog(true)}>
            Delete Service
          </Button>
          <DeleteConfirmation
            open={openDeleteDialog}
            onClose={() => setOpenDeleteDialog(false)}
            onConfirm={handleDelete}
          />
        </>
      )}
    </div>
  );
}
