import React, { useState } from "react";
import "./Section1.css";


const CleaningCalculator = () => {
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);
  const [totalAmount, setTotalAmount] = useState(151.7);
  const [officces, isOfficce] = useState(false);

  const changeCounter = (type, increase) => {
    if (type === 'room') {
      if (increase) {
        setRooms(rooms + 1);
      } else {
        setRooms(Math.max(1, rooms - 1));
      }
    } else if (type === 'bathroom') {
      if (increase) {
        setBathrooms(bathrooms + 1);
      } else {
        setBathrooms(Math.max(1, bathrooms - 1));
      }
    } else if (type === 'kitchen') {
      if (increase) {
        setKitchens(kitchens + 1);
      } else {
        setKitchens(Math.max(1, kitchens - 1));
      }
    }
  };
  
  
  const calculateTotalAmount = () => {
    const roomCost = 45.90; // cost per room
    const bathroomCost = 49.90; // cost per bathroom
    const kitchenCost = 55.90; // cost per bathroom
    const office = 50;

    const calculatedAmount = rooms * roomCost + bathrooms * bathroomCost + kitchens * kitchenCost;
    if(isOfficce==true){
        calculatedAmount = calculatedAmount + office;
    }
    setTotalAmount(calculatedAmount);
  };

  return (
    <section className="serviceSelection" style={{ height: "100vh", width: "100%" }}>
      <h1 className="ss-h1">Cleaning Services in Warsaw</h1>
      <h2 className="ss-h2">The service includes a kitchen, bathroom, rooms and a corridor/hall</h2>
      <form className="ss-office-cn">
        <button onClick={(e)=>{
          e.preventDefault();
          isOfficce(false)}} 
          className={officces==false ? `ss-isprivate ss-active`:`ss-isprivate`}>Individual</button>
        <button onClick={(e)=>{
          e.preventDefault();
          isOfficce(true)}}
          className={officces==true ? `ss-isoffice ss-active`:`ss-isoffice`}>Office</button>
      </form>
      <form className="ss-mega-rooms-cn">
        <div className="ss-rooms-cn">
            <button className="ss-dec" onClick={(e) => {
               e.preventDefault();
               changeCounter("room", false);
            }}>-</button>
            <span className="ss-counters">{rooms}</span>
            <span className="ss-rooms">room</span>
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
            <span className="ss-rooms">bathroom</span>
            <button className="ss-inc" onClick={(e) => {
               e.preventDefault();
               changeCounter("bathroom", true);
            }}>+</button>
        </div>
        <div className="ss-rooms-cn">
            <button className="ss-dec" onClick={(e) => {
               e.preventDefault();
               changeCounter("kitchen", false);
            }}>-</button>
            <span className="ss-counters">{kitchens}</span>
            <span className="ss-rooms">kitchen</span>
            <button className="ss-inc" onClick={(e) => {
               e.preventDefault();
               changeCounter("kitchen", true);
            }}>+</button>
        </div>
      </form>
      <button className="ss-calculate" onClick={calculateTotalAmount}>
        Calculate the cost
      </button>
    </section>
  );
};

export default CleaningCalculator;
