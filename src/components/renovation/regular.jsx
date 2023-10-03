import React, { useState, useRef } from "react";
import ContactDetails from "../contacts/contactDetails";
import Address from '../address/Address'
import CalendarComponent from '../daySelection/Calendar'
import Payment from "../payment/Payment";
import Section5 from "../section5/Section5";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

// import "./renovation.css";
// import { Link } from "react-router-dom";


const Renovation = () => {
  const l  = localStorage.getItem("lng");
  const t = useTranslation();
  const [area, setArea] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [officces, isOfficce] = useState(false);
  const roomCost = 6;
  const bathroomCost = 50;
  const office = 20

  const changeCounter = (type, increase) => {
    if (type === 'room') {
      if (increase) {
        setArea(area + 1);
        setTotalAmount(totalAmount + roomCost);
      } else {
        if (area !== 1) setTotalAmount(totalAmount - roomCost);
        setArea(Math.max(1, area - 1));
      }
    } else if (type === 'bathroom') {
      if (increase) {
        setBathrooms(bathrooms + 1);
        setTotalAmount(totalAmount + bathroomCost);
      } else {
        if (bathrooms !== 1) setTotalAmount(totalAmount - bathroomCost);
        setBathrooms(Math.max(1, bathrooms - 1));
      }
    }
  };

  localStorage.setItem("totalAmount", totalAmount)

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <section className="serviceSelection">
        <div className="ss-section1">
          <h1 className="ss-h1">{l===`pl`?`Usługi sprzątania pobudowlanego na terenie Warszawy`:`After builders cleaning services in Warsaw`}</h1>

          <form className="ss-office-cn">
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(false);
              setTotalAmount(totalAmount - office)
            }}
              className={officces == false ? `ss-isprivate ss-active` : `ss-isprivate`} style={{ height: "96px" }}>{l===`pl`?`Osoba`:`Individual`}</button>
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(true);
              setTotalAmount(totalAmount + office)
            }}
              className={officces == true ? `ss-isoffice ss-active` : `ss-isoffice`}>{l===`pl`?`Firma`:`Legal entity`}</button>
          </form>
          <div>
            <h1 style={{ opacity: ".2", }}>{l===`pl`?`MIESZKANIE PO REMONCIE`:`APARTMENT AFTER RENOVATION`}</h1>
          </div>
          <form className="ss-mega-rooms-cn">
            <div className="ss-rooms-cn">
              <button className="ss-dec" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", false);
              }}>-</button>
              <span className="ss-counters">{area}</span>
              <span className="ss-rooms">m^2</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", true);
              }}>+</button>
            </div>
            <div className="ss-rooms-cn">
              <button className="ss-dec" onClick={(e) => {
                e.preventDefault();
                changeCounter("bathroom", false);
              }}>-</button>
              <span className="ss-counters">{bathrooms}</span>
              <span className="ss-rooms">{l===`pl`?`okna`:`windows`}</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("bathroom", true);
              }}>+</button>
            </div>
          </form>
          <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
          {<div className="ss-info">{l===`pl`?`Sprzątanie mieszkania o `:`Apartment cleaning with `}{area} {l===`pl`?`powierzchni i`:`area and`} {bathrooms} {l===`pl`?`oknach, korytarz `:`windows,  corridor `}{totalAmount} zł</div>}

        </div>
        <CalendarComponent />
        <Address />
        <ContactDetails />
        <Payment />
        <Section5 />
        <Footer />
      </section>
    </>
  );
};

export default Renovation;
