'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <motion.div
      className={cn(
        'border-b border-dashed fixed inset-x-0 transition-all border-neutral-400',
        isScrolled && 'shadow-md dark:shadow-black border-solid border-neutral-300 dark:border-neutral-700'
      )}>
      <nav className='flex flex-row justify-between items-center gap-5 relative w-full max-w-7xl mx-auto px-10 py-4'>
        <div>a</div>

        <Link
          href='/'
          id='nav-center'
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display h-full flex items-center justify-center p-4 dark:text-white'>
          Sulaiman Agara
        </Link>

        <div>b</div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
