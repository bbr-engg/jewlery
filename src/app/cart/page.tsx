'use client';

import { useCart } from '@/lib/context/cart-context';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Your Cart is Empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <a
              href="/shop"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Continue Shopping
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
          <h1 className="text-3xl font-bold mb-8 dark:text-white">Shopping Cart</h1>

          {/* Cart Items */}
          <div className="space-y-6 mb-8">
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
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg" />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="w-24 text-right dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between dark:text-gray-300">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between dark:text-gray-300">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-4 border-t dark:border-gray-800 dark:text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 