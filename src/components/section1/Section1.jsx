import React, { useState, useRef } from "react";
import ContactDetails from "../contacts/contactDetails";
import Address from '../address/Address'
import CalendarComponent from '../daySelection/Calendar'
import Payment from "../payment/Payment";
import Section5 from "../section5/Section5";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";




const CleaningCalculator = () => {
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);
  const [totalAmount, setTotalAmount] = useState(152);
  const [officces, isOfficce] = useState(false);
  const roomCost = 46; // cost per room
  const bathroomCost = 50; // cost per bathroom
  const kitchenCost = 56; // cost per bathroom
  const office = 50;
  const l  = localStorage.getItem("lng");
  const t = useTranslation();

  useEffect(() => {
    // Send a PUT request when the component is mounted
    axios.put('https://auspicious-color-production.up.railway.app/counter/visit')
      .then(response => {
        // Handle the response if needed
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error making PUT request', error);
      });
  }, []);



  const changeCounter = (type, increase) => {

    if (type === 'room') {
      if (increase) {
        setRooms(rooms + 1);
        setTotalAmount(totalAmount + roomCost);
      } else {
        if (rooms !== 1) setTotalAmount(totalAmount - roomCost);
        setRooms(Math.max(1, rooms - 1));
      }
    } else if (type === 'bathroom') {
      if (increase) {
        setBathrooms(bathrooms + 1);
        setTotalAmount(totalAmount + bathroomCost);
      } else {
        if (bathrooms !== 1) setTotalAmount(totalAmount - bathroomCost);
        setBathrooms(Math.max(1, bathrooms - 1));
      }
    } else if (type === 'kitchen') {
      if (increase) {
        setKitchens(kitchens + 1);
        setTotalAmount(totalAmount + kitchenCost);
      } else {
        if (kitchens !== 1) setTotalAmount(totalAmount - kitchenCost);
        setKitchens(Math.max(1, kitchens - 1));
      }
    }
  };

  localStorage.setItem("totalAmount", totalAmount)
  localStorage.setItem("cleaningData", " room: " + rooms+
  " bathroom: "+bathrooms+
  " kitchen: " +kitchens)
  

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <section className="serviceSelection">
        <div className="ss-section1">
          <h1 className="ss-h1">{l===`pl`?`Usługi Sprzątające w Warszawie`:`Cleaning Services in Warsaw`}</h1>
          <div>
            <h2 className="ss-h2">{l===`pl`?`Nasi pracownicy posiadają wszystkie niezbędne środki czystości, zapasy`:`Our employees have all the necessary cleaning products, inventory`}</h2>
          </div>
          <form className="ss-office-cn">
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(false);
              setTotalAmount(totalAmount - office)
            }}
              className={officces == false ? `ss-isprivate ss-active` : `ss-isprivate`}>{l===`pl`?`Osoba`:`Individual`}</button>
            <button onClick={(e) => {
              e.preventDefault();
              isOfficce(true);
              setTotalAmount(totalAmount + office)
            }
            }
              onDoubleClick={(e) => {
                e.preventDefault();
                isOfficce(true);
                setTotalAmount(totalAmount + 0)
              }
              }
              className={officces == true ? `ss-isoffice ss-active` : `ss-isoffice`}>{l===`pl`?`Firma`:`Office`}</button>
          </form>
          <form className="ss-mega-rooms-cn">
            <div className="ss-rooms-cn">
              <button className="ss-dec" onClick={(e) => {
                e.preventDefault();
                changeCounter("room", false);
              }}>-</button>
              <span className="ss-counters">{rooms}</span>
              <span className="ss-rooms">{l===`pl`?`pokój`:`room`}</span>
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
              <span className="ss-rooms">{l===`pl`?`łazienka`:`bathroom`}</span>
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
              <span className="ss-rooms">{l===`pl`?`kuchnia`:`kitchen`}</span>
              <button className="ss-inc" onClick={(e) => {
                e.preventDefault();
                changeCounter("kitchen", true);
              }}>+</button>
            </div>
          </form>
          <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
          {<div className="ss-info">{l===`pl`?`Sprzątanie mieszkania z`:`Apartment cleaning with`} {rooms} {l===`pl`?`pokojem i`:`room and`} {bathrooms} {l===`pl`?`łazienką`:`bathroom`}, {kitchens} {l===`pl`?`kuchnią, korytarzem`:` kitchen, corridor`} {totalAmount} zł</div>}

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

export default CleaningCalculator;
