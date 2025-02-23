'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

// Gallery data with real images
const galleryItems = [
  {
    id: 1,
    title: 'Elegant Crystal Necklace',
    category: 'Summer Collection',
    description: 'Stunning crystal necklace featuring premium elements and detailed craftsmanship.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Pearl Drop Earrings',
    category: 'Wedding Collection',
    description: 'Classic pearl drop earrings perfect for special occasions.',
    image: 'https://images.unsplash.com/photo-1635767798638-3c6e43b72663?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Gold Chain Bracelet',
    category: 'Summer Collection',
    description: 'Delicate gold-plated chain bracelet with adjustable length.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Diamond Accent Ring',
    category: 'Special Edition',
    description: 'Elegant ring featuring crystal accents and rose gold plating.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Vintage Pearl Necklace',
    category: 'Wedding Collection',
    description: 'Classic pearl necklace with vintage-inspired design.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Crystal Hoop Earrings',
    category: 'Summer Collection',
    description: 'Modern hoop earrings with crystal embellishments.',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Rose Gold Bracelet Set',
    category: 'Special Edition',
    description: 'Set of three stackable rose gold bracelets.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Sapphire Statement Ring',
    category: 'Wedding Collection',
    description: 'Bold statement ring with sapphire-colored crystal.',
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Layered Necklace Set',
    category: 'Summer Collection',
    description: 'Set of three layered necklaces with mixed metal finish.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Summer Collection', 'Wedding Collection', 'Special Edition'];
  
  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Gallery hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our stunning collections and find inspiration for your next piece.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div
              className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedImage.description}
                </p>
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 