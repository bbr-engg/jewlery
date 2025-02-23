'use client';

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/lib/context/cart-context";
import { WishlistProvider } from "@/lib/context/wishlist-context";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="jewelry-theme"
    >
      <CartProvider>
        <WishlistProvider>
          {!mounted ? (
            <div style={{ visibility: 'hidden' }}>{children}</div>
          ) : (
            children
          )}
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
} 