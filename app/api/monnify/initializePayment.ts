// app/api/monnify/initializePayment.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const MONNIFY_CONTRACT_CODE = process.env.MONNIFY_CONTRACT_CODE;
const MONNIFY_BASE_URL = process.env.MONNIFY_BASE_URL;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { amount, customerEmail, customerName, paymentReference } = req.body;

  try {
    const { data: authResponse } = await axios.post('/api/monnify/authenticate');
    const accessToken = authResponse.accessToken;

    const response = await axios.post(
      `${MONNIFY_BASE_URL}/api/v1/merchant/transactions/init-transaction`,
      {
        amount,
        customerEmail,
        customerName,
        paymentReference,
        currencyCode: 'NGN',
        paymentDescription: 'Payment for VTU services',
        contractCode: MONNIFY_CONTRACT_CODE,
        paymentMethods: ['CARD', 'ACCOUNT_TRANSFER'],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error initializing payment', error: error.message });
  }
};

export default handler;
