// app/components/PaymentComponent.tsx

import React, { useState } from 'react';
import { MonnifySDK } from 'monnify-sdk';

const PaymentComponent = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('NGN');
  const [paymentStatus, setPaymentStatus] = useState('');

  const initializePayment = () => {
    const monnify = new MonnifySDK({
      // Replace with your Monnify API Key and Secret
      apiKey: process.env.NEXT_PUBLIC_MONNIFY_API_KEY,
      secretKey: process.env.NEXT_PUBLIC_MONNIFY_SECRET_KEY,
      sandbox: true, // Use true for sandbox mode
    });

    const transactionDetails = {
      amount,
      currency,
      transactionReference: `ref-${Date.now()}`, // Unique reference for the transaction
      // other necessary details...
    };

    monnify.initializePayment(transactionDetails, (response) => {
      if (response.status === 'success') {
        setPaymentStatus('Payment Successful');
      } else {
        setPaymentStatus('Payment Failed');
      }
    }, (error) => {
      console.error('Payment Error: ', error);
      setPaymentStatus('Payment Error');
    });
  };

  return (
    <div>
      <h2>Payment Component</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter Amount"
      />
      <button onClick={initializePayment}>Pay Now</button>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default PaymentComponent;
