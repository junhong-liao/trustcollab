"use client";

import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  college: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jamal Ortiz",
    college: "Head of Engineering · AtlasOps",
    quote: "We shipped our first sandbox trial the day after onboarding. Watching candidates build alongside our team exposed gaps interviews never caught.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-030654-avatar1.jpg",
  },
  {
    name: "Priya Nandakumar",
    college: "Talent Lead · Sequoia-backed SaaS",
    quote: "TrustCollab cut our hiring cycle from 24 days to 9. We now move forward with confidence knowing the AI scorecard has our back.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-663686-avatar2.jpg",
  },
  {
    name: "Lena Park",
    college: "Co-Founder · Sprintly",
    quote: "Founders kept asking for proof behind every hire. Now we hand them the sandbox replay and the conversation ends with 'approved'.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-600958-avatar3.jpg",
  },
  {
    name: "Marco Diaz",
    college: "CTO · Brightloop",
    quote: "The behavioral insights surfaced collaboration issues and leadership sparks we never would have seen in a whiteboard interview.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-105204-avatar4.jpg",
  },
  {
    name: "Hannah Rivers",
    college: "Ops Lead · Finch Supply",
    quote: "I finally have a fair, bias-free way to compare candidates. The AI notes highlight real behaviors instead of gut feel.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Hannah%20Rivers",
  },
  {
    name: "Noah Kim",
    college: "CEO · Ember Labs",
    quote: "Investors love the proof badges. They literally screenshot our TrustCollab reports into the board deck.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Noah%20Kim",
  },
  {
    name: "Sasha Morgan",
    college: "Recruiting Partner · Arc Collective",
    quote: "The replay feature lets hiring managers catch up on trials in minutes. No more wrangling calendars for follow-up interviews.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sasha%20Morgan",
  },
  {
    name: "Omar Khalil",
    college: "Product Director · Mavenly",
    quote: "Candidates tell us this is the most honest interview they've had. The best ones thrive and self-select in.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Omar%20Khalil",
  },
  {
    name: "Isabel Reyes",
    college: "Chief of Staff · Beacon One",
    quote: "Our team stopped debating résumés. We now debate the clips and metrics, which means faster, calmer decisions.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Isabel%20Reyes",
  },
  {
    name: "Tyler Brooks",
    college: "VP Engineering · LatticeLight",
    quote: "TrustCollab surfaced communication issues that would have cost us months post-hire. It paid for itself in the first week.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Tyler%20Brooks",
  },
  {
    name: "Amelia Fox",
    college: "Head of People · Signal Ridge",
    quote: "The setup took less than an hour. Now every finalist runs through the same trial and scorecard, keeping us consistent.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Amelia%20Fox",
  },
  {
    name: "Ravi Patel",
    college: "Principal · Velocity Ventures",
    quote: "When our portfolio founders show us TrustCollab dashboards, we know their hiring engine is de-risked. It's become a diligence staple.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ravi%20Patel",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <figure className="relative h-fit w-[350px] shrink-0 rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex flex-col">
        <p className="text-base font-bold text-text-primary">{testimonial.name}</p>
        <p className="text-sm text-text-secondary">{testimonial.college}</p>
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
            Why hiring teams choose TrustCollab
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Founders, recruiters, and investors use live sandbox proof to back every offer they send.
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
            Peek inside more validation stories →
          </span>
        </div>
      </div>
    </section>
  );
}
