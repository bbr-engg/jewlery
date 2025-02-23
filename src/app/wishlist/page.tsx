'use client';

import { useWishlist } from '@/lib/context/wishlist-context';
import { useCart } from '@/lib/context/cart-context';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { addItem: addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Your Wishlist is Empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Add items to your wishlist to keep track of products you love.
            </p>
            <a
              href="/shop"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 dark:text-white">My Wishlist</h1>

          <div className="grid gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex items-center gap-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">${item.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{item.category}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      addToCart({ id: item.id, name: item.name, price: item.price });
                      removeItem(item.id);
                    }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingBag size={20} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    title="Remove from Wishlist"
                  >
                    <Heart size={20} className="fill-current" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex justify-between items-center">
            <a
              href="/shop"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Continue Shopping
            </a>
            <button
              onClick={() => {
                items.forEach((item) => {
                  addToCart({ id: item.id, name: item.name, price: item.price });
                });
              }}
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Add All to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 