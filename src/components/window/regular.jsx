import React, { useState, useRef } from "react";



const Wondow = () => {
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
          <h1 className="ss-h1">Window cleaning services in Warsaw</h1>
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
              className={officces == true ? `ss-isoffice ss-active` : `ss-isoffice` } >Legal entity</button>
          </form>
          <h1 style={{opacity: ".2"}}>CHOOSE THE NUMBER OF WINDOWS</h1>
          <form className="ss-mega-rooms-cn">
            <div className="ss-rooms-cn">
              <button className="ss-dec" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", false);
              }}>-</button>
              <span className="ss-counters">{rooms}</span>
              <span className="ss-rooms">windows</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", true);
              }}>+</button>
            </div>
          </form>
          <button className="ss-calculate" ref={ref} onClick={handleClick}>Continue</button>
          {<div className="ss-info">Apartment cleaning with {rooms} windows corridor {totalAmount} zł</div>}
          
        </div>
      </section>
    </>
  );
};

export default Wondow;
