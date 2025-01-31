'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/animated-text';
import { FC, ReactNode } from 'react';
import { PiggyBank, LineChart, Trophy, Gamepad as GamepadIcon, BrainCircuit, Lock, Sparkles, CreditCard, Smartphone } from 'lucide-react';

// Define types
interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: ReactNode;
}

// Button component with TypeScript
const Button: FC<ButtonProps> = ({ variant, href, children }) => {
  const baseStyles = "px-8 py-4 font-semibold rounded-xl transition-colors";
  const variantStyles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-white text-black hover:bg-gray-100"
  };
  
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
};

// Home page component with TypeScript
export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen w-full bg-white relative">
      {/* Hero Section */}
      <section className="w-full max-w-[1312px] h-[695px] mx-auto bg-black rounded-[30px] relative px-16 py-12 mb-24">
        <div className="h-full">
          {/* Tagline section */}
          <div className="absolute left-12 top-32">
            <div className="relative w-72 h-14 rounded-full bg-gradient-to-r from-purple-100/50 via-gray-400/25 to-gray-500/50 flex items-center justify-center">
              <span className="text-xl font-normal text-white font-montserrat">
                Your Money&apos;s New BFF
              </span>
            </div>
          </div>
          
          {/* Main content section */}
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-5xl font-bold text-white">
                The financial sidekick for&nbsp;
                <AnimatedText />&nbsp;
                like you
              </h1>
              
              <p className="text-lg text-white/90 max-w-xl">
                Finally, a money app that gets you - made to fit your lifestyle, whether you&apos;re chasing dreams,
                crushing goals, or just figuring it out.
              </p>

              {/* Buttons section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="secondary" href="/learn-more">
                  Learn More
                </Button>
                <Button variant="primary" href="/waitlist">
                  Join Waitlist
                </Button>
              </div>
            </div>
            
            {/* Image section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative w-[500px] h-[400px]">
                <Image
                  src="/dazzle-man-holding-coin-and-piggy-bank-1.gif"
                  alt="Animated illustration of a person with piggy bank"
                  width={500}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Antwise Section */}
      <section className="w-full max-w-[1312px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold font-lexend text-black">
            What Is Antwise?
          </h2>
          <p className="text-lg text-black/90 max-w-xl">
            Antwise is more than just a money app—it&apos;s a lifestyle companion. We&apos;re here to empower students and young professionals across Africa to take charge of their finances with tools that are intuitive, fun, and tailored to your needs.
          </p>
          <p className="text-lg text-black/90 max-w-xl">
            Whether you&apos;re chasing big dreams, stacking up savings, or figuring out how to adult, Antwise has your back every step of the way.
          </p>
        </div>
        
        {/* Replacing LottieSection with direct Image component */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[500px] h-[400px]">
            <Image
              src="/florid-woman-working-remotely-on-laptop.gif"
              alt="Woman working remotely on laptop"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Antwise Section */}
      <section className="w-full max-w-[1312px] mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-5xl font-bold font-lexend text-black mb-6">
            Why Antwise?
          </h2>
          <p className="text-lg text-black/90">
            Let&apos;s be real - winning at your finances should be exciting, not exhausting! We&apos;ve packed Antwise with smart features that make money management feel less like a chore and more like leveling up in your favorite game. Ready to be the main character in your financial story? 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Save More Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <PiggyBank className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Save More</h3>
            <p className="text-black/75">
              Save more without sacrificing fun. Because who said building wealth can&apos;t be enjoyable?
            </p>
          </div>

          {/* Spend Smarter Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Spend Smarter</h3>
            <p className="text-black/75">
              Spend smarter with confidence. Make every shilling count while living your best life.
            </p>
          </div>

          {/* Build Habits Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Build Habits</h3>
            <p className="text-black/75">
              Build financial habits that stick. Turn money goals into money wins, one smart choice at a time.
            </p>
          </div>
        </div>

        <p className="text-lg text-center mt-12 max-w-2xl text-black/90 font-medium">
          We&apos;re not just an app; we&apos;re a movement to empower the next generation of financially savvy Africans.
        </p>
      </section>

      {/* Why We Stand Out Section */}
      <section className="w-full max-w-[1312px] mx-auto px-4 py-16 flex flex-col items-center bg-purple-50 rounded-3xl">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-5xl font-bold font-lexend text-black mb-6">
            Why We Stand Out
          </h2>
          <p className="text-lg text-black/90">
            Sure, there are financial apps out there—but none like Antwise. Here&apos;s why we&apos;re different:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Gamified Financial Literacy Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <GamepadIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gamified Financial Literacy</h3>
            <p className="text-black/75">
              Unlike traditional fintech apps, we make learning about money management fun and engaging. Level up your financial knowledge through interactive challenges, just like Duolingo—but for your money!
            </p>
          </div>

          {/* AI-Powered Budgeting Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">AI-Powered Budgeting</h3>
            <p className="text-black/75">
              Let our smart algorithms analyze your spending habits and give you personalized tips to maximize your cash flow. Your personal financial advisor in your pocket.
            </p>
          </div>

          {/* Lock It to Rock It Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Lock It to Rock It</h3>
            <p className="text-black/75">
              Set savings goals and stay accountable with our lock feature. Add a trusted guardian to authorize withdrawals, ensuring you stay committed to your financial goals.
            </p>
          </div>

          {/* Smart Savings Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Savings</h3>
            <p className="text-black/75">
              Automate your savings journey with smart rules. Create group savings with friends, set automatic deposits, and watch your money grow effortlessly.
            </p>
          </div>

          {/* USD Card Feature */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">USD Virtual Card</h3>
            <p className="text-black/75">
              Shop globally with confidence using our USD virtual card. Perfect for online purchases, subscriptions, and international transactions.
            </p>
          </div>

          {/* Mobile Money Integration */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
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