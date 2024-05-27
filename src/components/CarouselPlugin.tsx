import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: "Great service! Fixed my laptop in no time.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Very professional and reliable. Highly recommended.",
    },
    {
      id: 3,
      name: "David Brown",
      comment: "Excellent customer service. Will use again for sure.",
    },
    {
      id: 4,
      name: "Emily White",
      comment: "Impressive work! My phone looks brand new.",
    },
    {
      id: 5,
      name: "Michael Johnson",
      comment: "Fast and efficient. Couldn't be happier with the result.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs md:max-w-2xl lg:max-w-5xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.comment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
