'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //Navbar Scroll Shadow
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'border-b border-dashed fixed inset-x-0 transition-all duration-300 border-neutral-400 dark:bg-black/50 backdrop-blur z-40',
        isScrolled && 'shadow-md dark:shadow-black border-solid border-neutral-300 dark:border-neutral-700'
      )}>
      <div className='flex flex-row justify-between items-center gap-5 relative w-full max-w-7xl mx-auto px-10 py-4 min-h-14'>
        <div className='flex flex-row justify-between gap-5 text-sm'>
          <Link href='/projects'>Projects</Link>
          <Link href='/about'>About</Link>
          <Link href='https://github.com/airplaneboy' target='_blank'>
            Github
          </Link>
        </div>

        <Link
          href='/'
          id='nav-center'
          className='text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display h-full flex items-center justify-center p-4 dark:text-white'>
          Sulaiman Agara
        </Link>

        <div>{/* <Link href='/blog'>Blog</Link> */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
