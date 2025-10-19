"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const freeFeatures = [
  "2 sandbox trials every month",
  "AI scorecard with collaboration metrics",
  "Recorded replays and highlight reels",
  "Standard role templates",
  "Shared hiring notes workspace",
];

const unlimitedFeatures = [
  "Everything in Starter, plus:",
  "Unlimited sandbox trials and templates",
  "Custom role-specific scenarios",
  "Advanced analytics and benchmarking",
];

const enterpriseFeatures = [
  "Portfolio-wide analytics dashboard",
  "Bulk onboarding and role provisioning",
  "SSO integrations (Google, Okta, Azure AD)",
  "Custom workflows and permissions",
  "Dedicated performance strategist",
  "Security reviews and compliance support",
  "Priority support with rapid SLAs",
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="w-48 h-[2px] bg-gray-600 mx-auto mb-6"></div>
          <div className="mb-4 inline-block rounded-full bg-blue-100/60 px-4 py-1.5">
            <span className="text-sm font-semibold text-blue-700">Pricing</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">
            Proof-first hiring for every team size.
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Start validating candidates in days, scale to every role when you’re ready.
          </p>

          <div className="mt-8 mb-10 flex items-center justify-center gap-4">
            <label htmlFor="billing-cycle" className="text-sm font-medium text-gray-600">
              Monthly
            </label>
            <Switch
              id="billing-cycle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle billing cadence"
            />
            <label htmlFor="billing-cycle" className="text-sm font-medium text-gray-600">
              Annual
            </label>
            <span className="ml-2 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
              Beta pricing
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          {/* Free Plan Card */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
            <p className="mt-4 text-5xl font-extrabold text-gray-900">Free</p>
            <p className="mt-4 text-base text-gray-600">
              For teams exploring live sandbox validation with a small slate of roles.
            </p>
            <button className="mt-8 w-full rounded-lg bg-gray-100 py-3 font-semibold text-gray-800">
              Claim beta pass
            </button>
            <hr className="my-8 border-gray-200" />
            <h4 className="text-lg font-semibold text-gray-900">Key features:</h4>
            <ul className="mt-6 space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unlimited Plan Card */}
          <div className="relative flex h-full flex-col rounded-2xl border-2 border-blue-500 bg-white p-8 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-blue-500 px-4 py-1.5">
                <span className="text-sm font-semibold text-white">Most Popular</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Growth</h3>
            <p className="mt-4 text-5xl font-extrabold text-gray-900">
              {isAnnual ? '$16' : '$25'}
              <span className="text-lg font-medium text-gray-500">/month</span>
            </p>
            <p className="mt-4 text-base text-gray-600">
              For teams hiring across multiple roles who want every decision backed by proof.
            </p>
            <button className="mt-8 w-full rounded-lg bg-blue-500 py-3 font-semibold text-white">
              Unlock TrustCollab Growth →
            </button>
            <hr className="my-8 border-gray-200" />
            <h4 className="text-lg font-semibold text-gray-900">Everything you need:</h4>
            <ul className="mt-6 space-y-4">
              {unlimitedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan Card */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
            <p className="mt-4 text-5xl font-extrabold text-gray-900">Custom</p>
            <p className="mt-4 text-base text-gray-600">
              For portfolios, talent collectives, and hyper-growth orgs deploying TrustCollab at scale.
            </p>
            <button className="mt-8 w-full rounded-lg bg-gray-900 py-3 font-semibold text-white">
              Talk with us
            </button>
            <hr className="my-8 border-gray-200" />
            <h4 className="text-lg font-semibold text-gray-900">Built for institutions:</h4>
            <ul className="mt-6 space-y-4">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;
