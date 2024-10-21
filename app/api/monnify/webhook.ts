// app/api/monnify/webhook.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { transactionReference, paymentStatus } = req.body;

    // Verify the payment status and update your database accordingly
    if (paymentStatus === 'PAID') {
      // Update user payment status in database
      console.log(`Payment successful for transaction ${transactionReference}`);
    }

    res.status(200).json({ status: 'Webhook received' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
