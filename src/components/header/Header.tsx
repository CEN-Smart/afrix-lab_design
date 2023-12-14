'use client';
import { NavItems } from '@/types/navtypes';
import NavList from './NavList';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const navItems: NavItems[] = [
  { linkName: 'Home', link: '/' },
  { linkName: 'About', link: '/about' },
  { linkName: 'Services', link: '/services' },
];
export default function Navbar() {
  return (
    <header role='banner'>
      <div className='w-[95%] md:w-[70%] rounded-[32px] bg-black/20 backdrop-blur-[16px] px-4 md:px-16 h-[72px] flex items-center justify-between fixed top-[2rem] lg:top-[4rem] left-1/2 -translate-x-1/2'>
        <div className='logo text-white'>Logo</div>
        <nav className='flex items-center gap-3 md:gap-6'>
          <button className='flex-shrink-0 bg-cta hover:bg-ctahover transition duration-300 px-5 py-2 rounded-[12px]'>
            Get in touch
          </button>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton>
                  {isOpen ? (
                    <IoMdClose className='text-3xl text-white' />
                  ) : (
                    <MdMenu className='text-3xl text-white' />
                  )}
                </MenuButton>
                <MenuList bg='rgba(0,0,0,0.5)' color='white'>
                  {navItems.map(navObj => (
                    <MenuItem
                      transition='all'
                      transitionDuration='300'
                      _hover={{
                        bg: 'rgba(0,0,0,0.2)',
                      }}
                      bg='rgba(0,0,0,0.5)'
                      backdropBlur={4}
                      color='white'
                      key={navObj.linkName}
                    >
                      <NavList navObj={navObj} />
                    </MenuItem>
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
        </nav>
      </div>
    </header>
  );
}
