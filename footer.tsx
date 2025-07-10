
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-headline font-semibold text-primary">Canvas & Palette</h3>
            <p className="mt-2 text-sm text-muted-foreground">High-quality art supplies for every creator.</p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            </div>
          </div>
          <div className='col-span-1'>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/collections" className="text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="/collections?category=Paints" className="text-muted-foreground hover:text-primary">Paints</Link></li>
              <li><Link href="/collections?category=Paper%20&%20Canvas" className="text-muted-foreground hover:text-primary">Canvas</Link></li>
              <li><Link href="/collections?category=Brushes" className="text-muted-foreground hover:text-primary">Brushes</Link></li>
            </ul>
          </div>
          <div className='col-span-1'>
            <h4 className="font-semibold">About</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">Our Story</Link></li>
              <li><Link href="/profile/support" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
             <h4 className="font-semibold">Newsletter</h4>
             <p className="mt-2 text-sm text-muted-foreground">Subscribe for updates and special offers.</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-background" />
                <Button type="submit">Subscribe</Button>
             </form>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Canvas & Palette. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
