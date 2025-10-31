
'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

export function ConditionalFooter() {
    const pathname = usePathname();

    const isAdminPage = pathname.startsWith('/admin');
    const isProductPage = pathname.startsWith('/product/');

    // Admin pages have their own layout and don't need this footer
    if (isAdminPage) {
        return null;
    }

    return (
        <div className={cn(isProductPage && 'hidden md:block')}>
            <Footer />
        </div>
    );
}
