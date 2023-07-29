import React, { useState, useRef } from 'react';
import './Time.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('0');

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
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
