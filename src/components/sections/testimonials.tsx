"use client";

import Image from "next/image";
import { Star, User } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  name: string;
  college: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    college: "Stanford '28",
    quote: "CollegeNavigator's AI essay reviewer transformed my application. The feedback was incredibly detailed!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-030654-avatar1.jpg",
  },
  {
    name: "Michael Rodriguez",
    college: "MIT '28",
    quote: "The interview prep feature was a game-changer. I walked into my MIT interview confident and prepared.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-663686-avatar2.jpg",
  },
  {
    name: "Emily Thompson",
    college: "Harvard '28",
    quote: "Found $50,000 in scholarships I never knew existed. Absolutely life-changing!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-600958-avatar3.jpg",
  },
  {
    name: "David Kim",
    college: "Yale '28",
    quote: "The personalized college matching saved me so much time. Applied to perfect fit schools only.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-105204-avatar4.jpg",
  },
  {
    name: "Jessica Martinez",
    college: "Princeton '28",
    quote: "Having an AI copilot throughout my journey made all the difference. Like a 24/7 counselor!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Jessica%20Martinez",
  },
  {
    name: "Alex Johnson",
    college: "Columbia '28",
    quote: "Never missed a deadline thanks to the timeline tracker. Submitted everything early!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Alex%20Johnson",
  },
  {
    name: "Sophia Lee",
    college: "Brown '28",
    quote: "The essay analyzer helped me find my authentic voice. Got into my dream school!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sophia%20Lee",
  },
  {
    name: "Ryan Patel",
    college: "UPenn '28",
    quote: "CollegeNavigator made the impossible possible. First-gen student heading to Penn!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ryan%20Patel",
  },
  {
    name: "Isabella Garcia",
    college: "Duke '28",
    quote: "The community support was amazing. Found my best friends before even starting college!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Isabella%20Garcia",
  },
  {
    name: "Nathan Wu",
    college: "Caltech '28",
    quote: "Scholarship finder paid for my entire education. Can't thank CollegeNavigator enough!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Nathan%20Wu",
  },
  {
    name: "Olivia Brown",
    college: "Northwestern '28",
    quote: "The mock interviews prepared me for everything. Aced my Northwestern interview!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Olivia%20Brown",
  },
  {
    name: "Ethan Davis",
    college: "Cornell '28",
    quote: "Best investment my parents ever made. Got into 8 out of 10 schools I applied to!",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ethan%20Davis",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [imgError, setImgError] = useState(false);
  const showIcon = !testimonial.avatar || testimonial.avatar.includes("api.dicebear.com/7.x/initials") || imgError;

  return (
    <figure className="relative h-fit w-[350px] shrink-0 rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex items-center gap-4">
        {showIcon ? (
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-gray-400">
            <User className="h-6 w-6" aria-hidden />
          </div>
        ) : (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover bg-muted"
            onError={() => setImgError(true)}
          />
        )}
        <div>
          <p className="text-base font-bold text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-secondary">{testimonial.college}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
      </div>
      <blockquote className="mt-4">
        <p className="text-base text-text-secondary">"{testimonial.quote}"</p>
      </blockquote>
    </figure>
  );
};

const TestimonialsScroller = ({
  items,
  direction,
  speed,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  speed: "normal" | "slow" | "fast";
}) => {
  const animationDuration = speed === "slow" ? "80s" : speed === "normal" ? "60s" : "40s";
  // The keyframes `marquee-left` and `marquee-right` are assumed to be defined in a global css file.
  // @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  // @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  const animationClass =
    direction === "left"
      ? `animate-[marquee-left_${animationDuration}_linear_infinite]`
      : `animate-[marquee-right_${animationDuration}_linear_infinite]`;

  return (
    <div className={`flex min-w-full shrink-0 gap-4 py-3 w-max flex-nowrap ${animationClass}`}>
      {[...items, ...items].map((item, index) => (
        <TestimonialCard key={`${item.name}-${index}`} testimonial={item} />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(6, 12).reverse();
  const row3 = [...testimonials.slice(3, 9)];

  return (
    <section className="bg-background-primary py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="w-48 h-[2px] bg-gray-600 mx-auto mb-6"></div>
          <span className="mb-4 inline-flex items-center rounded-md bg-blue-100/70 px-3 py-1 text-sm font-medium text-blue-800 ring-1 ring-inset ring-blue-200">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Why students love CollegeNavigator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Join thousands of students who got into their dream colleges with CollegeNavigator
          </p>
        </div>

        <div className="relative mt-12 flex flex-col gap-2 overflow-hidden">
          <div className="pointer-events-none absolute top-0 inset-x-0 h-12 sm:h-16 bg-gradient-to-b from-background-primary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background-primary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background-primary to-transparent z-10" />
          <TestimonialsScroller items={row1} direction="left" speed="normal" />
          <TestimonialsScroller items={row2} direction="right" speed="slow" />
          <TestimonialsScroller items={row3} direction="left" speed="fast" />
        </div>
        
        <div className="mt-16 text-center">
          <span className="text-base font-semibold text-text-primary transition-colors hover:text-accent-blue">
            Read all 1,200+ reviews →
          </span>
        </div>
      </div>
    </section>
  );
}