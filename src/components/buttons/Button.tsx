'use client';

import { cn } from '@/lib/utils';

type ButtonProps = {
  label: string;
  icon?: string;
  border?: boolean;
  blur?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  icon: Icon,
  border,
  blur,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `flex items-center justify-center gap-2 px-5 py-2 rounded-[12px] group/item  focus:outline-2 focus:outline focus:outline-emerald-500 transition duration-500 focus:outline-offset-1 ${className}`,
        {
          'border border-[#616161] transition duration-300': border,
          ' backdrop-filter backdrop-blur-[16.5px] border bg-white/[0.15] border-[rgba(224, 224, 224, 0.30)] transition duration-500 hover:bg-white/20 hover:backdrop-blur-md  hover:shadow-md ':
            blur,
        }
      )}
      onClick={onClick}
    >
      {label}
      {Icon && (
        <picture className='group/icon'>
          <img
            className='transition duration-500 group-hover/item:translate-x-1 '
            src={Icon}
            alt='Arrow Image'
          />
        </picture>
      )}
    </button>
  );
}
