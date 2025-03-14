'use client'

import type { ButtonProps } from '@/types/ui'
import { JSX } from 'react'

export default function Button({
  type = 'button',
  onClick,
  className,
  children,
  variant = 'default',
}: ButtonProps): JSX.Element {
  const variantClasses = {
    default: 'px-5 py-2 bg-white text-accent font-semibold rounded-sm',
    primary:
      'px-4 py-1 bg-accent text-white font-bold rounded-lg sm:px-8 sm:py-2',
    ghost: 'px-1 py-[1px] bg-transparent text-accent font-bold sm:px-1.5',
    icon: 'h-[22px] w-[22px] bg-gray hover:bg-accent flex items-center justify-center rounded-full transition-all delay-150 ease-in-out hover:scale-[120%] hover:rotate-15 sm:h-[26px] sm:w-[26px]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  )
}
