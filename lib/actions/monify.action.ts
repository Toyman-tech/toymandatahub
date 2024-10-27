"use server"
import axios from "axios";

// Appwrite environment variables
export const {
    MONNIFY_BASE_URL,
    MONNIFY_CONTRACT_CODE,
    MONNIFY_API_KEY,
    MONNIFY_SECRET_KEY
  } = process.env;

 const getMonnifyAuthToken = async () => {
    try {
      const response = await axios.post(`${MONNIFY_BASE_URL}/v1/auth/login`, {
        apiKey: MONNIFY_API_KEY,
        secretKey: MONNIFY_SECRET_KEY,
      });
  
      const { accessToken } = response.data.responseBody;
      return accessToken;
    } catch (error) {
      console.error('Error getting Monnify auth token:', error);
      throw error;
    }
  };
  

  export const createMonnifyWallet = async (user) => {
    const { name, email } = user;
  
    try {
      // Get Monnify auth token
      const token = await getMonnifyAuthToken();
  
      // Call Monnify API to create a reserved account
      const response = await axios.post(
        `${MONNIFY_BASE_URL}/v1/bank-transfer/reserved-accounts`,
        {
          accountReference: `${user.$id}-wallet`,
          accountName: name,
          customerEmail: email,
          customerName: name,
          currencyCode: 'NGN',
          contractCode: MONNIFY_CONTRACT_CODE,
          incomeSplitConfig: [], // Optional income split configuration
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
  
  