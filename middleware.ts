import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const proto = req.headers.get('x-forwarded-proto');
  const hostname = req.nextUrl.hostname;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next();
  }

  if (proto && proto !== 'https') {
    const url = req.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
