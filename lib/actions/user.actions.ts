"use server";

import { ID, Query, Client } from "node-appwrite";
import axios from "axios";

import {
  ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_COLLECTION_WALLETS,
  users,
  databases,
  MONNIFY_BASE_URL,
  MONNIFY_BASE_URL_ORIGINAL,
  MONNIFY_CONTRACT_CODE,
  MONNIFY_API_KEY,
  MONNIFY_SECRET_KEY,
} from "../appwrite.config";

import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user) => {
  try {
    console.log("testing1");
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      user.password,
      user.name
    );
    console.log("hey");
    // console.log("hmm", newuser)
    
    //  create a document in the db
    if (newuser) {
      console.log("step 1")
      const data = parseStringify(newuser);
      const wallets = await createMonnifyWallet(data);
      
      if (wallets) {
        const newWallet = parseStringify(wallets);
        const reference = newWallet?.accountReference
        const parsedWallets = newWallet?.accounts?.map(account => JSON.stringify(account)) || [];
        // console.log("Formatted account details:", parsedWallets);
      
        const user_id = data.$id;
        const wallet = {
          balance: '10000',
          transaction_history: [],
          account_details: parsedWallets, // Store each account as a string in the array
          account_reference: reference,
        };
      
        // console.log("Wallet object:", wallet);
      
        try {
          const response = await databases.createDocument(
            NEXT_PUBLIC_DATABASE_ID,
            NEXT_PUBLIC_COLLECTION_WALLETS,
            user_id,
            wallet
          );
          console.log("Wallet created:", response);
        } catch (error) {
          console.error("Error creating wallet:", error);
        }
      }
      
      // creating monnify acct
    }
    return parseStringify(newuser);
    // return;
  } catch (error) {
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

export const getUser = async (userId: string) => {
  // try {
  //   const user = await auth.getUser();
  //   console.log("tee", user?.$id);

  //   return user;
  // } catch (error) {
  //   console.log(error)
  // }

  try {
    const user = await users.get(userId);
    console.log("result", user);
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
      "[YOUR_DATABASE_ID]",
      "[YOUR_WALLET_COLLECTION_ID]",
      userId
    );

    // Update balance based on the transaction type
    const newBalance =
      transaction.type === "credit"
        ? wallet.balance + transaction.amount
        : wallet.balance - transaction.amount;

    // Update the transaction history
    const updatedTransactions = [...wallet.transaction_history, transaction];

    // Update the wallet document in the database
    const updatedWallet = await databases.updateDocument(
      "[YOUR_DATABASE_ID]",
      "[YOUR_WALLET_COLLECTION_ID]",
      userId,
      {
        balance: newBalance,
        transaction_history: updatedTransactions,
      }
    );

    console.log("Wallet updated:", updatedWallet);
  } catch (error) {
    console.error("Error updating wallet:", error);
  }
};

// Function to get user's wallet
export const getWalletForUser = async (user_id: string) => {
  try {
    console.log("wallets", user_id);
    const wallet = await databases.getDocument(
      NEXT_PUBLIC_DATABASE_ID,
      NEXT_PUBLIC_COLLECTION_WALLETS,
      user_id
    );
    console.log("User wallet:", wallet);
    return wallet;
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return null;
  }
};

const getMonnifyAuthToken = async () => {
  try {
    // Encode API Key and Secret Key
    const credentials = Buffer.from(`${MONNIFY_API_KEY}:${MONNIFY_SECRET_KEY}`).toString('base64');

    const response = await axios.post(
      `${MONNIFY_BASE_URL}/api/v1/auth/login`,
      {}, // No need to send body content
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { accessToken } = response.data.responseBody;
    console.log('Access token retrieved successfully:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error getting Monnify auth token:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const createMonnifyWallet = async (user) => {
  const { name, email } = user;

  try {
    // Get Monnify auth token
    const token = await getMonnifyAuthToken();

    // Call Monnify API to create a reserved account
    const response = await axios.post(
      `${MONNIFY_BASE_URL}/api/v2/bank-transfer/reserved-accounts`,
      {
        accountReference: `${user.$id}-wallet`,
        accountName: name,
        customerEmail: email,
        customerName: name,
        currencyCode: 'NGN',
        contractCode: MONNIFY_CONTRACT_CODE,
        incomeSplitConfig: [], // Optional income split configuration
        getAllAvailableBanks: true, // Optional flag if required by Monnify
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.responseBody; // Return reserved account details
  } catch (error) {
    console.error('Error creating Monnify reserved account:', error);
    throw error;
  }
};

export const logout = async () => {
  // await users.deleteSession('session');
};

// retrieve account details
export const fetchAccountData = async (user_id) => {
  try {
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,      // Database ID
      process.env.NEXT_PUBLIC_COLLECTION_WALLETS, // Collection ID
      user_id                                   // Document ID (user_id)
    );

    console.log("Account data fetched:", response.account_details);
    return response.account_details; // This will contain the `account_details` array
  } catch (error) {
    console.error("Error fetching account data:", error);
    throw error;
  }
};
