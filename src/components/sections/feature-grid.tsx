"use client";

import React from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { getAppEntryUrl } from "@/lib/utils";

// Moved highlight cards data here to display below "...and so much more"
const features = [
  {
    title: "Assess Candidates for Any Task or Role",
    description: "Create virtual environments to assess candidates for any task or role. Select a huge library of tasks.",
    image: "/features/dashboard.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Collaborative Work Trials",
    description: "Work side by side with candidates - before they start. Shrink three-week evaluation loops into one 3d trial.",
    image: "/features/live-session.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Faster, Deeper Evaluations for Better Hiring Decisions",
    description: "A hiring process tailored to Founders, Investors, and Hackers",
    image: "/features/report.png",
    link: "https://trustcollab.xyz",
  }
];

export default function FeatureGrid() {
  return (
    <section id="why-now" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-text-primary mb-6">
          If you're still spending weeks on interviews -
          <br />
          you’re already behind.
        </h2>
        <div className="mx-auto mb-10 max-w-3xl text-center text-base text-text-secondary sm:text-lg">
          <p>Our AI sandbox data replaces intuition. Cut 3-week evaluations to one afternoon.</p>
        </div>
        <div className="mb-12 text-center">
          <a
            href={getAppEntryUrl()}
            className="inline-flex items-center gap-2 text-base font-semibold text-accent-blue hover:text-accent-blue transition-colors duration-200"
          >
            Try It Free Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {features.map((feature, index) => (
                <div key={index} className="w-full max-w-sm h-[440px]">
                  <div className="group block relative h-full w-full overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
