import React from 'react'
import {useRef} from "react"
import "./contactDetails.css"
import { useTranslation } from "react-i18next";

export default function ContactDetails() {

    const l  = localStorage.getItem("lng");
    const ref = useRef(null);
  const t = useTranslation();


    const filter = () =>{
        if(localStorage.getItem("name")===null){
          alert(l===`pl`?`Proszę wpisać swoje imię!`:`Please enter your name!`)
          return false;
        }
        if(localStorage.getItem("name").length<3){
            alert(l===`pl`?`Minimalna długość nazwy to 3!`:`Minimum name length is 3!`)
            return false;
          }
        if(localStorage.getItem("number")===null){
          alert(l===`pl`?`Proszę podać swój numer telefonu!`:`Please enter your Phone number!`)
          return false;
        }
        return true;
      }

    const handleClick = () => {
        if(filter()) ref.current?.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <>
            <h1 className='row-name'>{l===`pl`?`DANE KONTAKTOWE`:`CONTACT DETAILS`}</h1>
            <div className='bigestDiv'>
                <div className='as-line'>
                    <div className="form-row">
                        <p className='nameText'>{l===`pl`?`Imię`:`Your name`}</p>
                        <input onChange={
                            (e) => {
                                localStorage.setItem("name", e.target.value)
                            }}
                            type="text"
                            maxlength="55"
                            class="rounded"
                            className='nameInput' />
                    </div>
                    <div className="form-row">
                        <p className='nameText'>{l===`pl`?`Telefon kontaktowy`:`Contact number`}</p>
                        <div className='number'>
                            <select className='selct'>
                                <option value="+48">+48</option>
                                {/* <option value="+380">+380</option>
                                <option value="+41">+41</option>
                                <option value="+49">+49</option> */}
                            </select>
                            <input
                                onChange={
                                    (e) => {
                                        localStorage.setItem("number", e.target.value)
                                    }}
                                type="number" class="rounded phone-number" id="order-phone" autocomplete="off" data-intl-tel-input-id="0" placeholder="512 345 678" />
                        </div>
                    </div>
                    <div className="form-row">
                        <p className='nameText'>{l===`pl`?`Adres e-mail (oe)`:`Email Address (ol)`}</p>
                        <input onChange={
                            (e) => {
                                localStorage.setItem("email", e.target.value)
                            }}
                            type="text"
                            className='emailInput' />
                    </div>
                    <div className="form-row">
                        <p className='nameText'>{l===`pl`?`dodatkowe info (oe)`:`Additional info (ol)`}</p>
                        <input type="text" className='additionInput' />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
                <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
            </div>
            <hr className='hr' />
    
        </>
    )
}
