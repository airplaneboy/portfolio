'use client';

import * as React from 'react';
// import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
// import { cn } from '@/lib/utils';

// import { Button } from '@/components/ui/button';
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
      <label className='inline-flex items-center relative'>
        <input
          onChange={(e) => (e.currentTarget.checked == true ? setTheme('dark') : setTheme('light'))}
          className='peer hidden'
          id='toggle'
          type='checkbox'
        />
        <div className="overflow-hidden relative h-9 w-[5.5rem] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-8 after:h-8 after:bg-gradient-to-r from-blue-500 to-blue-600 via-blue-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[2px] after:left-[7px] active:after:w-[50px] peer-checked:after:left-[82px] peer-checked:after:translate-x-[-100%] shadow-inner shadow-neutral-500 dark:shadow-black !duration-0 after:!duration-0 after:shadow-md"></div>
        <svg
          height='0'
          width='100'
          viewBox='0 0 24 24'
          data-name='Layer 1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          className='fill-white peer-checked:opacity-60 absolute w-5 h-5 left-[13px] '>
          <path d='M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z'></path>
        </svg>
        <svg
          height='512'
          width='512'
          viewBox='0 0 24 24'
          data-name='Layer 1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          className='fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-5 h-5 right-[13px]'>
          <path d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'></path>
        </svg>
      </label>

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild className='bg-transparent'>
          <Button variant='outline' size='icon' className='rounded-sm'>
            <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='bg-white/50 backdrop-blur dark:bg-black dark:backdrop-blur-none'>
          <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );
}
