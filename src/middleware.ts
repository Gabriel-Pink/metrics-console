import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const url = req.nextUrl.clone();
  const { pathname } = url;

  console.log(process.env.JWT_SECRET!)

  try {
    if (token) {
      
      await jwtVerify(token, SECRET_KEY);

      if (pathname === "/signin") {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    } else {
      
      if (pathname === "/") {
        url.pathname = "/signin";
        return NextResponse.redirect(url);
      }
    }
  } catch (error) {
    
    if (pathname !== "/signin") {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/"],
};