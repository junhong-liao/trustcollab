"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";

// Moved highlight cards data here to display below "...and so much more"
const features = [
  {
    title: "AI-Verified Sandbox Data",
    description: "Replace intuition with performance metrics mapped to your hiring rubric.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Minutes, Not Months",
    description: "Shrink three-week evaluation loops into one 30-minute live trial.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Investor-Grade Reporting",
    description: "Hand founders and backers the proof they keep asking for.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/vv1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Bias Guardrails",
    description: "AI co-pilot captures behavior, not backgrounds, so every decision stays fair.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Role-Ready Templates",
    description: "Spin up product, engineering, and ops trials without reinventing the brief.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Founders Are Onboarding Now",
    description: "Top teams are locking in lifetime proof badges before the beta fills up.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
];

// Dots for the bottom of the carousel
const CarouselDots = () => {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback(
    (index: number) => api && api.scrollTo(index),
    [api],
  );

  useEffect(() => {
    if (!api) return;
    onSelect(api as any);
    (api as any).on("select", onSelect);
    (api as any).on("reInit", onSelect);
    return () => {
      (api as any).off("select", onSelect);
      (api as any).off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {features.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            index === selectedIndex ? "bg-accent-blue" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default function FeatureGrid() {
  return (
    <section id="why-now" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-text-primary mb-6">
          The smartest startups already validate — you’re one step behind.
        </h2>
        <div className="mx-auto mb-10 max-w-3xl text-center text-base text-text-secondary sm:text-lg">
          <p>AI-verified sandbox data replaces intuition.</p>
          <p>Cut 3-week evaluations to one afternoon.</p>
          <p>Top founders and investors are onboarding this quarter.</p>
        </div>
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-base font-semibold text-accent-blue hover:text-accent-blue transition-colors duration-200">
            🔥 Join the Beta Before It Closes
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true, slidesToScroll: 1 }} className="w-full px-6 md:px-12">
            <CarouselContent className="-ml-6">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[440px]"
                >
                  <div
                    className="group block relative h-full w-full overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-white/80">{feature.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold">
                        Read more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2" />
            </div>
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
