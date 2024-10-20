"use server";

import { ID, Query, Client } from "node-appwrite";

import {
  ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { Account } from "appwrite";
import auth from "@/auth";


// CREATE APPWRITE USER
export const createUser = async (user) => {
    try {
      console.log('testing1')
      // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
      const newuser = await users.create(
        ID.unique(),
        user.email,
        user.phone,    
        user.password,
        user.name,
        
      );
      console.log('hey')
      console.log("hmm", newuser)
    //  const data = parseStringify(newuser);
    //  console.log('data', data?.$id)
    
      return parseStringify(newuser);
      // return;
    } catch (error: any) {
      // Check existing user
      if (error && error?.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
  
        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
  };

  export const getUser = async (userId:string) => {
    // try {
    //   const user = await auth.getUser();
    //   console.log("tee", user?.$id);
      
    //   return user;  
    // } catch (error) {
    //   console.log(error)
    // }
    
    try {
      const user = await users.get(userId);
      console.log('result', user)
      return parseStringify(user);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the user details:",
        error
      );
    }
  };
  export const logout = async() =>{
    // await users.deleteSession('session');

  }



//   export const CreateUserClient = async ()=>{
//     const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
//     .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
//     .setKey(process.env.NEXT_PUBLIC_API_KEY);
    

//     console.log(client) 
// //   return
//     // return new Account(client)


//     return{
//         get account() {
//             return new Account(client)
//         }
//     }

// };


//  export const CreateSessionClient = async (session)=>{
//     const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
//     .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    
//     if(session){
//         client.setSession(session)
//     }
    
//     return{
//         get account() {
//             return new Account(client)
//         }
//     }

// };

const registerUser = async ()=>{

}