'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import scrollIntoView from 'scroll-into-view-if-needed';
import { useRouter, usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { ImProfile } from 'react-icons/im';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItemsContainer: string | undefined = 'flex flex-row justify-between gap-5 text-sm items-center';
  const navItems: string | undefined =
    'text-left block hover:underline decoration-4 underline-offset-[4px] max-lg:p-5 max-lg:px-10 max-lg:w-full';
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const scrollTo = (sectionId: string) => {
    if (pathname != '/') router.push(`/#${sectionId}`, { scroll: false });
    else {
      const element = document.getElementById(`${sectionId}`);
      if (element)
        return scrollIntoView(element, {
          scrollMode: 'if-needed',
          block: 'start',
          inline: 'start',
          behavior: 'smooth',
        });
    }
  };
  useEffect(() => {
    //Navbar Scroll Shadow
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const decodedHash = decodeURIComponent(window.location.hash);

    if (decodedHash) {
      const element = document.getElementById(decodedHash.substring(1));
      if (element) {
        scrollIntoView(element, {
          scrollMode: 'if-needed',
          block: 'start',
          inline: 'start',
          behavior: 'smooth',
        });
      }
    }
  }, [pathname]);

  return (
    <nav
      className={cn(
        'border-b border-dashed fixed inset-x-0 transition-all duration-300 border-neutral-400 bg-white/30 dark:bg-black/50 backdrop-blur z-40',
        isScrolled && 'shadow-md dark:shadow-black border-solid border-neutral-300 dark:border-neutral-700'
      )}>
      <div className='flex flex-row justify-between items-center gap-5 relative w-full max-w-7xl mx-auto px-6 pl-0 md:px-10 lg:pr-14 min-h-14'>
        {showMenu ? (
          <button onClick={() => setShowMenu(false)} className='p-4 z-10 lg:absolute lg:hidden'>
            <FaXmark size={20} className='lg:hidden cursor-pointer z-10' />
          </button>
        ) : (
          <button className='p-4 z-10 lg:absolute lg:hidden' onClick={() => setShowMenu(true)}>
            <FaBars size={20} className='lg:hidden cursor-pointer z-10' />
          </button>
        )}
        {showMenu && (
          <div className='divide-y absolute flex flex-col gap-2 inset-x-0 top-[61px] bg-black/95 text-white h-[calc(100vh_-_61px)] overflow-hidden'>
            <button onClick={() => scrollTo('about-section')} className={navItems}>
              About
            </button>
            <button onClick={() => scrollTo('personal-statement-section')} className={navItems}>
              Personal Statement
            </button>
            <button onClick={() => scrollTo('projects-section')} className={navItems}>
              Projects
            </button>
            <button onClick={() => scrollTo('skills-section')} className={navItems}>
              Skills
            </button>
            <Link href='https://github.com/airplaneboy' target='_blank' className={cn(navItems, 'flex')}>
              Github
              <HiMiniArrowUpRight />
            </Link>
            <Link
              href='https://drive.google.com/file/d/1XCtKB9nLcupRNFif4tN7fwD2MR4A6yQw/view?usp=sharing'
              target='_blank'
              className={cn(navItems, 'flex')}>
              Resume
              <HiMiniArrowUpRight />
            </Link>
          </div>
        )}

        <div className={cn(navItemsContainer, 'hidden lg:flex')}>
          {/* <button onClick={() => scrollTo('about-section')} className={navItems}>
            About
          </button> */}
          <button
            onClick={() => scrollTo('personal-statement-section')}
            className={cn(navItems, '[word-spacing:_-5px_]')}>
            Personal Statement
          </button>
          <button onClick={() => scrollTo('projects-section')} className={navItems}>
            Projects
          </button>
          <button onClick={() => scrollTo('skills-section')} className={navItems}>
            Skills
          </button>
          {/* <Link href='https://github.com/airplaneboy' target='_blank' className={cn(navItems, 'flex')}>
            Github
            <HiMiniArrowUpRight />
          </Link> */}
        </div>

        <Link
          href='/'
          id='nav-center'
          className='text-xl max-md:w-full md:text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display h-full flex items-center justify-center md:p-4 text-center dark:text-white'>
          Sulaiman Agara
        </Link>

        <div className={navItemsContainer}>
          <Link
            href='https://drive.google.com/file/d/1XCtKB9nLcupRNFif4tN7fwD2MR4A6yQw/view?usp=sharing'
            target='_blank'
            className={cn(navItems, ' !p-0 max-sm:text-xs max-md:text-neutral-500 hidden sm:flex')}>
            Resume
            <HiMiniArrowUpRight />
          </Link>
          <Link
            href='https://github.com/airplaneboy'
            target='_blank'
            className={cn(navItems, ' !p-0 max-sm:text-xs max-md:text-neutral-500 hidden sm:flex')}>
            Github
            <HiMiniArrowUpRight />
          </Link>
          {/* Mobile Resume Icon */}
          {/* <Link
            href='https://drive.google.com/file/d/1XCtKB9nLcupRNFif4tN7fwD2MR4A6yQw/view?usp=sharing'
            target='_blank'
            className={cn(navItems, ' max-sm:p-0 max-sm:text-xs sm:hidden z-10')}>
            <ImProfile
              href='https://drive.google.com/file/d/1XCtKB9nLcupRNFif4tN7fwD2MR4A6yQw/view?usp=sharing'
              target='_blank'
              size={20}
            />
          </Link> */}

          {/* <span className='hidden lg:block'>
            <span className='text-blue-500 dark:text-blue-400'>agarasulaimany</span>@gmail.com
          </span> */}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
