"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    value: "item-1",
    question: "What happens after I upgrade?",
    answer:
      "You'll immediately get unlimited access to CollegeNavigator's premium features"
  },
  {
    value: "item-5",
    question: "What's included in CollegeNavigator Plus?",
    answer:
      "You'll be given access to unlimited essay and supplement reviews, unbounded applications, and free access to our scholarship matching tool.",
  },
  {
    value: "item-2",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time through your account settings. You'll keep access until the end of your current billing period.",
  },
  {
    value: "item-4",
    question: "Do you have any options for low-income students?",
    answer:
      "We strongly believe in supporting students from all backgrounds. Please contact our support team with a valid student ID, and we'll be in touch with next steps.",
  },
  {
    value: "item-6",
    question: "Do you offer refunds?",
    answer:
      "If you're not happy with CollegeNavigator for any reason within the first 7 days of your subscription, our team will assist you with a full refund.",
  },
];

export default function Faq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="w-48 h-[2px] bg-gray-600 mx-auto mb-6"></div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-text-primary mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full space-y-4"
        >
          {FAQ_DATA.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-card rounded-2xl border-none shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left text-card-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-base text-text-secondary">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}