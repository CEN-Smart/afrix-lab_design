import { NavItems } from '@/types/navtypes';
import Link from 'next/link';

export default function NavList({ navObj }: { navObj: NavItems }) {
  return (
    <>
      <li className='list-none'>
        <Link href={navObj.link}>{navObj.linkName}</Link>
      </li>
    </>
  );
}
