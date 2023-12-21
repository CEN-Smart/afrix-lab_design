'use client';
import { cn } from '@/lib/utils';
import { NavItems } from '@/types/navtypes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavListProps = {
  navObj: NavItems;
  className?: string;
  index?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onNavClick?: () => void;
};

export default function NavList({
  navObj,
  onClick,
  onNavClick,
  index,
  children,
  className,
}: NavListProps) {
  const pathname = usePathname();
  return (
    <>
      <li className='list-none flex items-end justify-center'>
        <Link
          onClick={onClick ? onClick : onNavClick}
          className={cn(
            ` navigation__item font-[600]  px-4 py-2 cursor-pointer inline-block ${className}`,
            {
              'translate-x-4 bg-[#54890533]/20 shadow-xl rounded-[12px] font-extrabold text-[#548905]':
                pathname === navObj.link,
            }
          )}
          href={navObj.link}
        >
          <span className='mr-3'>{index}</span>
          {children}
        </Link>
      </li>
    </>
  );
}
