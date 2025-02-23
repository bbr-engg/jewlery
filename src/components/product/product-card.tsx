'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';
import { useWishlist } from '@/lib/context/wishlist-context';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isWishlisted } = useWishlist();

  const handleWishlistToggle = () => {
    if (isWishlisted(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, category, image });
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={isWishlisted(id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>

        {/* Category Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/60 text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold mb-2 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">${price}</p>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
} 