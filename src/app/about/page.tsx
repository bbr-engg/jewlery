'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Emily Chen',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Michael Roberts',
      role: 'Production Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Jewelry workshop"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting beauty and elegance since 2020
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At Luxe Artisan, we believe that everyone deserves to feel beautiful and confident. 
              Our mission is to create stunning, affordable jewelry pieces that bring joy and 
              elegance to everyday life. Each piece is thoughtfully designed and crafted with 
              attention to detail, ensuring that you receive the highest quality artificial jewelry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality',
                description: 'We use the finest materials and craftsmanship in every piece we create.'
              },
              {
                title: 'Sustainability',
                description: 'Committed to eco-friendly practices and responsible sourcing.'
              },
              {
                title: 'Innovation',
                description: 'Constantly exploring new designs and techniques to bring you unique pieces.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center"
              >
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about our products or interested in collaborating? We&apos;d love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 