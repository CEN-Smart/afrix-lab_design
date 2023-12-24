'use client';
import Link from 'next/link';

type LogoProps = {
  className?: string;
  image: string;
};

const Logo = ({ className, image }: LogoProps) => {
  return (
    <Link
      href='/'
      className={` focus:outline-2 focus:outline focus:outline-emerald-500 focus:outline-offset-1 transition duration-500 ${className}`}
    >
      <picture>
        <img className='w-full h-full' src={image} alt='Logo' />
      </picture>
    </Link>
  );
};

export default Logo;
