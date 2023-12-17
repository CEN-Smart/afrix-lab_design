import React from 'react';
import { NavItems } from '@/types/navtypes';
import NavList from './NavList';

const navItems: NavItems[] = [
  { linkName: 'Home', link: '/' },
  { linkName: 'Services', link: '/services' },
  { linkName: 'Projects', link: '/projects' },
  { linkName: 'About', link: '/about' },
  { linkName: 'Blog', link: '/blog' },
];
export default function Navigation() {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        name='nav-checkbox'
        id='nav-toggle'
        className='navigation__checkbox'
      />
      <label htmlFor='nav-toggle' className='navigation__button'>
        <span className='navigation__icon'></span>
      </label>
      <div className='navigation__background'></div>
      <nav className='navigation__nav'>
        <ul className='navigation__list  flex flex-col gap-4'>
          {navItems.map((item, i) => (
            <NavList index={`0${i + 1}`} key={item.linkName} navObj={item}>
              {item.linkName}
            </NavList>
          ))}
        </ul>
      </nav>
    </div>
  );
}
