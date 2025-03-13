'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../common'

export default function OnboardingSection() {
  const router = useRouter()

  return (
    <div className="text-center text-white">
      <h1 className="animate-fade-in-down mb-2 text-5xl font-extrabold tracking-wide opacity-0 drop-shadow-xl">
        ONBOARDING
      </h1>

      <p className="animate-[var(--animate-fade-in-up)_0.2s] text-xl font-medium opacity-0 drop-shadow-2xl">
        프론트엔드 개발 온보딩 과제 ✨
      </p>

      <Button
        type="button"
        className="mt-8 transform transition-transform hover:scale-110 active:scale-95"
        onClick={() => router.push('/todo')}
      >
        투두 리스트 만들기
      </Button>
    </div>
  )
}
