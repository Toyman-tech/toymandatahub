import { cookies } from "next/headers";
import { createSessionClient} from "@/appwrite/config";

 const auth = {
    user: null,
    sessionCookie:null,
   
    getUser :async ()=>{
        auth.sessionCookie = cookies().get('session');
         
        try{
            const {account} = await createSessionClient(auth.sessionCookie?.value)
            auth.user = await account.get() 
        } catch (error){
            console.error(error);
            auth.user = null ;
            auth.sessionCookie = null ;
        }
        return auth.user
    }

}
export default auth;