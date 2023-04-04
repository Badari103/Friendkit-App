import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Title from '../friends/Title';
import "../../../../css/nav/calender.css";


const MyCalendar=()=> {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Title value={"Events"}/>
      <Calendar className="calender"
        onChange={setDate}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;