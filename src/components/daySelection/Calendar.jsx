import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import TimePicker from "./Time";
import './Calendar.css'
import { useTranslation } from "react-i18next";


const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const l  = localStorage.getItem("lng");
  const t = useTranslation();



  

  return (
    <div className="time-picker-container">
      <hr className="hr"/>
      <h1 className='row-name'>{l===`pl`?`WYBIERZ DOGODNY TERMIN I GODZINĘ SPRZĄTANIA`:`CHOOSE A CONVENIENT DATE AND TIME FOR CLEANING`}</h1>
      <div className="ds-container">
      <div className="ds-hours">
        <Calendar 
          value={selectedDay}
          onChange={(newValue) => {
          setSelectedDay(newValue);
          localStorage.setItem("selectedDay", newValue.year+ "-" + newValue.month + "-" + newValue.day);
          localStorage.setItem("day", newValue.day);
          if(newValue.month<10) localStorage.setItem("selectedDay", newValue.year+ "-0" + newValue.month + "-" + newValue.day);
          if(newValue.day<10) localStorage.setItem("selectedDay", newValue.year+ "-" + newValue.month + "-0" + newValue.day);
          if(newValue.month<10&&newValue.day<10) localStorage.setItem("selectedDay", newValue.year+ "-0" + newValue.month + "-0" + newValue.day);
          
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