// app/api/monnify/webhook/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { transactionReference, paymentStatus } = body;

    // Verify the payment status and update your database accordingly
    if (paymentStatus === 'PAID') {
      // Log success or update the payment status in your database
      console.log(`Payment successful for transaction ${transactionReference}`);
    }

    return NextResponse.json({ status: 'Webhook received' });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error processing webhook', error: error.message }, { status: 500 });
  }
}
