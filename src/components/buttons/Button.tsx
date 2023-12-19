'use client';

import { cn } from '@/lib/utils';

type ButtonProps = {
  label: string;
  icon?: string;
  border?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  icon: Icon,
  border,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `flex items-center justify-center gap-2 px-5 py-2 rounded-[12px] group/item ${border} ${className}`,
        {
          'border border-[#616161] transition duration-300': border,
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
