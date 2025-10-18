import Image from 'next/image';
import type { FC } from 'react';

const GoogleIcon: FC = () => (
  <img src="/Google.svg" alt="Google icon" className="h-5 w-5" />
);

const avatars = [
  {
    alt: 'Avatar 1',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-030654-avatar1.jpg',
    href: 'https://collegenavigator.ai',
  },
  {
    alt: 'Avatar 2',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-663686-avatar2.jpg',
    href: 'https://collegenavigator.ai',
  },
  {
    alt: 'Avatar 3',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-600958-avatar3.jpg',
    href: 'https://collegenavigator.ai',
  },
  {
    alt: 'Avatar 4',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e236c7bc-b1b7-47c4-ae55-3e607c7fb584-dreamyuni-ai/assets/images/next-105204-avatar4.jpg',
    href: 'https://collegenavigator.ai',
  },
  {
    alt: 'Avatar 5',
    src: 'https://avatars.githubusercontent.com/u/6764957?v=4',
    href: 'https://collegenavigator.ai',
  },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden pb-8 pt-24 sm:min-h-[85vh] sm:pt-20">
      <div className="container relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="w-full">
            <div className="mb-6 flex flex-col items-center sm:mb-8">
              <p className="m-duolingo-offset shadow-duolingo-border-primary mx-auto inline-flex max-w-md items-center justify-center rounded-full border-2 border-gray-300 bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-800 backdrop-blur-sm shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="text-gray-800">CollegeNavigator Fall 2025 Launch 🎉</span>
              </p>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-[1.1] text-black sm:mb-8 sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-7xl xl:text-8xl">
              <div className="block">Get Into Your</div>
              <div className="block">
                <span className="relative inline-block">
                  <span className="relative z-10">Dream</span>
                  <div className="absolute -bottom-0.5 left-0 right-0 h-2 rounded-full bg-blue-500 opacity-80 sm:-bottom-1 sm:h-3" />
                </span>
              </div>
              <div className="block">
                <span className="relative inline-block">
                  <span className="relative z-10">School</span>
                  <div className="absolute -bottom-0.5 left-0 right-0 h-2 rounded-full bg-blue-500 opacity-80 sm:-bottom-1 sm:h-3" />
                </span>
              </div>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl px-4 font-medium leading-relaxed text-gray-600 sm:mb-12 sm:px-0 sm:text-lg md:text-xl lg:text-2xl">
              From SATs to supplements, we're here to help you get into your dream school, step by step.
            </p>
            <div className="mb-16 flex flex-col items-center gap-4">
              <div>
                <button className="touch-manipulation flex min-h-[48px] w-full max-w-xs items-center justify-center gap-3 rounded-xl bg-gray-800 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-900 hover:shadow-xl disabled:opacity-50 sm:w-auto sm:max-w-none sm:px-8 sm:py-3.5">
                  <div>
                    <GoogleIcon />
                  </div>
                  <span>Sign up with Google</span>
                </button>
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
                  <span className="font-bold text-gray-900">Join 3,348+ students</span> planning their future
                </p>
              </div>
            </div>
            <div className="px-4 text-center sm:px-0">
              <p className="mb-4 text-xs font-medium text-gray-500 sm:mb-6 sm:text-sm">
                Where our students are going this fall:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60 sm:gap-x-8 md:gap-x-12 sm:gap-y-4">
                <span className="text-sm font-bold text-gray-700 sm:text-base md:text-lg">Harvard</span>
                <span className="text-sm font-bold text-gray-700 sm:text-base md:text-lg">Princeton</span>
                <span className="text-sm font-bold text-gray-700 sm:text-base md:text-lg">NYU</span>
                <span className="text-sm font-bold text-gray-700 sm:text-base md:text-lg">Columbia</span>
                <span className="hidden text-sm font-bold text-gray-700 sm:inline sm:text-base md:text-lg">Stanford</span>
                <span className="hidden text-sm font-bold text-gray-700 sm:inline sm:text-base md:text-lg">Yale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;