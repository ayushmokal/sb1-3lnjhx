import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-sm text-blue-500 font-semibold tracking-wide uppercase">
              Helping You Take the First Step Toward Parenthood
            </h2>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Test Smarter, Plan Faster
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              YO's at-home sperm test delivers accurate fertility results in minutes—no mail-ins, no lab visits. Start your journey to parenthood with insights designed for your peace of mind.
            </p>
            <div className="mt-8 space-x-4">
              <a href="/shop" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600">
                Start Your Journey
              </a>
              <a href="/learn-more" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image 
              src="/hero-image.jpg" 
              alt="YO Home Sperm Test Kit"
              fill
              priority
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow px-4 py-2">
              <span className="text-2xl font-bold text-blue-500">97%</span>
              <span className="text-sm text-gray-500">Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}