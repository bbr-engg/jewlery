'use client';

// Add route segment config
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Truck, Shield, Clock, Mail, Sparkles, Camera, Gift } from 'lucide-react';
import { useState } from 'react';
import { VirtualTryOn } from '@/components/features/virtual-try-on';
import { JewelryViewer3D } from '@/components/features/jewelry-viewer-3d';
import { StyleQuiz } from '@/components/features/style-quiz';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showTryOn, setShowTryOn] = useState(false);
  const [showStyleQuiz, setShowStyleQuiz] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleStyleQuizComplete = (preferences: Record<string, string | string[]>) => {
    console.log('Style preferences:', preferences);
    // Here you would implement the recommendation logic
  };

  // Update the Virtual Try-On section to use the modal
  const tryOnSection = (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Virtual Try-On Experience</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Experience our jewelry virtually before you buy. Use your camera to see how our pieces look on you in real-time.
              </p>
              <button
                onClick={() => setShowTryOn(true)}
                className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:opacity-90 transition-all"
              >
                <Camera className="w-5 h-5" />
                Try On Now
              </button>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1576011842777-3c11ae9616be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Virtual Try-On Demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-black/90 p-4 rounded-lg backdrop-blur-sm">
                  <Camera className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

  // Update the 3D Jewelry Showcase section to use the new component
  const showcaseSection = (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Interactive 3D View</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our jewelry in stunning 3D detail. Rotate, zoom, and examine every angle before making your purchase.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JewelryViewer3D initialRotation={[0, Math.PI / 4, 0]} />
          <JewelryViewer3D initialRotation={[0, -Math.PI / 4, 0]} />
          <JewelryViewer3D initialRotation={[0, 0, 0]} />
        </div>
      </div>
    </section>
  );

  const newArrivals = [
    {
      name: 'Crystal Dreams Necklace',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Necklaces'
    },
    {
      name: 'Pearl Drop Earrings',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Earrings'
    },
    {
      name: 'Golden Twist Bracelet',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Bracelets'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury jewelry collection"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Discover Timeless Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Exquisite artificial jewelry for every occasion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/shop"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
              { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
              { icon: Clock, title: 'Fast Delivery', description: '3-5 business days' },
              { icon: Star, title: 'Quality Guarantee', description: '30-day return policy' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <feature.icon className="w-10 h-10 mb-4 text-gray-800 dark:text-gray-200" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: 'Necklaces',
              image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Earrings',
              image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Bracelets',
              image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Rings',
              image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            },
          ].map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <Link href={`