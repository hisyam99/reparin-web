"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ThreeDCardProps {
  testimonials: Array<{
    id: number;
    cardProps: {
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      linkHref: string;
      linkText: string;
      buttonHref: string; // Add this new field
      buttonText: string;
    };
  }>;
  plugin: React.MutableRefObject<any>;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  testimonials,
  plugin,
}) => {
  return (
    <Carousel
      plugins={[plugin.current]}
      className="mx-8"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="flex gap-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="flex-none">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full xs:w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] xl:w-[36rem] h-auto rounded-xl p-4 sm:p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {testimonial.cardProps.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-xs sm:text-sm mt-2 dark:text-neutral-300"
                >
                  {testimonial.cardProps.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={testimonial.cardProps.imageSrc}
                    height={1000}
                    width={1000}
                    className="h-32 w-full object-contain rounded-xl sm:h-60"
                    alt={testimonial.cardProps.imageAlt}
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-10 sm:mt-20">
                  {/* <CardItem
                    translateZ={20}
                    as={Link}
                    href={testimonial.cardProps.linkHref}
                    target="__blank"
                    className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    {testimonial.cardProps.linkText} →
                  </CardItem> */}
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={testimonial.cardProps.buttonHref} // Use buttonHref here
                    className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {testimonial.cardProps.buttonText}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
