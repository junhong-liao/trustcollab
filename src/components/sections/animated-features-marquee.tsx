import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// You can resize individual logos by editing `containerClassName` (height classes)
// and/or `imgClassName` (constraints on the <Image /> itself). Defaults are kept
// for items where overrides are not provided.
type LogoItem = {
  src: string;
  alt: string;
  /** Tailwind classes applied to the wrapper that controls visual height */
  containerClassName?: string;
  /** Tailwind classes applied to the <Image /> element */
  imgClassName?: string;
};

const logos: LogoItem[] = [
  { src: '/clients/miterro.jpeg', alt: 'Miterro' },
  { src: '/clients/tanbii.jpeg', alt: 'Tanbii' },
  { src: '/clients/wolfmeow.jpeg', alt: 'WolfMeow' },
  // Example overrides: tighten or enlarge a single logo without affecting others
  // containerClassName changes the displayed height; imgClassName can adjust min/max width
  { src: '/clients/accredit.png', alt: 'Accredit', containerClassName: 'h-14 sm:h-16 md:h-20 lg:h-24' },
  { src: '/clients/caroline-logo-2.png', alt: 'Caroline', containerClassName: 'h-14 sm:h-16 md:h-20 lg:h-24' },
  { src: '/clients/collegenavigator.png', alt: 'College Navigator', containerClassName: 'h-12 sm:h-16 md:h-20 lg:h-24', imgClassName: 'min-w-[120px]' },
];

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-nowrap w-full">
      <div className="flex items-center gap-8 animate-logo-marquee w-max shrink-0 sm:gap-24">
        {children}
      </div>
      <div className="flex items-center gap-8 animate-logo-marquee w-max shrink-0 sm:gap-24" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

const AnimatedFeaturesMarquee = () => {
  return (
    <section className="relative py-8 min-h-[96px]">
      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-logo-marquee {
          animation: logo-marquee 30s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      <div className="overflow-hidden w-full">
        <Marquee>
          {logos.map((logo, idx) => (
            <div key={logo.alt} className="px-3 shrink-0 sm:px-8">
              <div
                className={cn(
                  // Default heights if no per-logo override provided
                  'h-16 sm:h-20 md:h-24 lg:h-28 animate-float',
                  logo.containerClassName
                )}
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={96}
                  className={cn('h-full w-auto object-contain min-w-[100px] sm:min-w-[140px]', logo.imgClassName)}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AnimatedFeaturesMarquee;
