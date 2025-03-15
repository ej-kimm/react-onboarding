'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../common'

export default function OnboardingSection() {
  const router = useRouter()

  return (
    <div className="text-center text-white">
      <h1 className="animate-fade-in-down mb-1 text-4xl font-extrabold tracking-wide opacity-0 drop-shadow-xl sm:mb-2 sm:text-6xl">
        ONBOARDING
      </h1>

      <p className="animate-[var(--animate-fade-in-up)_0.2s] text-lg font-medium opacity-0 drop-shadow-2xl sm:text-2xl">
        프론트엔드 개발 온보딩 과제 ✨
      </p>

      <Button
        type="button"
        className="mt-4 transform transition-transform hover:scale-110 active:scale-95 sm:mt-8"
        onClick={() => router.push('/todo')}
      >
        투두 리스트 만들기
      </Button>
    </div>
  )
}
