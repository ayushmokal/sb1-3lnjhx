import Link from 'next/link';
import Image from 'next/image';
import { IconSearch, IconAccount, IconCart } from './icons';

export default function Header() {
  return (
    <div className="relative bg-white">
      <div className="border-b border-gray-200">
        <div className="bg-blue-500 text-white text-center py-2">
          <p>Download our latest version of the YO Home Sperm Test
            <a href="#" className="inline-block bg-white text-blue-500 px-4 py-1 rounded-full ml-2">
              Download YO App
            </a>
          </p>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="YO Logo" 
                  width={32} 
                  height={32}
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shop" className="text-gray-500 hover:text-gray-900">Shop</Link>
              <Link href="/how-it-works" className="text-gray-500 hover:text-gray-900">How Yo Works</Link>
              <Link href="/support" className="text-gray-500 hover:text-gray-900">Support</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">About Us</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/search" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <IconSearch />
              </Link>
              <Link href="/account" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Account</span>
                <IconAccount />
              </Link>
              <Link href="/cart" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Cart</span>
                <IconCart />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}