import React, { useState, useRef } from "react";
import ContactDetails from "../contacts/contactDetails";
import Address from '../address/Address'
import CalendarComponent from '../daySelection/Calendar'
import Payment from "../payment/Payment";
import Section5 from "../section5/Section5";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";



const Wondow = () => {
  const l  = localStorage.getItem("lng");
  const t = useTranslation();
  const [rooms, setRooms] = useState(5);
  const [totalAmount, setTotalAmount] = useState(150);
  const [officces, isOfficce] = useState(false);
  const roomCost = 30; // cost per room
  const office = 34.5;

  const changeCounter = (type, increase) => {
    if (type === 'room') {
      if (increase) {
        setRooms(rooms + 1);
        setTotalAmount(totalAmount + roomCost);
      } else {
        if (rooms !== 1) setTotalAmount(totalAmount - roomCost);
        setRooms(Math.max(1, rooms - 1));
      }
    }
  };

  localStorage.setItem("totalAmount", totalAmount)

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <>
      <section className="serviceSelection">
        <div className="ss-section1">
          <h1 className="ss-h1"></h1>
          <h1 className="ss-h1">{l===`pl`?`Mycie okien w Warszawie`:`Window cleaning services in Warsaw`}</h1>
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
          <h1 style={{opacity: ".2"}}>{l===`pl`?`WYBIERZ ILOŚĆ OKN`:`CHOOSE THE NUMBER OF WINDOWS`}</h1>
          <form className="ss-mega-rooms-cn">
            <div className="ss-rooms-cn">
              <button className="ss-dec" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", false);
              }}>-</button>
              <span className="ss-counters">{rooms}</span>
              <span className="ss-rooms">{l===`pl`?`okna`:`windows`}</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", true);
              }}>+</button>
            </div>
          </form>
          <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
          {<div className="ss-info">{l===`pl`?`Sprzątanie mieszkania z `:`Apartment cleaning with `}{rooms}{l===`pl`?` oknami w korytarzu`:` windows corridor `}{totalAmount} zł</div>}
          
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

export default Wondow;
