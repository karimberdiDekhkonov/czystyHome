import React, { useState, useRef } from "react";
// import "./renovation.css";
// import { Link } from "react-router-dom";


const Renovation = () => {
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
    ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <>
      <section className="serviceSelection">
        <div className="ss-section1">
          <h1 className="ss-h1">After builders cleaning services in Warsaw</h1>
          
          <form className="ss-office-cn">
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(false);
              setTotalAmount(totalAmount - office)
            }}
              className={officces == false ? `ss-isprivate ss-active` : `ss-isprivate`} style={{height: "96px"}}>Individual</button>
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(true);
              setTotalAmount(totalAmount + office)
            }}
              className={officces == true ? `ss-isoffice ss-active` : `ss-isoffice`}>Legal entity</button>
          </form>
          <div>
            <h1  style={{opacity: ".2", }}>APARTMENT AFTER RENOVATION</h1>
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
              <span className="ss-rooms">windows</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("bathroom", true);
              }}>+</button>
            </div>
          </form>
          <button className="ss-calculate" ref={ref} onClick={handleClick}>Continue</button>
          {<div className="ss-info">Apartment cleaning with {area} area and {bathrooms} windows,  corridor {totalAmount} zł</div>}
          
        </div>
      </section>
    </>
  );
};

export default Renovation;
