import Image from 'next/image';
import type { FC } from 'react';
import { getAppEntryUrl } from '@/lib/utils';

const GoogleIcon: FC = () => (
  <span role="img" aria-label="fire" className="text-lg leading-none">
    🔥
  </span>
);

const avatars = [
  {
    alt: 'Avatar 1',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-030654-avatar1.jpg',
    href: 'https://trustcollab.xyz',
  },
  {
    alt: 'Avatar 2',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-663686-avatar2.jpg',
    href: 'https://trustcollab.xyz',
  },
  {
    alt: 'Avatar 3',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-600958-avatar3.jpg',
    href: 'https://trustcollab.xyz',
  },
  {
    alt: 'Avatar 4',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-105204-avatar4.jpg',
    href: 'https://trustcollab.xyz',
  },
  {
    alt: 'Avatar 5',
    src: 'https://avatars.githubusercontent.com/u/6764957?v=4',
    href: 'https://trustcollab.xyz',
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-visible pb-10 pt-20 sm:min-h-[85vh] sm:overflow-hidden sm:pb-8 sm:pt-24"
    >
      <div className="container relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="w-full">
            <div className="mb-6 flex flex-col items-center sm:mb-8">
              <p className="m-duolingo-offset shadow-duolingo-border-primary mx-auto inline-flex max-w-md items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur-sm shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="text-gray-800">TrustCollab Beta Launch 🎉</span>
              </p>
            </div>
            <h1 className="mb-5 text-balance text-[clamp(1.15rem,5.8vw,1.65rem)] font-bold leading-tight tracking-tight text-black sm:mb-8 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-5xl xl:text-6xl">
              <div className="block">Interviews Can Lie.</div>
              <div className="block">
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">Real Performance Doesn't.</span>
                </span>
              </div>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl px-2 text-base font-medium leading-relaxed text-gray-600 sm:mb-12 sm:px-0 sm:text-lg md:text-xl lg:text-2xl">
              Stop guessing who can actually do the job. 
              <br/>
              Try our live sandbox where candidates prove themselves in real world tasks, before you commit.
            </p>
            <div className="mb-12 flex flex-col items-center gap-3 sm:mb-16 sm:gap-4">
              <div>
                <a
                  href={getAppEntryUrl()}
                  className="touch-manipulation flex min-h-[48px] w-full max-w-xs items-center justify-center gap-3 rounded-xl bg-gray-800 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-900 hover:shadow-xl disabled:opacity-50 sm:w-auto sm:max-w-none sm:px-8 sm:py-3.5 sm:text-base"
                >
                  <span>Try It Free Now</span>
                </a>
              </div>
              <div className="flex w-full flex-col items-center gap-2">
                <div className="scale-90 sm:scale-100">
                  <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
                    {avatars.map((avatar) => (
                      <span key={avatar.alt}>
                        <Image
                          alt={avatar.alt}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                          src={avatar.src}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-600 sm:text-sm">
                  <span className="font-bold text-gray-900">⏳ Limited early-access invites</span>
                </p>
              </div>
            </div>
            <div className="px-4 text-center sm:px-0">
              <p className="mb-3 text-xs font-medium text-gray-500 sm:mb-6 sm:text-sm">
                Teams validating candidates right now:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
