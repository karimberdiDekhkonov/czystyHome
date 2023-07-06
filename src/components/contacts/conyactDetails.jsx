import React from 'react'
import "./contactDetails.css"

export default function ContactDetails() {
    return (
        <>
            <div className='bigestDiv'>
            <h1 className='row-name'>CONTACT DETAILS</h1>
                <div className='bigDiv'>
                    <div>
                        <p className='nameText'>Your name</p>
                        <input type="text" maxlength="255" class="rounded" className='nameInput' />
                    </div>
                    <div>
                        <p className='contactText'>Contact number</p>
                        <div className='number'>
                            <select className='selct'>
                                <option value="+45">+48</option>
                                <option value="+380">+380</option>
                                <option value="+41">+41</option>
                                <option value="+49">+49</option>
                            </select>
                            <input type="tel" class="rounded phone-number" id="order-phone" autocomplete="off" data-intl-tel-input-id="0" placeholder="512 345 678" />
                        </div>
                    </div>
                    <div>
                        <p className='emailText'>Email Address</p>
                        <input type="text" className='emailInput' />
                    </div>
                </div>
                <div>
                    <p className='additionText'>Additional order information</p>
                    <input type="text" className='additionInput' />
                </div>
                <hr className='hr' />
            </div>
        </>
    )
}
