'use client';

import Logo from './Logo';
import Navigation from './Navigation';

export default function Navbar() {
  return (
    <header role='banner' className='relative'>
      <div className=' max-w-[1200px] w-full rounded-[32px] bg-black/20 backdrop-blur-[16px] px-4 md:px-16 h-[72px] flex items-center justify-between fixed z-[99] top-[2rem] lg:top-[4rem] left-1/2 -translate-x-1/2'>
        <Logo
          image='/images/logo.png'
          className='w-12 rounded-full block aspect-square overflow-hidden '
        />
        <div className='flex items-center gap-3 md:gap-6 relative'>
          <button className='flex-shrink-0 bg-cta hover:bg-ctahover transition duration-300 px-5 py-2 rounded-[12px]'>
            Get in touch
          </button>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
