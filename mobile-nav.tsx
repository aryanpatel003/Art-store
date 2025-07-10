
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/collections', icon: LayoutGrid, label: 'Products' },
  { href: '/wishlist', icon: Heart, label: 'Favorites' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function MobileNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center", className)}>
        <nav className="bg-primary text-primary-foreground rounded-full shadow-lg px-2">
            <div className="flex justify-around items-center h-14 space-x-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center justify-center transition-all duration-300 rounded-full h-10",
                                isActive ? 'bg-primary-foreground text-primary px-4' : 'w-10'
                            )}
                        >
                            <div className="flex items-center gap-2">
                                <item.icon className="h-5 w-5" />
                                {isActive && <span className="text-sm font-medium">{item.label}</span>}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    </div>
  );
}
