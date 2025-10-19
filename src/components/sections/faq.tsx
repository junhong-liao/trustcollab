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
    question: "What happens after I request early access?",
    answer:
      "We schedule a 15-minute onboarding, tailor sandbox templates to your roles, and spin up your first trial environment within 24 hours.",
  },
  {
    value: "item-2",
    question: "How long does a sandbox trial take to run?",
    answer:
      "Most teams complete trials in under 30 minutes per candidate. TrustCollab handles prep, timing, and AI observation so you only focus on the results.",
  },
  {
    value: "item-3",
    question: "Can my hiring panel join and score together?",
    answer:
      "Yes. Invite founders, hiring managers, and recruiters to review the live feed or replay. Everyone sees the same objective scorecard and behavioral breakdown.",
  },
  {
    value: "item-4",
    question: "Does TrustCollab work with our ATS or workflows?",
    answer:
      "We sync decisions via webhooks or quick exports today, with native integrations for Lever and Ashby shipping soon. No heavy lift required.",
  },
  {
    value: "item-5",
    question: "What if a candidate declines the sandbox trial?",
    answer:
      "We provide a lightweight alternative challenge and coach you on positioning. Most candidates lean in because it proves their value faster than another interview.",
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
