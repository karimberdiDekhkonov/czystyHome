import React, { useState, useRef } from 'react';
import './Time.css';
import { useTranslation } from "react-i18next";
import axios from 'axios';


const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('0');
  const [bookedHours, setBookedHours] = useState(0);
  const l  = localStorage.getItem("lng");
  const t = useTranslation();
  var date = new Date();
  var today = parseInt(date.getDate()) === parseInt(localStorage.getItem("day"));
  // var hoursList = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // var lastList = [];
  // var j = 0;
  // var ll = 0;

  // const getHours = async () => {
  //   setStartHour();
  //   try {
  //     const response = await axios.get(`http://localhost:8080/getHours?date=${localStorage.getItem("selectedDay")}`);
  //     setBookedHours(response.data);
  //   } catch (error) {
  //     // alert(l===`pl`?`Hmm, wygląda na to, że pominąłeś wprowadzenie niektórych wymaganych danych.`:`Hmm, it seems like you have missed entering some required data.`)
    
  //   }
  // };

  // function setStartHour(){
  //   for(var i = 0; i< hoursList.length;i++){
  //     if(hoursList[i] > date.getHours()){
  //       hoursList[j] = hoursList[i];
  //       j++;
  //     }
  //   }
  // }

  // function removeBookedHours(){
  //   getHours();
  //   for(var i = 0; i< j;i++){
  //     for(var k = 0; k< bookedHours.length;k++){
  //       if(hoursList[i] > bookedHours[k]){
  //         lastList[ll] = hoursList[i];
  //         ll++
  //       }
  //     }
  //   }
  // }

  // removeBookedHours();

  const filter = () =>{
    if(localStorage.getItem("selectedDay")===null || localStorage.getItem("selectedTime")===null){
      alert(l===`pl`?`Proszę wybrać dogodny termin i godzinę sprzątania!`:`Please choose a convenient date and time for cleaning!`)
      return false;
    }
    return true;
  }
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    localStorage.setItem("selectedTime", time);
  };

  const ref = useRef(null);
  const handleClick = () => {
    if(filter()) ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="time-picker-container">
      <div className="time-buttons">
        {today?Array.from({ length: 20 - date.getHours() }, (_, index) => {
          const time = `${index + date.getHours()+1}:00`;
          const isSelected = selectedTime === time;
          return (
            <button
              key={index}
              className={`time-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          );
        }):
        Array.from({ length: 11 }, (_, index) => {
          const time = `${index + 10}:00`;
          const isSelected = selectedTime === time;
          return (
            <button
              key={index}
              className={`time-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
      <div className='tm-btn-cn'>
      <button className="ss-calculate" ref={ref} onClick={handleClick}>{l===`pl`?`Kontynuować`:`Continue`}</button>
      </div>
    </div>
  );
};

export default TimePicker;
