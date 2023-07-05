// TimePicker.jsx

import React, { useState } from 'react';
import './Time.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('10:00');

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="time-picker-container">
      <h2>Time Picker</h2>
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
    </div>
  );
};

export default TimePicker;
