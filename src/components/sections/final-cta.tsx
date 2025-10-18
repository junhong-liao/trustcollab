import { ArrowRight } from 'lucide-react';

const GridPattern = () => (
  <svg height="100%" width="100%">
    <defs>
      <pattern id="final-cta-grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="translate(9, -6)">
        <circle strokeWidth="0.3" fill="none" r="0.5" cy="0.5" cx="0.5" className="stroke-gray-300"></circle>
      </pattern>
    </defs>
    <rect fill="url(#final-cta-grid-pattern)" height="100%" width="100%"></rect>
  </svg>
);

const FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] relative">
        <div className="relative w-full max-w-[1240px] mx-auto rounded-3xl bg-white shadow-lg p-6 md:p-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
            <GridPattern />
          </div>

          <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              College admissions, made easy.
            </h2>
            <span
              className="group text-lg font-semibold text-accent-blue hover:text-accent-blue transition-colors duration-200 inline-flex items-center gap-2"
            >
              Try it yourself
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;