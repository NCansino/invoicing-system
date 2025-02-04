'use client';

import { sidebarLinks } from '@/shared/constants/links';
import { cn } from '@/shared/utils/commons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-2">
        {sidebarLinks.map(item => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={cn(
                pathname.startsWith(item.href)
                  ? 'bg-gray-50  font-semibold text-black/90'
                  : 'text-white hover:bg-gray-50   hover:text-black/90',
                'group flex gap-x-3 rounded-lg p-2 text-sm leading-6 hover:font-semibold'
              )}
            >
              <item.icon
                className={cn(
                  pathname.startsWith(item.href)
                    ? 'text-black/90'
                    : 'text-white group-hover:text-black/90',
                  'h-6 w-6 shrink-0'
                )}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarLinks;
