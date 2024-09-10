"use server"

import { cookies } from 'next/headers';


export const setsession = async(session) =>{
    return cookies().set('session', session.secret, {
        httpOnly:true,
        sameSite:'strict',
        secure: true,
        expires: new Date(session.expire),
        path:'/dashboard'
       });
}