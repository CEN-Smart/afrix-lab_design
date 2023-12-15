'use client';
import { NavItems } from '@/types/navtypes';
import NavList from './NavList';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems: NavItems[] = [
  { linkName: 'Home', link: '/' },
  { linkName: 'Services', link: '/services' },
  { linkName: 'Projects', link: '/projects' },
  { linkName: 'About', link: '/about' },
  { linkName: 'Blog', link: '/blog' },
];
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <header role='banner'>
      <div className='w-[95%] md:w-[70%] rounded-[32px] bg-black/20 backdrop-blur-[16px] px-4 md:px-16 h-[72px] flex items-center justify-between fixed z-[99] top-[2rem] lg:top-[4rem] left-1/2 -translate-x-1/2'>
        <div className='logo text-white'>Logo</div>
        <nav className='flex items-center gap-3 md:gap-6 relative'>
          <button className='flex-shrink-0 bg-cta hover:bg-ctahover transition duration-300 px-5 py-2 rounded-[12px]'>
            Get in touch
          </button>
          <ul
            className={cn(
              `absolute top-[3.5rem] scale-0 right-0 bg-white  transition duration-500 w-40 aspect-square flex flex-col items-center justify-center z-[100] `,
              {
                'scale-100': isMenuOpen,
              }
            )}
          >
            {navItems.map(navObj => (
              <NavList
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(``, {
                  'bg-black/20 font-[600]': pathname === navObj.link,
                })}
                navObj={navObj}
                key={navObj.linkName}
              />
            ))}
          </ul>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoMdClose className='text-white text-3xl' />
            ) : (
              <MdMenu className='text-white text-3xl' />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
