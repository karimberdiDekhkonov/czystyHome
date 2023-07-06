import React, { useState } from 'react';
import './Time.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('0');

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const continueFunction = () =>{
    if(localStorage.getItem("selectedDay")!==null && selectedTime !== 0){
      alert("Please select a day and time !");
    }
  }

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
        <button className='sm-continue' onClick={continueFunction}>Continue</button>
      </div>
    </div>
  );
};

export default TimePicker;
