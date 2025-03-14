'use client'

import github from '@/assets/images/github.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 transform animate-[var(--animate-fade-in-up)_0.4s] opacity-0">
      <div className="flex items-center gap-2">
        <Link
          href="https://github.com/ej-kimm/react-onboarding10.git"
          target="_blank"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full sm:h-12 sm:w-12">
            <Image
              src={github}
              fill
              alt="github"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>

        <div className="flex flex-col">
          <Link
            className="text-sm font-medium text-white hover:underline sm:text-lg"
            href="https://github.com/ej-kimm/react-onboarding10.git"
            target="_blank"
          >
            @ej-kimm
          </Link>
          <Link
            className="text-sm font-medium text-white hover:underline sm:text-lg"
            href="mailto:dossiba0604@naver.com"
          >
            dossiba0604@naver.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
