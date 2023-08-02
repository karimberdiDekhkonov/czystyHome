import React, { useState, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import TimePicker from "./Time";
import './Calendar.css'

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  console.log(selectedDay)
  

  return (
    <div className="time-picker-container">
      <hr className="hr"/>
      <h1 className='row-name'>CHOOSE A CONVENIENT DATE AND TIME FOR CLEANING</h1>
      <div className="ds-container">
      <div className="ds-hours">
        <Calendar 
          value={selectedDay}
          onChange={(newValue) => {
          setSelectedDay(newValue);
          localStorage.setItem(
              "selectedDay",
              newValue.day + "." + newValue.month + "." + newValue.year
            );
          }}
          minimumDate={utils().getToday()}
          shouldHighlightWeekends
        />
      </div>

      <div className="time-pc">
        <TimePicker/>
      </div>
      </div>
    </div>    
  );
};

export default App;