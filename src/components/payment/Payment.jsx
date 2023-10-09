// Payment.jsx
import cashLogo from './cash.svg'
import cardLogo from './card.svg'
import React, { useState } from 'react';
import './Payment.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";



const Payment = () => {
  const [agreed, setAgreed] = useState(false);
  const [cash, setCash] = useState(true);
  const navigate = useNavigate()
  const l  = localStorage.getItem("lng");
  const t = useTranslation();



  const setPayment = () => {
    if(cash===true) localStorage.setItem("type", "CASH");
    else localStorage.setItem("type", "CARD");
  }
  setPayment();

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

    // Function to create a new trip
    const createTrip = async () => {
      const tripData = {
        name: localStorage.getItem("name"),
        phoneNumber: "+48" + localStorage.getItem("number"),
        cleaningInfo: localStorage.getItem("cleaningData"),
        totalPrice: localStorage.getItem("totalAmount"),
        street: localStorage.getItem("street"),
        houseNumber: localStorage.getItem("houseNumber"),
        apartmentNumber: localStorage.getItem("appNumber"),
        tripDateTime: localStorage.getItem("selectedDay") + "T"+localStorage.getItem("selectedTime")+":00+02:00",
        paymentType: localStorage.getItem("type"),
        lng: l==null?"en":l
      };
      console.log(tripData)
      try {
        const response = await axios.post("https://auspicious-color-production.up.railway.app/add", tripData);
        if(response.data===true){
          navigate("/success")
        }else{
          alert(l===`pl`?`Przepraszamy, ktoś już zarezerwował ten termin. Proszę wybrać inny termin.`:`Sorry, someone has already booked that time. Please choose another time.`)
        }
      } catch (error) {
        alert(l===`pl`?`Hmm, wygląda na to, że pominąłeś wprowadzenie niektórych wymaganych danych.`:`Hmm, it seems like you have missed entering some required data.`)
      
      }
    };

  
    // Function to handle the order completion
    const handleOrderComplete = () => {
      // Check if the user has accepted the agreement
      if (!agreed) {
        alert(l===`pl`?`Przed realizacją zamówienia prosimy o akceptację umowy.`:`Please accept the agreement before completing the order.`)
        return;
      }
      // Call the functions to create user, address, and trip
      createTrip();
    };

    // Call setPayment() to set the initial payment method
    setPayment();

  return (
    <>
      <h1 className='row-name p-row-name'>{l===`pl`?`WYBIERZ METODĘ PŁATNOŚCI`:`CHOOSE PAYMENT METHOD`}</h1>
      <section className='mega-payment-container'>
      <div className="payment-container">
      <div className="payment-header">
      </div>
      <div className="payment-methods">
        <button onClick={(e)=>{
          setPayment();
          e.preventDefault();
          setCash(true)}}
          className={cash==true ? `payment-method payment-active`:`payment-method`}>
          <img src={cashLogo} alt="Cash" className="payment-logo" />
          <div>{l===`pl`?`Gotówką`:`Cash`}</div>
        </button>
        <button  onClick={(e)=>{
          setPayment();
          e.preventDefault();
          setCash(false)}} 
          className={cash==false ? `payment-method payment-active`:`payment-method`}>
          <img src={cardLogo} alt="Card" className="payment-logo" />
          <div>{l===`pl`?`Kartą`:`Card`}</div>
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
            {l===`pl`?`Składając zamówienie zgadzam się z Regulaminem i Polityką Prywatności`:`By placing an order, I agree with Regulations and Privacy Policy`}
          </label>
        </div>
        <button className="order-button" onClick={handleOrderComplete}>{l===`pl`?`Zamawiam`:`Complete the order`}</button>
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
    </>
  );
};

export default Payment;
