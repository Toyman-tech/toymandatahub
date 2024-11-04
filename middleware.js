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
    matcher:['/((?!api|_next/static|_next/image|.*\\.png$).)', '/dashboard', '/dashboard/wallet', '/dashboard/airtime', '/dashboard/bulk-sms', '/dashboard/cable', '/dashboard/coupon', '/dashboard/data', '/dashboard/devApi', '/dashboard/electricity', '/dashboard/faqs', '/dashboard/orders', '/dashboard/payments', '/dashboard/pin', '/dashboard/pricing', '/dashboard/resut-checker', '/dashboard/settings', '/dashboard/summary', '/dashboard/utilities', '/dashboard/walllet']
}
