'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
// import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant='outline'
        size='icon'
        className='rounded-md min-w-9 max-w-9 min-h-9 max-h-9 z-10 bg-transparent dark:bg-transparent'>
        <SunIcon
          onClick={() => setTheme('dark')}
          className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        />
        <MoonIcon
          onClick={() => setTheme('light')}
          className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        />
        <span className='sr-only'>Toggle theme</span>
      </Button>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild className='bg-transparent dark:bg-transparent'>
          <Button variant='outline' size='icon' className='rounded-md min-w-9 max-w-9 min-h-9 max-h-9 z-10'>
            <SunIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='bg-white/50 backdrop-blur dark:bg-black/65 dark:backdrop-blur-none'>
          <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );
}
