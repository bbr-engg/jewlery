'use client';

import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/product/product-card';

const categories = ['All', 'Necklaces', 'Earrings', 'Bracelets', 'Rings'];
const priceRanges = ['All', 'Under $25', '$25 - $50', '$50 - $100', 'Over $100'];

// Dummy products data with more realistic jewelry items
const products = [
  {
    id: 1,
    name: 'Crystal Dreams Necklace',
    price: 49.99,
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Pearl Drop Earrings',
    price: 29.99,
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1635767798638-3c6e43b72663?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Golden Twist Bracelet',
    price: 39.99,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Sapphire Elegance Ring',
    price: 34.99,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Vintage Pearl Necklace',
    price: 59.99,
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Crystal Hoop Earrings',
    price: 24.99,
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'Rose Gold Chain Bracelet',
    price: 44.99,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'Diamond Accent Ring',
    price: 79.99,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  // Add more products as needed
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = selectedPrice === 'All' || 
      (selectedPrice === 'Under $25' && product.price < 25) ||
      (selectedPrice === '$25 - $50' && product.price >= 25 && product.price <= 50) ||
      (selectedPrice === '$50 - $100' && product.price > 50 && product.price <= 100) ||
      (selectedPrice === 'Over $100' && product.price > 100);
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
            Our Collection
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handcrafted pieces, each designed to add a touch of elegance to your style.
          </p>
        </div>
      </div>

      {/* Mobile Filters Button */}
      <div className="md:hidden sticky top-16 z-20 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <Filter size={20} />
            Filters
          </span>
          <ChevronDown
            size={20}
            className={`transform transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside
            className={`md:w-64 space-y-6 ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}
          >
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedPrice(range)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedPrice === range
                        ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 