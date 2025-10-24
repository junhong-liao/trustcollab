"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { getAppEntryUrl } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Founders" },
  { href: "#why-now", label: "Enterprise" },
  { href: "#pricing", label: "Pricing" },
];

const LOGO_URL = "/TCOLLAB.svg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const headerClasses = `
    fixed inset-x-0 top-0 z-40 w-full transition-all duration-300 pt-[env(safe-area-inset-top)]
    ${isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}
  `;
  
  return (
    <header className={headerClasses}>
      {/* Desktop Navigation */}
      <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex">
        <div className="relative z-20 flex items-center gap-2 px-2 py-1 text-xl font-medium">
          <Image
            alt="TrustCollab logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            src={LOGO_URL}
          />
          <span className="text-xl font-semibold text-black transition-colors duration-200">
            TrustCollab
          </span>
        </div>
        <nav className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-black hover:text-gray-800"
            >
              <span className="relative z-20">{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={getAppEntryUrl()}
            className="px-4 py-2 rounded-md button text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-black text-white shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="relative z-20 flex items-center gap-2 px-2 py-1 text-xl font-medium">
            <Image
              alt="TrustCollab logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              src={LOGO_URL}
            />
            <span className="text-xl font-semibold text-black transition-colors duration-200">
              TrustCollab
            </span>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 -mr-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 cursor-pointer text-black transition-colors duration-200" />
            ) : (
              <Menu className="h-6 w-6 cursor-pointer text-black transition-colors duration-200" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-2 w-full rounded-lg bg-background shadow-lg p-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-4 py-2 text-base font-medium text-text-primary hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <hr className="my-4 border-t border-border-light" />
            <a
              href={getAppEntryUrl()}
              className="w-full px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer transition duration-200 inline-block text-center bg-black text-white"
            >
              Try It Free Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
