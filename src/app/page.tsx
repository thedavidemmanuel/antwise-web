import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/animated-text';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

const Button = ({ variant, href, children }: ButtonProps) => {
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

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white relative py-84">
      <section className="w-[1312px] h-[695px] mx-auto bg-black rounded-[30px] relative px-16 py-12">
        <div className="h-full">
          <div className="absolute left-12 top-32">
            <div className="relative w-72 h-14 rounded-full bg-gradient-to-r from-purple-100/50 via-gray-400/25 to-gray-500/50 flex items-center justify-center">
              <span className="text-xl font-normal text-white font-montserrat">
                Your Money&apos;s New BFF
              </span>
            </div>
          </div>

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

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="secondary" href="/learn-more">
                  Learn More
                </Button>
                <Button variant="primary" href="/waitlist">
                  Join Waitlist
                </Button>
              </div>
            </div>

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
    </main>
  );
}