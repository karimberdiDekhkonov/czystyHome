import React from 'react';
import { useRef } from "react"
import './AddressForm.css';
import { useTranslation } from "react-i18next";


const AddressForm = () => {
  const l  = localStorage.getItem("lng");
  const ref = useRef(null);

  const filter = () =>{
    if(localStorage.getItem("street")===null){
      alert(l===`pl`?`Proszę podać nazwę ulicy!`:`Please enter your street name!`)
      return false;
    }
    if(localStorage.getItem("houseNumber")===null){
      alert(l===`pl`?`Proszę podać numer domu!`:`Please enter house number!`)
      return false;
    }
    if(localStorage.getItem("appNumber")===null){
      alert(l===`pl`?`Proszę podać numer mieszkania!`:`Please enter apartment number!`)
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
      <h1 className='row-name'>{l===`pl`?`WPISZ SWOJ ADRES`:`ENTER YOUR ADDRESS`}</h1>
      <div className="biggestDiv">
        <div className='as-line'>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Ulica`:`Street`}</label>
            <input onChange={(e) => { localStorage.setItem("street", e.target.value) }} className="nameInput" type="text" name="street" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Kod pocztowy (oe)`:`Zip code (optional)`}</label>
            <input onChange={(e) => { localStorage.setItem("zip", e.target.value) }} className="nameInput" type="text" name="zipcode" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`numer domu`:`House number`}</label>
            <input onChange={(e) => { localStorage.setItem("houseNumber", e.target.value) }} className="nameInput" type="text" name="housenumber" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Numer mieszkania`:`Apartment number`}</label>
            <input onChange={(e) => { localStorage.setItem("appNumber", e.target.value) }} className="nameInput" type="text" name="apartmentnumber" />
          </div>
        </div>
        <div className='as-line'>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Budynek (oe)`:`Building (optional)`}</label>
            <input onChange={(e) => { localStorage.setItem("buildingNumber", e.target.value) }} className="nameInput" type="text" name="building" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Numer klatki (oe)`:`Frame number (optional)`}</label>
            <input onChange={(e) => { localStorage.setItem("frame", e.target.value) }} className="nameInput" type="text" name="framenum" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Piętro (oe)`:`Floor (optional)`}</label>
            <input onChange={(e) => { localStorage.setItem("floor", e.target.value) }} className="nameInput" type="text" name="floor" />
          </div>
          <div className="form-row">
            <label className="nameText">{l===`pl`?`Kod od domofonu (oe)`:`Intercom code (optional)`}</label>
            <input onChange={(e) => { localStorage.setItem("intercome", e.target.value) }} className="nameInput" type="text" name="intercomcode" />
          </div>
        </div>
      </div>
      <div style={{textAlign: "center", marginTop: "46px"}}>
        <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
      </div>
      <hr className='hr' />
    </section>
  )

};

export default AddressForm;