import type { LoadingProps } from '@/types/ui'
import { JSX } from 'react'
import { ClipLoader } from 'react-spinners'

export default function LoadingSpinner({
  size = 70,
  color = 'var(--color-accent)',
}: LoadingProps): JSX.Element {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClipLoader size={size} color={color} loading={true} />
    </div>
  )
}
