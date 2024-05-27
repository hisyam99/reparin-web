// components/ui/CustomAlert.tsx

import React from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type CustomAlertProps = {
  title: string;
  description: string;
  variant: "default" | "success" | "error" | "warning";
};

const CustomAlert: React.FC<CustomAlertProps> = ({ title, description, variant }) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return <Terminal className="h-4 w-4 text-green-500" />;
      case "error":
        return <Terminal className="h-4 w-4 text-red-500" />;
      case "warning":
        return <Terminal className="h-4 w-4 text-yellow-500" />;
      default:
        return <Terminal className="h-4 w-4" />;
    }
  };

  return (
    <Alert className={`alert-${variant}`}>
      {getIcon()}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
