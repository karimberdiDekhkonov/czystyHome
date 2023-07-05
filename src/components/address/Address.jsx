import React from 'react';
import './AddressForm.css';

const AddressForm = () => (
  <div className="biggestDiv">
    <hr className='hr' />
    <h1 className='row-name'>ENTER YOUR ADDRESS</h1>
    <div className='as-line'>
    <div className="form-row">
      <label className="nameText">Street</label>
      <input className="nameInput" type="text" name="street" />
    </div>
    <div className="form-row">
      <label className="nameText">Zip code</label>
      <input className="nameInput" type="text" name="zipcode" />
    </div>
    <div className="form-row">
      <label className="nameText">House number</label>
      <input className="nameInput" type="text" name="housenumber" />
    </div>
    <div className="form-row">
      <label className="nameText">Apartment number</label>
      <input className="nameInput" type="text" name="apartmentnumber" />
    </div>
    </div>
    <div className='as-line'>
    <div className="form-row">
      <label className="nameText">Building</label>
      <input className="nameInput" type="text" name="building" />
    </div>
    <div className="form-row">
      <label className="nameText">Frame number</label>
      <input className="nameInput" type="text" name="framenum" />
    </div>
    <div className="form-row">
      <label className="nameText">Floor</label>
      <input className="nameInput" type="text" name="floor" />
    </div>
    <div className="form-row">
      <label className="nameText">The intercom code</label>
      <input className="nameInput" type="text" name="intercomcode" />
    </div>
    </div>
    <hr className='hr'/>
  </div>
);

export default AddressForm;
