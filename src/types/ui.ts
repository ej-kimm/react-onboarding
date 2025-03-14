import { ChangeEvent, ReactNode } from 'react'

export type ButtonProps = {
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  children: ReactNode
  variant?: 'default' | 'primary' | 'ghost' | 'icon'
}

export type InputFieldProps = {
  className?: string
  type: string
  name?: string
  value: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type LoadingProps = {
  size?: number
  color?: string
}
