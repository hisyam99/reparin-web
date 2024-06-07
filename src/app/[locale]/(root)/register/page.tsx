"use client";

import React from "react";

const RegisterPage: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
      </div>
    </div>
  );
};

export default RegisterPage;
