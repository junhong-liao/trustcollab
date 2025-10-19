"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Live Sandbox Trials",
    description: "Drop candidates into a real environment and see how they actually perform.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-761165-feature1.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "AI Performance Dashboard",
    description: "Automatic scoring on speed, quality, collaboration, and problem solving.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-950790-feature2.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Collaboration Signals",
    description: "Track communication, initiative, and decision making in real time.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-256627-feature3.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Role-Ready Task Library",
    description: "Launch pre-built trials matched to engineering, product, and ops roles.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-338396-feature4.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Truthful Scorecards",
    description: "Give your team a shared, bias-free rubric that captures what matters.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-008693-feature5.png",
    link: "https://trustcollab.xyz",
  },
  {
    title: "Hiring Snapshot",
    description: "Summaries and next steps ready to share with founders, investors, or hiring panels.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-761165-feature1.png",
    link: "https://trustcollab.xyz",
  },
];

const HighlightsShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isAtStart = el.scrollLeft <= 0;
      const isAtEnd = Math.ceil(el.scrollLeft) + el.clientWidth >= el.scrollWidth;
      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = (380 + 32) * (direction === 'left' ? -1 : 1); // card_width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-teams" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-extrabold tracking-tight text-text-primary">
              Every bad hire costs you months. One sandbox trial costs you minutes.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              The best teams don’t rely on talk — they test. In under 30 minutes, see how a candidate solves,
              communicates, and collaborates inside a real-time trial powered by AI metrics. It’s not another interview
              — it’s truth under pressure.
            </p>
          </div>
          {/* Arrows moved next to the carousel below */}
        </div>
      </div>
      <div className="pl-4 sm:pl-6 lg:pl-8 relative">
        {/* Side arrows centered vertically */}
        <div className="pointer-events-none hidden lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center -translate-x-1/2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="pointer-events-auto p-3 border border-border bg-background rounded-full text-text-secondary transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center translate-x-1/2">
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="pointer-events-auto p-3 border border-border bg-background rounded-full text-text-secondary transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-8 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-[380px] h-[500px] flex-shrink-0 snap-start overflow-hidden rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 380px"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-8">
                <h3 className="text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-white/80">{feature.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold">
                  🚀 Run Your First Sandbox Trial
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsShowcase;
