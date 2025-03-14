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
          <Image
            src={github}
            width={44}
            height={44}
            alt="github"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              borderRadius: '100%',
            }}
          />
        </Link>

        <div className="flex flex-col">
          <Link
            className="text-white hover:underline"
            href="https://github.com/ej-kimm/react-onboarding10.git"
            target="_blank"
          >
            @ej-kimm
          </Link>
          <Link
            className="text-white hover:underline"
            href="mailto:dossiba0604@naver.com"
          >
            dossiba0604@naver.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
