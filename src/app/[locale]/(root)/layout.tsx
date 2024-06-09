import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-screen">
      <ScrollArea className="h-full">
        <div className="w-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </ScrollArea>
    </div>
  );
}
