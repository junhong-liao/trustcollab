import React from 'react';

const logos = [
  { name: 'Vercel', responsiveClass: '' },
  { name: 'supabase', responsiveClass: '' },
  { name: 'Raycast', responsiveClass: '' },
  { name: 'Framer', responsiveClass: '' },
  { name: 'AngelList', responsiveClass: 'hidden sm:inline' },
  { name: 'storyblok', responsiveClass: 'hidden sm:inline' },
];

const CompanyLogos = () => {
  return (
    <div className="text-center px-4 sm:px-0">
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 font-medium">
        Trusted by fast-growing companies around the world
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 opacity-60">
        {logos.map((logo) => (
          <span
            key={logo.name}
            className={`text-sm sm:text-base md:text-lg font-bold text-gray-700 ${logo.responsiveClass}`}
          >
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;