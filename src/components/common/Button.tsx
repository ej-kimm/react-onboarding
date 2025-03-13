'use client'

import { ButtonProps } from '@/types/ui'
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
    primary: 'px-8 py-2 bg-accent text-white font-bold rounded-lg',
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
