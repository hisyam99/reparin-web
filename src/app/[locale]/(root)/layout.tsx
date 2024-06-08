import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
