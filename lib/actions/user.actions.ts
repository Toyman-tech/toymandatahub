"use server";

import { ID, Query, Client } from "node-appwrite";

import {
  ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_COLLECTION_WALLETS,
  users,
  databases,
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
      // console.log("hmm", newuser)
     const data = parseStringify(newuser);
    //  create a document in the db
      if (data){
        console.log('hello new wallet here')
        const user_id = data.$id;
        const wallet = {
          balance: 10000,
          transaction_history: []
        };
        console.log("Wallet object:", wallet);

        try {
          const response = await databases.createDocument(
            NEXT_PUBLIC_DATABASE_ID,
            NEXT_PUBLIC_COLLECTION_WALLETS,
            user_id,
            wallet
            );
          console.log('Wallet created:', response);
        } catch (error) {
          console.error('Error creating wallet:', error);
        }
      
      }
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

// Function to update wallet balance and transaction history
export const updateWallet = async (userId: string, transaction: any) => {
  try {
    // Fetch the current wallet
    const wallet = await databases.getDocument(
      '[YOUR_DATABASE_ID]',
      '[YOUR_WALLET_COLLECTION_ID]',
      userId
    );

    // Update balance based on the transaction type
    const newBalance =
      transaction.type === 'credit'
        ? wallet.balance + transaction.amount
        : wallet.balance - transaction.amount;

    // Update the transaction history
    const updatedTransactions = [...wallet.transaction_history, transaction];

    // Update the wallet document in the database
    const updatedWallet = await databases.updateDocument(
      '[YOUR_DATABASE_ID]',
      '[YOUR_WALLET_COLLECTION_ID]',
      userId,
      {
        balance: newBalance,
        transaction_history: updatedTransactions,
      }
    );

    console.log('Wallet updated:', updatedWallet);
  } catch (error) {
    console.error('Error updating wallet:', error);
  }
};

// Function to get user's wallet
export const getWalletForUser = async (user_id: string) => {
  try {
    console.log("wallets", user_id)
    const wallet = await databases.getDocument(
      NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_COLLECTION_WALLETS,
      user_id,
    );
    console.log('User wallet:', wallet);
    return wallet;
  } catch (error) {
    console.error('Error fetching wallet:', error);
    return null;
  }
};

  
  export const logout = async() =>{
    // await users.deleteSession('session');

  }


  // const transaction = {
  //   transaction_id: 'txn003',
  //   type: 'credit', // or 'debit'
  //   amount: 1000, // Amount in NGN
  //   description: 'Wallet funding',
  //   date: new Date().toISOString(),
  //   reference: 'ref003', // Reference ID from Monnify or other payment gateways
  // };
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