'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './constants';
import MobileNav from './mobile-nav';
import SectionContainer from './section-container';
import ThemeSwitch from './theme-switch';
export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                'horizontal-underline hidden text-3xl font-extrabold sm:block',
                {
                  'horizontal-underline-active': pathName === '/',
                }
              )}
              aria-label="HH"
            >
              HH.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex mr-2">
              {navigationLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames('horizontal-underline text-base', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
