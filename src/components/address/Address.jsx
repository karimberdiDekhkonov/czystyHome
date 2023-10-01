import React from 'react';
import { useRef } from "react"
import './AddressForm.css';

const AddressForm = () => {

  const ref = useRef(null);

  const filter = () =>{
    if(localStorage.getItem("street")===null){
      alert("Please enter your street name!")
      return false;
    }
    if(localStorage.getItem("zip")===null){
      alert("Please enter the zip code as `00-000` format!")
      return false;
    }
    if(localStorage.getItem("zip").length!==6){
      alert("Please enter the zip code as `00-000` format!")
      return false;
    }
    if(localStorage.getItem("houseNumber")===null){
      alert("Please enter house number!")
      return false;
    }
    if(localStorage.getItem("appNumber")===null){
      alert("Please enter apartment number!")
      return false;
    }
    return true;
  }

  const handleClick = () => {
    if(filter()) ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <section>
      <hr className='hr' />
      <h1 className='row-name'>ENTER YOUR ADDRESS</h1>
      <div className="biggestDiv">
        <div className='as-line'>
          <div className="form-row">
            <label className="nameText">Street</label>
            <input onChange={(e) => { localStorage.setItem("street", e.target.value) }} className="nameInput" type="text" name="street" />
          </div>
          <div className="form-row">
            <label className="nameText">Zip code (optional)</label>
            <input onChange={(e) => { localStorage.setItem("zip", e.target.value) }} className="nameInput" type="text" name="zipcode" />
          </div>
          <div className="form-row">
            <label className="nameText">House number</label>
            <input onChange={(e) => { localStorage.setItem("houseNumber", e.target.value) }} className="nameInput" type="text" name="housenumber" />
          </div>
          <div className="form-row">
            <label className="nameText">Apartment number</label>
            <input onChange={(e) => { localStorage.setItem("appNumber", e.target.value) }} className="nameInput" type="text" name="apartmentnumber" />
          </div>
        </div>
        <div className='as-line'>
          <div className="form-row">
            <label className="nameText">Building (optional)</label>
            <input onChange={(e) => { localStorage.setItem("buildingNumber", e.target.value) }} className="nameInput" type="text" name="building" />
          </div>
          <div className="form-row">
            <label className="nameText">Frame number (optional)</label>
            <input onChange={(e) => { localStorage.setItem("frame", e.target.value) }} className="nameInput" type="text" name="framenum" />
          </div>
          <div className="form-row">
            <label className="nameText">Floor (optional)</label>
            <input onChange={(e) => { localStorage.setItem("floor", e.target.value) }} className="nameInput" type="text" name="floor" />
          </div>
          <div className="form-row">
            <label className="nameText">Intercom code (optional)</label>
            <input onChange={(e) => { localStorage.setItem("intercome", e.target.value) }} className="nameInput" type="text" name="intercomcode" />
          </div>
        </div>
      </div>
      <div style={{textAlign: "center", marginTop: "46px"}}>
        <button className="ss-calculate" ref={ref} onClick={handleClick}>Continue</button>
      </div>
      <hr className='hr' />
    </section>
  )

};

export default AddressForm;