'use client';
import Link from 'next/link';

type LogoProps = {
  className?: string;
  image: string;
};

const Logo = ({ className, image }: LogoProps) => {
  return (
    <Link href='/' className={className}>
      <picture>
        <img className='w-full h-full' src={image} alt='Logo' />
      </picture>
    </Link>
  );
};

export default Logo;
