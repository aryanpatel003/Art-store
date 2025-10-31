import type { Metadata } from "next";
import "./globals.css";
import { ConditionalHeader } from "@/components/conditional-header";
import { ConditionalFooter } from "@/components/conditional-footer";
import { ConditionalMobileNav } from "@/components/conditional-mobile-nav";
import { MainLayout } from "@/components/main-layout";
import { CartProvider } from "@/components/cart-provider";
import { WishlistProvider } from "@/components/wishlist-provider";
import { Toaster } from "@/components/ui/toaster";
import { NavigationEvents } from "@/components/navigation-events";

export const metadata: Metadata = {
  title: "Canvas & Palette - Premium Art Supplies",
  description: "High-quality art supplies for every creator. Shop paints, brushes, canvas and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <CartProvider>
          <WishlistProvider>
            <div className="flex flex-col min-h-screen">
              <ConditionalHeader />
              <MainLayout>{children}</MainLayout>
              <ConditionalFooter />
              <ConditionalMobileNav />
            </div>
            <Toaster />
            <NavigationEvents />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
