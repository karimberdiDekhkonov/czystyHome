// Payment.jsx
import cashLogo from './cash.svg'
import cardLogo from './card.svg'
import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [agreed, setAgreed] = useState(false);
  const [cash, setCash] = useState(true);

  const setPayment = () => {
    if(cash===true) localStorage.setItem("type", "CASH");
    else localStorage.setItem("type", "CARD");
  }
  setPayment();

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  return (
    <section className='mega-payment-container'>
       <div className="payment-container">
      <div className="payment-header">
        <h1 className='row-name p-row-name'>CHOOSE PAYMENT METHOD</h1>
      </div>
      <div className="payment-methods">
        <button onClick={(e)=>{
          setPayment();
          e.preventDefault();
          setCash(true)}}
          className={cash==true ? `payment-method payment-active`:`payment-method`}>
          <img src={cashLogo} alt="Cash" className="payment-logo" />
          <div>Cash</div>
        </button>
        <button  onClick={(e)=>{
          setPayment();
          e.preventDefault();
          setCash(false)}} 
          className={cash==false ? `payment-method payment-active`:`payment-method`}>
          <img src={cardLogo} alt="Card" className="payment-logo" />
          <div>Card online</div>
        </button>
      </div>
      <div className="order-info">
      <div className="agreement-container">
          <input
            type="checkbox"
            id="agreement-checkbox"
            checked={agreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agreement-checkbox">
            By placing an order, I agree with Regulations and Privacy Policy
          </label>
        </div>
        <button className="order-button">Complete the order</button>
      </div>
    </div>
      <div className='left-payment-container'>
        <div> <span className='p-data'>Name:</span> {localStorage.getItem("name")}</div>
        <div><span className='p-data'>Phone number:</span> +48 {localStorage.getItem("number")}</div>
        <div><span className='p-data'>Address:</span> {localStorage.getItem("street")} {localStorage.getItem("zip")}</div>
        <div><span className='p-data'>Trip date:</span> {localStorage.getItem("selectedDay") + " " + localStorage.getItem("selectedTime")}</div>
        <div><span className='p-data'>Payment type:</span> {localStorage.getItem("type")}</div>
        <div><span className='p-data'>Total amount:</span> {localStorage.getItem("totalAmount")} PLN</div>
      </div>
    </section>
  );
};

export default Payment;
