import React from 'react';
import Image from 'next/image';
import styles from './what-is-antwise.module.css';

const WhatIsAntwise = () => {
  return (
    <section className="w-full max-w-[1312px] mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            What Is Antwise?
          </h2>
          <p className="text-lg text-black/90 text-justify max-w-lg mx-auto lg:mx-0">
            Antwise is more than just a money app—it&apos;s a lifestyle companion. We&apos;re here to empower students and young professionals across Africa to take charge of their finances with tools that are intuitive, fun, and tailored to your needs.
          </p>
          <p className="text-lg text-black/90 text-justify max-w-lg mx-auto lg:mx-0">
            Whether you&apos;re chasing big dreams, stacking up savings, or figuring out how to adult, Antwise has your back every step of the way.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          <div className={styles.container}>
            {/* Home Screen */}
            <div className={styles.homeScreen}>
              <Image
                src="/home-screen.png"
                alt="Antwise home screen"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Onboarding Screen */}
            <div className={styles.onboardingScreen}>
              <Image
                src="/onboarding-screen.png"
                alt="Antwise onboarding screen"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Splash Screen */}
            <div className={styles.splashScreen}>
              <Image
                src="/splash-screen.png"
                alt="Antwise splash screen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAntwise;
