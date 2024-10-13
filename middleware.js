import { NextResponse, NextRequest } from "next/server"
import auth from "./auth";

export async function middleware(req){
    const user = await auth.getUser();
    console.log('hi', user )
    if(!user){
        req.cookies.delete("session");
        const response = NextResponse.redirect(new URL("/auth/sign-in", req.url));
        return response;
    }
    console.log('hello from mmm')
    return NextResponse.next()
}
export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|.*\\.png$).*)',  // General path matcher (excludes api, static files, etc.)
      '/dashboard/:path*' 
    ]
  };
  