import { NextResponse } from 'next/server';
import Monnify from 'monnify-sdk';

const MONNIFY_API_KEY = process.env.NEXT_PUBLIC_MONNIFY_API_KEY;
const MONNIFY_SECRET_KEY = process.env.MONNIFY_SECRET_KEY;
const MONNIFY_BASE_URL = process.env.MONNIFY_BASE_URL || 'https://sandbox.monnify.com';

// Initialize the Monnify SDK
const monnify = new Monnify(MONNIFY_API_KEY, MONNIFY_SECRET_KEY, MONNIFY_BASE_URL);

export async function POST(req: Request) {
  try {
    // Use the SDK to authenticate
    const response = await monnify.authenticate();
    
    return NextResponse.json({ accessToken: response.accessToken });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: 'Error authenticating with Monnify', error: error.message }, { status: 500 });
  }
}
