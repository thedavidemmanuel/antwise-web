'use client';

import WhatIsAntwise from '@/components/what-is-antwise';
import Hero from '@/components/hero';
import {
  PiggyBank,
  LineChart,
  Trophy,
  Gamepad as GamepadIcon,
  BrainCircuit,
  Lock,
  Sparkles,
  CreditCard,
  Smartphone,
} from 'lucide-react';

// Home page component with TypeScript
export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen w-full bg-white relative px-4 sm:px-6 md:px-8">
      {/* Hero Section (Now a separate component) */}
      <Hero />

      {/* What Is Antwise Section - Using the new component */}
      <WhatIsAntwise />

      {/* Why Antwise Section */}
      <section className="w-full max-w-[1312px] mx-auto px-4 py-8 sm:py-16 flex flex-col items-center">
        <div className="text-center max-w-5xl mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lexend text-black mb-4 sm:mb-6">
            Why Antwise?
          </h2>
          <p className="text-base sm:text-lg text-black/90">
            Level up your money game with Antwise&apos;s smart features that actually get you! We&apos;ll help you crush those financial goals, one power move at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Save More Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <PiggyBank className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl text-black font-bold mb-4">Save More</h3>
            <p className="text-black/75">
              Save more without sacrificing fun. Because who said building wealth can&apos;t be enjoyable?
            </p>
          </div>

          {/* Spend Smarter Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl text-black font-bold mb-4">Spend Smarter</h3>
            <p className="text-black/75">
              Spend smarter with confidence. Make every shilling count while living your best life.
            </p>
          </div>

          {/* Build Habits Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl text-black font-bold mb-4">Build Habits</h3>
            <p className="text-black/75">
              Build financial habits that stick. Turn money goals into money wins, one smart choice at a time.
            </p>
          </div>
        </div>

        <p className="text-lg text-center mt-12 max-w-4xl text-black/90 font-medium">
          We&apos;re not just an app; we&apos;re a movement to empower the next generation of financially savvy Africans.
        </p>
      </section>

      {/* Why We Stand Out Section */}
      <section className="w-full max-w-[1312px] mx-auto px-4 py-8 sm:py-16 flex flex-col items-center bg-purple-50 rounded-2xl sm:rounded-3xl mb-8 sm:mb-16">
        <div className="text-center max-w-3xl mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lexend text-black mb-4 sm:mb-6">
            Why We Stand Out
          </h2>
          <p className="text-base sm:text-lg text-black/90">
            Sure, there are financial apps out there—but none like Antwise. Here&apos;s why we&apos;re different:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Gamified Financial Literacy Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <GamepadIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gamified Financial Literacy</h3>
            <p className="text-black/75">
              Unlike traditional fintech apps, we make learning about money management fun and engaging. Level up your financial knowledge through interactive challenges, just like Duolingo—but for your money!
            </p>
          </div>

          {/* AI-Powered Budgeting Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">AI-Powered Budgeting</h3>
            <p className="text-black/75">
              Let our smart algorithms analyze your spending habits and give you personalized tips to maximize your cash flow. Your personal financial advisor in your pocket.
            </p>
          </div>

          {/* Lock It to Rock It Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Lock It to Rock It</h3>
            <p className="text-black">
              Set savings goals and stay accountable with our lock feature. Add a trusted guardian to authorize withdrawals, ensuring you stay committed to your financial goals.
            </p>
          </div>

          {/* Smart Savings Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Savings</h3>
            <p className="text-black/75">
              Automate your savings journey with smart rules. Create group savings with friends, set automatic deposits, and watch your money grow effortlessly.
            </p>
          </div>

          {/* USD Virtual Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">USD Virtual Card</h3>
            <p className="text-black/75">
              Shop globally with confidence using our USD virtual card. Perfect for online purchases, subscriptions, and international transactions.
            </p>
          </div>

          {/* Mobile Money Integration */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Mobile Money Integration</h3>
            <p className="text-black/75">
              Seamlessly connect with your mobile money wallet for easy deposits and withdrawals. Transfer money instantly across all major mobile money providers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
