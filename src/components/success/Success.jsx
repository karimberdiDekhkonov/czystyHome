import React, { useState } from 'react'
import gifImage from './successGif.gif';
import './Success.css'
import { Container } from 'react-bootstrap';

export default function Success() {
  localStorage.clear();
  return (
    <Container className='success-container'>
        <img className='gif' src={gifImage} alt="gif" />
        <h1>You have successfully booked!</h1>
        
    </Container>
  
  )
}
