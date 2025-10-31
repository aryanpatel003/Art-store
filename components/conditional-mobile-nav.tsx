'use client';

import { usePathname } from 'next/navigation';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ConditionalMobileNav() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(() => {
        const isAdminPage = pathname.startsWith('/admin');
        const isProductPage = pathname.startsWith('/product/');
        setIsHidden(isAdminPage || isProductPage);
    }, [pathname]);

    return (
        <MobileNav className={cn(
            "transition-transform duration-300 ease-in-out",
            isHidden ? "translate-y-[150%]" : "translate-y-0"
        )} />
    );
}
