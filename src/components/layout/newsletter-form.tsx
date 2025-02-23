'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-600"
        required
      />
      <button
        type="submit"
        className="p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Mail size={20} />
      </button>
    </form>
  );
} 