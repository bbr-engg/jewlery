import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luxe Artisan - Artificial Jewelry Boutique",
  description: "Discover our exquisite collection of handcrafted artificial jewelry pieces.",
  keywords: [
    'artificial jewelry',
    'fashion jewelry',
    'necklaces',
    'earrings',
    'bracelets',
    'rings',
    'handcrafted jewelry',
    'affordable luxury',
  ],
  authors: [{ name: 'Luxe Artisan Team' }],
  creator: 'Luxe Artisan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Luxe Artisan - Artificial Jewelry Boutique',
    description: 'Discover our exquisite collection of handcrafted artificial jewelry pieces.',
    siteName: 'Luxe Artisan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Artisan - Artificial Jewelry Boutique',
    description: 'Discover our exquisite collection of handcrafted artificial jewelry pieces.',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 