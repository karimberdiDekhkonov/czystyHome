// Payment.jsx
import cashLogo from './cash.svg'
import cardLogo from './card.svg'
import React, { useState } from 'react';
import './Payment.css';
import axios from 'axios'; // Import axios for making HTTP requests
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap'; 


const Payment = () => {
  const [agreed, setAgreed] = useState(false);
  const [cash, setCash] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [codeInput, setCodeInput] = useState('');

  const setPayment = () => {
    if(cash===true) localStorage.setItem("type", "CASH");
    else localStorage.setItem("type", "CARD");
  }
  setPayment();

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };


    // Function to create a new user
    const createUser = async () => {
      const userData = {
        firstname: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        phoneNumber: "+48" + localStorage.getItem("number"),
      };
      try {
        const response = await axios.post("http://localhost:8090/api/auth/register", userData);
        // Save the userId returned from the response
        localStorage.setItem("userId", response.data.userId);
      } catch (error) {
        // Handle error if registration fails
        console.error("Error creating user:", error);
      }
    };
  
    // Function to create a new address
    const createAddress = async () => {
      const addressData = {
        userId: localStorage.getItem("userId"),
        city: localStorage.getItem("city"),
        street: localStorage.getItem("street"),
        houseNumber: localStorage.getItem("houseNumber"),
        apartmentNumber: localStorage.getItem("apartmentNumber"),
        cage: localStorage.getItem("cage"),
        floor: localStorage.getItem("floor"),
        intercomCode: localStorage.getItem("intercomCode"),
        zipcode: localStorage.getItem("zip"),
        additionalNote: "Hi", // You can change this value as needed
      };
      try {
        await axios.post("http://localhost:8090/api/czystyhome/v1/address/add", addressData);
      } catch (error) {
        // Handle error if address creation fails
        console.error("Error creating address:", error);
      }
    };
  
    // Function to create a new trip
    const createTrip = async () => {
      const tripData = {
        userId: localStorage.getItem("userId"),
        date: localStorage.getItem("selectedDay") + " " + localStorage.getItem("selectedTime"),
        totalCost: parseFloat(localStorage.getItem("totalAmount")),
        paymentType: localStorage.getItem("type"),
        paymentStatus: false,
        enabled: true,
      };
      try {
        await axios.post("http://localhost:8090/api/czystyhome/v1/trip/add", tripData);
      } catch (error) {
        // Handle error if trip creation fails
        console.error("Error creating trip:", error);
      }
    };
  
    // Function to handle the order completion
    const handleOrderComplete = () => {
      // Check if the user has accepted the agreement
      // if (!agreed) {
      //   alert("Please accept the agreement before completing the order.");
      //   return;
      // }
  
      // // Call the functions to create user, address, and trip
      // createUser();
      // createAddress();
      // createTrip();
      handleShow();
    };
  
    const handleSaveChanges = () => {
      // Check if the code is exactly 6 digits long
      if (codeInput.length === 6) {
        // Perform any additional actions you want with the code, e.g., submit to the backend
        console.log('Code entered:', codeInput);
  
        // Close the modal
        handleClose();
      } else {
        // Display an error message for an invalid code
        alert('Please enter a valid 6-digit code.');
      }
    };

    // Call setPayment() to set the initial payment method
    setPayment();

  return (
    <>
      <h1 className='row-name p-row-name'>CHOOSE PAYMENT METHOD</h1>
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
          <div>Cash</div>
        </button>
        <button  onClick={(e)=>{
          setPayment();
          e.preventDefault();
          setCash(false)}} 
          className={cash==false ? `payment-method payment-active`:`payment-method`}>
          <img src={cardLogo} alt="Card" className="payment-logo" />
          <div>Card</div>
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
        <button className="order-button" onClick={handleOrderComplete}>Complete the order</button>
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

    <div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <input
              className='code-input'
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default Payment;
