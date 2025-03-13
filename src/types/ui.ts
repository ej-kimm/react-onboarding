import { ReactNode } from 'react'

export type ButtonProps = {
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  children: ReactNode
  variant?: 'default'
}
