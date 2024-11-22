import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'YO Home Sperm Test - Pack of 2',
    price: '$79.95',
    image: '/product-2pack.jpg'
  },
  {
    id: 2,
    name: 'YO Home Sperm Test - Pack of 4',
    price: '$0.00',
    image: '/product-4pack.jpg'
  },
  {
    id: 3,
    name: 'YO Home Sperm Test - Pack of 6',
    price: '$118.95',
    image: '/product-6pack.jpg'
  }
];

export default function ProductGrid() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Explore the Full YO Product Line
          </h2>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-center object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#">{product.name}</a>
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}