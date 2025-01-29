import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/antwise-logo.png"
              alt="Antwise Logo"
              width={150}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Join Waitlist Button */}
          <Link
            href="/waitlist"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}