import { NextResponse } from 'next/server';

export function middleware(request) {
  // ভবিষ্যতের জন্য: process.env.ENABLE_AUTH চেক করবে
  const isAuthEnabled = process.env.ENABLE_AUTH === 'true'; 

  if (isAuthEnabled && request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin_token');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}