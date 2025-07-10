
'use client';

import NProgress from 'nprogress';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes } from 'react';

type ProgressLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ProgressLink({ href, ...props }: ProgressLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't show progress bar for same page navigation
    const currentPath = pathname === href;
    if (currentPath) {
        // If there's a hash, let the browser handle it for same-page scrolling.
        if (String(href).includes('#')) return;
        // Otherwise, prevent navigation.
        event.preventDefault();
        return;
    }

    // Only show progress bar for internal navigation.
    // This avoids showing it for mailto: or external links.
    if (String(href).startsWith('/')) {
        NProgress.start();
    }
    
    // Propagate the original onClick event if it exists.
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return <Link href={href} {...props} onClick={handleClick} />;
}
