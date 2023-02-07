import { NextResponse } from 'next/server';

export const middleware = (req) => {
  const userTokken = req.cookies.get('access_token');

  const url = req.url;

  if (!userTokken && url.includes('/admin') && !url.includes('/signin')) {
    return NextResponse.redirect('http://localhost:3000/admin/signin');
  }

  //   if (userTokken && url.includes('admin/signin')) {
  //     return NextResponse.redirect('http://localhost:3000/admin/dashboard');
  //   }
};

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
