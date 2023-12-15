import { NavItems } from '@/types/navtypes';
import Link from 'next/link';

type NavListProps = {
  navObj: NavItems;
  className?: string;
  onClick?: () => void;
};

export default function NavList({ navObj, onClick, className }: NavListProps) {
  return (
    <>
      <li
        onClick={onClick}
        className={`list-none nav__link w-full px-4 py-2 ${className}`}
      >
        <Link href={navObj.link}>{navObj.linkName}</Link>
      </li>
    </>
  );
}
