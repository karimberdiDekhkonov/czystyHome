import React from 'react'
import "./contactDetails.css"

export default function ContactDetails() {
    return (
        <>
            <h1 className='row-name'>CONTACT DETAILS</h1>
            <div className='bigestDiv'>
                <div className='as-line'>
                    <div className="form-row">
                        <p className='nameText'>Your name</p>
                        <input onChange={
                            (e)=>{
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
                                <option value="+45">+48</option>
                                {/* <option value="+380">+380</option>
                                <option value="+41">+41</option>
                                <option value="+49">+49</option> */}
                            </select>
                            <input
                                onChange={
                                (e)=>{
                                    localStorage.setItem("number", e.target.value)
                                }} 
                             type="tel" class="rounded phone-number" id="order-phone" autocomplete="off" data-intl-tel-input-id="0" placeholder="512 345 678" />
                        </div>
                    </div>
                    <div className="form-row">
                        <p className='nameText'>Email Address</p>
                        <input onChange={
                                (e)=>{
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
            <hr className='hr' />

        </>
    )
}
