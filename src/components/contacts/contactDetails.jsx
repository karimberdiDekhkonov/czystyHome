import React from 'react'
import {useRef} from "react"
import "./contactDetails.css"

export default function ContactDetails() {

    const ref = useRef(null);

    const filter = () =>{
        if(localStorage.getItem("name")===null){
          alert("Please enter your name!")
          return false;
        }
        if(localStorage.getItem("name").length<3){
            alert("Minimum name length is 3!")
            return false;
          }
        if(localStorage.getItem("number")===null){
          alert("Please enter your Phone number!")
          return false;
        }
        if(localStorage.getItem("email")===null){
          alert("Please enter your email address!")
          return false;
        }
        if(!localStorage.getItem("email").includes("@")){
            alert("email must include @!")
            return false;
        }
        return true;
      }

    const handleClick = () => {
        if(filter()) ref.current?.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <>
            <h1 className='row-name'>CONTACT DETAILS</h1>
            <div className='bigestDiv'>
                <div className='as-line'>
                    <div className="form-row">
                        <p className='nameText'>Your name</p>
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
                        <p className='nameText'>Contact number</p>
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
                        <p className='nameText'>Email Address</p>
                        <input onChange={
                            (e) => {
                                localStorage.setItem("email", e.target.value)
                            }}
                            type="text"
                            className='emailInput' />
                    </div>
                    <div className="form-row">
                        <p className='nameText'>Additional information</p>
                        <input type="text" className='additionInput' />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
                <button className="ss-calculate" ref={ref} onClick={handleClick}>Continue</button>
            </div>
            <hr className='hr' />

        </>
    )
}
