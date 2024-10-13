

import { Account } from 'appwrite';

import {Client} from 'node-appwrite'


 const createUserClient = async ()=>{
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    .setKey(process.env.NEXT_PUBLIC_API_KEY);
    

    console.log(client) 
//   return
    // return new Account(client)


    return{
        get account() {
            return new Account(client)
        }
    }

};


 const createSessionClient = async (session)=>{
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    
    if(session){
        client.setSession(session)
    }
    
    return{
        get account() {
            return new Account(client)
        }
    }

};

const registerUser = async ()=>{

}

export  { createUserClient, registerUser, createSessionClient};