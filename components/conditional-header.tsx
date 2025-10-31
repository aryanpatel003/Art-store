'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';

export function ConditionalHeader() {
    const pathname = usePathname();
    
    // Hide header entirely for admin pages, as they have their own layout.
    if (pathname.startsWith('/admin')) {
        return null;
    }

    return <Header />;
}
