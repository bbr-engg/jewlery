'use client';

import { useState } from 'react';
import { Heart, Minus, Plus, Share2, Star } from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';
import { ProductCard } from '@/components/product/product-card';

// This would come from your data source in a real app
const product = {
  id: 1,
  name: 'Crystal Dreams Necklace',
  price: 49.99,
  category: 'Necklaces',
  description: 'A stunning handcrafted necklace featuring premium crystal elements. Perfect for both casual and formal occasions, this piece adds elegance to any outfit.',
  features: [
    'Premium quality crystals',
    'Adjustable chain length',
    'Tarnish-resistant plating',
    'Nickel-free',
  ],
  images: Array(4).fill('/images/products/necklace1.jpg'),
  specifications: {
    material: 'Alloy with crystal elements',
    plating: 'Rose gold',
    length: '18 inches (adjustable)',
    closure: 'Lobster clasp',
    weight: '25 grams',
  },
  rating: 4.8,
  reviews: 124,
};

// Related products (would come from your data source)
const relatedProducts = [
  {
    id: 2,
    name: 'Pearl Drop Earrings',
    price: 29.99,
    category: 'Earrings',
    image: '/images/products/earrings1.jpg'
  },
  {
    id: 3,
    name: 'Golden Twist Bracelet',
    price: 39.99,
    category: 'Bracelets',
    image: '/images/products/bracelet1.jpg'
  },
  {
    id: 4,
    name: 'Sapphire Elegance Ring',
    price: 34.99,
    category: 'Rings',
    image: '/images/products/ring1.jpg'
  },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-black dark:ring-white' : ''
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 dark:text-white">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{product.category}</span>
              </div>
            </div>

            <p className="text-2xl font-bold dark:text-white">${product.price}</p>

            <p className="text-gray-600 dark:text-gray-400">{product.description}</p>

            <div className="space-y-4">
              <h3 className="font-semibold dark:text-white">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold dark:text-white">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</dt>
                    <dd className="text-gray-900 dark:text-gray-200">{value}</dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4 border-t dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex items-center border dark:border-gray-800 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-lg transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center dark:text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-lg transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 border dark:border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
                  />
                </button>

                <button className="p-2 border dark:border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8 dark:text-white">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 