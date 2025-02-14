'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/animated-text';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, href, children }) => {
  const baseStyles =
    'w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl transition-colors text-center';
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-white text-black hover:bg-gray-100',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
};

const Hero: FC = () => {
  return (
    <section className="w-full max-w-[1312px] min-h-[600px] sm:h-[695px] mx-auto bg-black rounded-[20px] sm:rounded-[30px] relative px-6 sm:px-16 py-8 sm:py-12 mt-4 sm:mt-12 mb-12 sm:mb-24">
      <div className="h-full">
        {/* Tagline section */}
        <div className="relative sm:absolute sm:left-12 sm:top-32 mb-8 sm:mb-0">
          <div className="inline-flex rounded-full bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 sm:py-3">
            <span className="text-sm sm:text-lg font-normal text-white font-montserrat whitespace-nowrap">
              Your Money&apos;s New BFF
            </span>
          </div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full gap-8 sm:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The financial sidekick for&nbsp;
              <AnimatedText />&nbsp;
              like you
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-xl">
              Finally, a money app that gets you – made to fit your lifestyle,
              whether you&apos;re chasing dreams, crushing goals, or just figuring it out.
            </p>

            {/* Buttons section */}
            <div className="flex flex-row gap-4 pt-4 sm:pt-6">
              <Button variant="secondary" href="/learn-more">
                Learn More
              </Button>
              <Button variant="primary" href="/waitlist">
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Image section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[600px] aspect-square sm:aspect-video">
              <Image
                src="https://res.cloudinary.com/dskel1t60/image/upload/v1739495535/dazzle-man-holding-coin-and-piggy-bank-1_1_w5tsew.gif"
                alt="Animated illustration of a person with piggy bank"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
