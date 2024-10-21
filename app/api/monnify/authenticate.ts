// app/api/monnify/authenticate.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const MONNIFY_API_KEY = process.env.NEXT_PUBLIC_MONNIFY_API_KEY;
const MONNIFY_SECRET_KEY = process.env.MONNIFY_SECRET_KEY;
const MONNIFY_BASE_URL = process.env.MONNIFY_BASE_URL;
// 
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const auth = Buffer.from(`${MONNIFY_API_KEY}:${MONNIFY_SECRET_KEY}`).toString('base64');

    const response = await axios.post(
      `${MONNIFY_BASE_URL}/api/v1/auth/login`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.status(200).json({ accessToken: response.data.responseBody.accessToken });
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating with Monnify', error: error.message });
  }
};

export default handler;
