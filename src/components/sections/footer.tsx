import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { href: 'https://trustcollab.xyz', text: 'Sandbox Trials' },
    { href: 'https://trustcollab.xyz', text: 'AI Scorecards' },
    { href: 'https://trustcollab.xyz', text: 'Collaboration Replays' },
    { href: 'https://trustcollab.xyz', text: 'Role Templates' },
    { href: 'https://trustcollab.xyz', text: 'Security & Compliance' },
  ];

  const companyLinks = [
    { href: 'https://trustcollab.xyz', text: 'About TrustCollab' },
    { href: 'https://trustcollab.xyz', text: 'Careers' },
    { href: 'https://trustcollab.xyz', text: 'Press' },
  ];

  const connectLinks = [
    { href: 'https://trustcollab.xyz', text: 'LinkedIn' },
    { href: 'https://trustcollab.xyz', text: 'Founder Updates' },
    { href: 'https://trustcollab.xyz', text: 'Podcast' },
    { href: 'https://trustcollab.xyz', text: 'Live Demos' },
    { href: 'https://trustcollab.xyz', text: 'Community' },
  ];

  const legalLinks = [
    { href: 'https://trustcollab.xyz', text: 'Privacy Policy' },
    { href: 'https://trustcollab.xyz', text: 'Terms & Conditions' },
    { href: 'https://trustcollab.xyz', text: 'Support' },
  ];

  const socialIcons = [
    { href: 'https://trustcollab.xyz', icon: Linkedin },
    { href: 'https://trustcollab.xyz', icon: Youtube },
    { href: 'https://trustcollab.xyz', icon: Instagram },
  ];

  return (
    <section className="bg-background-primary pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-3xl p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-6 -right-12 w-48 h-16 bg-[var(--color-accent-blue)] transform rotate-45" style={{ transformOrigin: 'center' }}></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-foreground">TrustCollab.xyz</h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                  Bringing truth under pressure to every hiring decision with live sandbox validation.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">PRODUCT</h4>
                  <ul className="space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.text}>
                        <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">COMPANY</h4>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.text}>
                        <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">CONNECT</h4>
                  <ul className="space-y-3">
                    {connectLinks.map((link) => (
                      <li key={link.text}>
                        <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr className="mt-12 mb-8 border-t border-border" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-center sm:text-left sm:flex-row flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <p>&copy;2025 TrustCollab. All rights reserved.</p>
                <div className="flex gap-x-6">
                  {legalLinks.map((link) => (
                    <a key={link.text} href={link.href} className="hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {socialIcons.map((social, index) => (
                  <a key={index} href={social.href} className="text-gray-400 hover:text-foreground transition-colors" target="_blank" rel="noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
