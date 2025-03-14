import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// 허용된 경로 목록 (이외의 모든 경로는 '/'로 이동)
const allowedPaths = ['/', '/todo/all', '/todo/active', '/todo/completed']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/todo') {
    return NextResponse.redirect(new URL('/todo/all', request.url))
  }

  if (!allowedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
