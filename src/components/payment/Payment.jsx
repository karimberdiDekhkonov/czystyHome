import cashLogo from './cash.svg'
import cardLogo from './card.svg'
import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>CHOOSE PAYMENT METHOD</h1>
      </div>
      <div className="payment-methods">
        <div className="payment-method cash-active">
          <img src={cashLogo} alt="Cash" className="payment-logo" />
          <div>Cash</div>
        </div>
        <div className="payment-method">
          <img src={cardLogo} alt="Card" className="payment-logo" />
          <div>Card online</div>
        </div>
      </div>
      <div className="order-info">
        <button className="order-button">ORDER FOR PLN ...</button>
      </div>
    </div>
  );
};

export default Payment;
