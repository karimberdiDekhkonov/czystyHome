import React from 'react';
import './AddressForm.css';

const AddressForm = () => (
  <section>
   <hr className='hr'/>
   <h1 className='row-name'>ENTER YOUR ADDRESS</h1>
   <div className="biggestDiv">
    <div className='as-line'>
    <div className="form-row">
      <label className="nameText">Street</label>
      <input onChange={(e)=>{localStorage.setItem("street", e.target.value)}}  className="nameInput" type="text" name="street" />
    </div>
    <div className="form-row">
      <label className="nameText">Zip code</label>
      <input onChange={(e)=>{localStorage.setItem("zip", e.target.value)}} className="nameInput" type="text" name="zipcode" />
    </div>
    <div className="form-row">
      <label className="nameText">House number</label>
      <input onChange={(e)=>{localStorage.setItem("houseNumber", e.target.value)}} className="nameInput" type="text" name="housenumber" />
    </div>
    <div className="form-row">
      <label className="nameText">Apartment number</label>
      <input onChange={(e)=>{localStorage.setItem("appNumber", e.target.value)}}className="nameInput" type="text" name="apartmentnumber" />
    </div>
    </div>
    <div className='as-line'>
    <div className="form-row">
      <label className="nameText">Building</label>
      <input onChange={(e)=>{localStorage.setItem("buildingNumber", e.target.value)}} className="nameInput" type="text" name="building" />
    </div>
    <div className="form-row">
      <label className="nameText">Frame number</label>
      <input onChange={(e)=>{localStorage.setItem("frame", e.target.value)}} className="nameInput" type="text" name="framenum" />
    </div>
    <div className="form-row">
      <label className="nameText">Floor</label>
      <input onChange={(e)=>{localStorage.setItem("floor", e.target.value)}} className="nameInput" type="text" name="floor" />
    </div>
    <div className="form-row">
      <label className="nameText">The intercom code</label>
      <input onChange={(e)=>{localStorage.setItem("intercome", e.target.value)}} className="nameInput" type="text" name="intercomcode" />
    </div>
    </div>
  </div>
  <hr className='hr'/>
  </section>
 
);

export default AddressForm;
