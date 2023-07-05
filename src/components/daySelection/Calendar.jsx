import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import TimePicker from "./Time";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="d-flex">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={utils().getToday()}
        shouldHighlightWeekends
      />

      <TimePicker/>
    </div>
  );
};

export default App;
