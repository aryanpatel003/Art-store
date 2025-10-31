'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideBottomPadding = pathname.startsWith('/product/') || pathname.startsWith('/admin/');

    return (
        <main className={cn(
            "flex-grow",
            !hideBottomPadding && "pb-24 md:pb-0"
        )}>
            {children}
        </main>
    );
}
