import React from 'react';
import {
  Award,
  BookOpenText,
  ClipboardList,
  DollarSign,
  FileCheck2,
  Search,
  Target,
  ThumbsUp,
  Users,
} from 'lucide-react';

const allFeatures = [
  { title: ["Scholarships"], icon: <DollarSign className="w-8 h-8" /> },
  { title: ["Extracurriculars"], icon: <ThumbsUp className="w-8 h-8" /> },
  { title: ["Application", "Tracker"], icon: <ClipboardList className="w-8 h-8" /> },
  { title: ["Essay", "Review"], icon: <FileCheck2 className="w-8 h-8" /> },
  { title: ["Campus", "Engagement"], icon: <Users className="w-8 h-8" /> },
  { title: ["College", "Recommendations"], icon: <Search className="w-8 h-8" /> },
];

const row1Features = allFeatures.filter(Boolean);

// Single row marquee; second row removed

interface FeatureCardProps {
  title: string | string[];
  icon: React.ReactNode;
}

const FeatureCard = ({ title, icon }: FeatureCardProps) => {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl p-6 flex-shrink-0 w-auto mx-1 sm:mx-2 bg-gray-900`}
      style={{
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
      }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl flex-shrink-0 bg-gray-700`}
      >
        <div className={'text-white'}>{icon}</div>
      </div>
      <div className="flex-1">
        {titleLines.map((line, i) => (
          <h3
            key={i}
            className={`text-2xl font-bold leading-tight ${
              'text-white'
            }`}
          >
            {line}
          </h3>
        ))}
      </div>
    </div>
  );
};

const Marquee = ({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) => {
  const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  return (
    <div className="flex flex-nowrap">
      <div className={`flex flex-shrink-0 items-stretch gap-1 sm:gap-2 ${animationClass}`}>
        {children}
      </div>
      <div className={`flex flex-shrink-0 items-stretch gap-1 sm:gap-2 ${animationClass}`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

const AnimatedFeaturesMarquee = () => {
    return (
        <section className="relative py-8">
          <style>
              {`
              @keyframes marquee {
                  from { transform: translateX(0); }
                  to { transform: translateX(-100%); }
              }
              @keyframes marquee-reverse {
                  from { transform: translateX(-100%); }
                  to { transform: translateX(0); }
              }
              .animate-marquee {
                  animation: marquee 40s linear infinite;
              }
              .animate-marquee-reverse {
                  animation: marquee-reverse 40s linear infinite;
              }
              `}
          </style>
          <div className="flex flex-col gap-4 overflow-hidden">
            <Marquee>
              {row1Features.filter(Boolean).map((feature, index) => (
                <FeatureCard
                  key={`row1-${index}`}
                  title={feature.title}
                  icon={feature.icon}
                />
              ))}
            </Marquee>
          </div>
        </section>
    );
};

export default AnimatedFeaturesMarquee;