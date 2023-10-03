import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="content">
                        <div className="footer__menu">
                            <div className="footer__menu-item">
                                <div className="title">
                                    <span>Czystyhome</span>
                                </div>
                                <div className="items">
                                    <Link to='/'>About</Link>
                                    <Link to='/'>Q&A</Link>
                                    <Link to='/'>Reviws</Link>
                                    <Link to='/'>Our services</Link>
                                    <Link to='/'>Discounts and promations</Link>
                                    <Link to='/'>What we clean</Link>
                                    <Link to='/'>Job vacacy</Link>
                                </div>
                            </div>
                            <div className="footer__menu-item">
                                <div className="title">
                                    <span>Services</span>
                                </div>
                                <div className="items">
                                    <div className="column">
                                        <Link to='/'>Apartment cleaning</Link>
                                        <Link to='/'>Cleaning after renovation</Link>
                                        <Link to='/'>Dry cleaning</Link>
                                        <Link to='/'>Window cleaning</Link>
                                        <Link to='/'>Apartment cleaning</Link>
                                        <Link to='/'>Office cleaning</Link>
                                        <Link to='/'>Kitchen cleaning</Link>
                                        <Link to='/'>Order constructor</Link>
                                    </div>
                                    <div className="column">
                                        <Link to='/'>Prices for our services</Link>
                                        <Link to='/'>Oven cleaning</Link>
                                        <Link to='/'>Dry cleaning sofa</Link>
                                        <Link to='/'>WarsaW</Link>
                                    </div>
                                    <Link to='/' className='all'>
                                        <span>our services</span>
                                        <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/all.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="footer__menu-item">
                                <div className="title">
                                    <span>Job</span>
                                </div>
                                <div className="items">
                                    <Link to='/'>Become cleaner</Link>
                                    <Link to='/'>Job vacancy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contacts">
                            <div className="contacts">
                                <Link target='_blank'>
                                    <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/map.svg" alt="" />
                                    <span>Szczęśliwicka 2 / 1A, 02-793 Warszawa, Polska</span>
                                </Link>
                                <Link to='/' target='_blank'>
                                    <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/email.svg" alt="" />
                                    <span>Info@czystyhome.pl</span>
                                </Link>
                                <Link target='_blank'>
                                    <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/phone.svg" alt="" />
                                    <span>+48 538 946 491</span>
                                </Link>
                            </div>
                            <div className="documents">
                                <Link to='/'>Public contract</Link>
                                <Link to='/'>Privacy policy</Link>
                                <Link to='/'>Cookies policy</Link>
                            </div>
                        </div>
                        <div className="copyright-payments">
                            <div className="copyright">
                                <p>Clean Whale Sp. z o.o., KRS 0001030507, NIP: 7011139395, REGON: 525038714</p>
                                <p>Warszawa, Łucka 18/2004, 00-845</p>
                            </div>
                            <div className="payments">
                                {/* <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-4.svg" alt="" /> */}
                                <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-5.svg" alt="" />
                                {/* <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-6.svg" alt="" /> */}
                                {/* <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-7.svg" alt="" /> */}
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-paypal" viewBox="0 0 16 16">
                                    <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"/>
                                  </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
