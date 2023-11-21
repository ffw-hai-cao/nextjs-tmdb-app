'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { hasCookie } from 'cookies-next';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';

import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Popular', href: '/popular', current: false },
  { name: 'Upcoming', href: '/upcoming', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Disclosure as="header"
        className={classNames(
          isScrolled 
            ? 'bg-black'
            : 'bg-gradient-to-b from-black transition',
            'header-wrap sticky top-0 z-50'
        )}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  <Image 
                    className="headr-logo cursor-pointer"
                    src="/images/logo.png"
                    alt="logo"
                    width={92}
                    height={25}
                    onClick={() => router.push('/')}
                  />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? 'font-bold'
                              : 'hover:text-gray-300',
                            'text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <span onClick={() => router.push(item.href)} className="nav-span">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <span className="cursor-pointer text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => router.push('/search')}>
                      <MagnifyingGlassIcon className="h-6 w-6" />
                    </span>
                    
                    <span className="cursor-pointer ml-3 text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => router.push(hasCookie('userToken') ? '/user' : '/login')}>
                      <UserIcon className="h-6 w-6 rounded-full" />
                    </span>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'font-bold' : 'hover:text-gray-300',
                      'text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Header;