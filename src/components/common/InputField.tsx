import { InputFieldProps } from '@/types/ui'

export default function InputField({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
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
