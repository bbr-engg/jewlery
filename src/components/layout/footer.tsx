import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { NewsletterForm } from './newsletter-form';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Luxe Artisan</h2>
            <p className="text-sm">
              Crafting timeless beauty through exquisite artificial jewelry pieces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Shop', 'About', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>support@luxeartisan.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Jewelry Lane</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Luxe Artisan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 