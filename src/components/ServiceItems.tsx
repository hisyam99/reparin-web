import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ThreeDCard } from "./ThreeDCard";

export function ServiceItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      cardProps: {
        title: "Smartphones",
        description: "Perbaikan Smartphone yang handal",
        imageSrc: "/hp.png",
        imageAlt: "thumbnail",
        linkHref: "/login",
        linkText: "Try now",
        buttonHref: "/dashboard/services",
        buttonText: "Try now",
      },
    },
    {
      id: 2,
      cardProps: {
        title: "Laptop",
        description: "Perbaikan Laptop terbaik yang pernah ada",
        imageSrc: "/laptop.png",
        imageAlt: "thumbnail",
        linkHref: "/login",
        linkText: "Try now",
        buttonHref: "/dashboard/services",
        buttonText: "Try now",
      },
    },
    {
      id: 3,
      cardProps: {
        title: "Tablet",
        description: "Buat tabletmu seperti baru !",
        imageSrc: "/tablet.png",
        imageAlt: "thumbnail",
        linkHref: "/login",
        linkText: "Try now",
        buttonHref: "/dashboard/services",
        buttonText: "Try now",
      },
    },
  ];

  return <ThreeDCard testimonials={testimonials} plugin={plugin} />;
}
