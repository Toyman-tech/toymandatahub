// app/api/monnify/initializePayment/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

const MONNIFY_CONTRACT_CODE = process.env.MONNIFY_CONTRACT_CODE;
const MONNIFY_BASE_URL = process.env.MONNIFY_BASE_URL;
const LOCAL_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function POST(req: Request) {
  try {
    const { amount, customerEmail, customerName, paymentReference } = await req.json();

    // Log to ensure environment variables are loaded
    // console.log('MONNIFY_BASE_URL:', MONNIFY_BASE_URL);
    // console.log('LOCAL_BASE_URL:', LOCAL_BASE_URL);

    // Authenticate to get access token
    const { data: authResponse } = await axios.post(`${LOCAL_BASE_URL}/api/monnify/authenticate`);
    console.log('monie', authResponse)
    // const accessToken = authResponse.accessToken;
    // console.log('Access Token:', accessToken);

    // // Continue with initializing payment
    // const response = await axios.post(
    //   `${MONNIFY_BASE_URL}/api/v1/merchant/transactions/init-transaction`,
    //   {
    //     amount,
    //     customerEmail,
    //     customerName,
    //     paymentReference,
    //     currencyCode: 'NGN',
    //     paymentDescription: 'Payment for VTU services',
    //     contractCode: MONNIFY_CONTRACT_CODE,
    //     paymentMethods: ['CARD', 'ACCOUNT_TRANSFER'],
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // );

    // return NextResponse.json(response.data);
    return;
  } catch (error: any) {
    console.error('Error initializing payment:', error);
    return NextResponse.json({ message: 'Error initializing payment', error: error.message }, { status: 500 });
  }
}
