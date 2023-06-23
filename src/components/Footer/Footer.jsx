import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <a href="/"><img src="https://cleanwhale.pl/assets/frontend/images/icons/footer-logo.svg" alt="" /></a>
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
                                    <span>Warszawa, Łucka 18/2004, 00-845</span>
                                </Link>
                                <Link to='/' target='_blank'>
                                    <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/email.svg" alt="" />
                                    <span>Info@czystyhome.pl</span>
                                </Link>
                                <Link target='_blank'>
                                    <img src="https://cleanwhale.pl/assets/frontend/images/icons/footer/phone.svg" alt="" />
                                    <span>+48 795 029 169</span>
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
                                <p>Clean Whale Sp. z o.o., KRS 0000868230, NIP: 6751738063, REGON: 38745511400000</p>
                                <p>Warszawa, Łucka 18/2004, 00-845</p>
                            </div>
                            <div className="payments">
                                <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-4.svg" alt="" />
                                <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-5.svg" alt="" />
                                <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-6.svg" alt="" />
                                <img src="https://cleanwhale.pl/assets/frontend/images/icons/payments/payments-7.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
