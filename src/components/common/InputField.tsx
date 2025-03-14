import type { InputFieldProps } from '@/types/ui'
import { JSX } from 'react'

export default function InputField({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputFieldProps): JSX.Element {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-none outline-none ${className}`}
    />
  )
}
