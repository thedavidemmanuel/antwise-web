export default function Footer() {
    return (
      <footer className="w-full bg-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Antwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }