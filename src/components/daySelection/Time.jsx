import React, { useState, useRef } from 'react';
import './Time.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('0');

  const filter = () =>{
    if(localStorage.getItem("selectedDay")===null || localStorage.getItem("selectedTime")===null){
      alert("Please choose a convenient date and time for cleaning!")
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
        {Array.from({ length: 11 }, (_, index) => {
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
      <button className="ss-calculate" ref={ref} onClick={handleClick}>Continue</button>
      </div>
    </div>
  );
};

export default TimePicker;
