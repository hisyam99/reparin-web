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
      name: "Budi Santoso",
      comment: "Servisnya mantap banget! Laptop saya jadi kinclong lagi.",
    },
    {
      id: 2,
      name: "Ridwan Kevin",
      comment:
        "Profesional abis! Sangat bisa diandalkan. Sangat direkomendasikan deh.",
    },
    {
      id: 3,
      name: "Agus Salim",
      comment: "Pelayanan pelanggan yang top banget. Pasti bakal balik lagi.",
    },
    {
      id: 4,
      name: "Cak Lemes Hemsworth",
      comment: "Kerjaannya keren! HP saya jadi kayak baru lagi.",
    },
    {
      id: 5,
      name: "Joko Widodo",
      comment: "Cepat dan efisien. Senang banget sama hasilnya.",
    },
    {
      id: 6,
      name: "Andre Depp",
      comment: "Mantul banget, rek! Laptopku jadi wush wush lagi.",
    },
    {
      id: 7,
      name: "Ahmad Dhani",
      comment: "Pelayanannya asoy geboy, barang langsung kinclong.",
    },
    {
      id: 8,
      name: "Iwan Fals",
      comment: "Servisnya kayak lagu galau, bikin kangen.",
    },
    {
      id: 9,
      name: "Parto Cruise",
      comment: "HP aku jadi kayak habis disulap, wow banget!",
    },
    {
      id: 10,
      name: "Raffi Ahmad",
      comment: "Cepet banget, baru ditinggal ngopi udah beres!",
    },
    {
      id: 11,
      name: "Pandji Downey Jr.",
      comment: "Profesional, cekatan, dan ramah banget!",
    },
    {
      id: 12,
      name: "Bambang Pamungkas",
      comment: "Laptopku jadi kayak baru beli, padahal udah jadul.",
    },
    {
      id: 13,
      name: "Tukul Arwana",
      comment: "Lucu tapi beneran, servisnya oke punya!",
    },
    {
      id: 14,
      name: "Indro Pitt",
      comment:
        "Top markotop! Layaknya perpaduan antara keseruan Indro Warkop dan ketampanan Brad Pitt.",
    },
    {
      id: 15,
      name: "Eko Patrio",
      comment: "Sumpah, puas banget! Laptop kayak lahir kembali.",
    },
    {
      id: 16,
      name: "Andhika Pratama",
      comment: "Profesional, pelayanannya nggak kalah sama di luar negeri.",
    },
    {
      id: 17,
      name: "Desy Ratnasari",
      comment: "Servisnya bener-bener menyentuh hati. Recommended!",
    },
    {
      id: 18,
      name: "Cak Lontong DiCaprio",
      comment: "HP yang tadinya mati suri, sekarang hidup lagi!",
    },
    {
      id: 19,
      name: "Sule Clooney",
      comment: "Servisnya wow!",
    },
    {
      id: 20,
      name: "Tarzan Ipin",
      comment: "Profesional abis! kece.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="m-8"
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
              <Card className="h-32">
                <CardContent className="flex items-center justify-center p-6 ">
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
