"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

import ServiceCard from "./ServicesCard";

const data = [
  {
    title: "Online Mode",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    image: "/assets/service-1.jpg",
    link: "/online",
  },
  {
    title: "Offline Mode",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    image: "/assets/service-2.jpg",
    link: "/offline",
  },
  {
    title: "Home Visit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    image: "/assets/service-1.jpg",
    link: "/home",
  },
  {
    title: "Video Call",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    image: "/assets/service-2.jpg",
    link: "/video",
  },
];

export function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full mt-[100px] py-5 flex justify-center flex-col items-center">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center">Our Services Mode</h1>
        <p className="text-center text-[#5D5D5D] my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </p>
      </div>
      <Carousel
        onMouseEnter={plugin.current.stop}
        onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) =>
          plugin.current.play()
        }
        plugins={[plugin.current]}
        className="w-full max-w-[1300px]"
      >
        <CarouselContent className="-ml-1">
          {data.map((d, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 "
            >
              <div className="p-1">
                <ServiceCard data={d} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hiiden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>

      {/* <div className="flex w-full justify-center my-5 items-center">
        <Link href="/feedback" className="border border-slate-700 px-10 py-2 rounded-md">View All</Link>
      </div> */}

      {/* <Button2 btnName="View All" link="/feedback" className="w-[200px] my-5 text-xl h-[50px]" onClick={() => {}}/> */}
    </div>
  );
}
