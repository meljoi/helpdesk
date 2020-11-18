import React, { useState } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Cal = ()=>{


const [selectedDay, setSelectedDay] = useState(null);
return (
  <Calendar
    value={selectedDay}
    onChange={setSelectedDay}
    shouldHighlightWeekends
    // style={{
    //
    //     border: '2px solid #E0CEC6',
    //     boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
    //     color: '#E0CEC6',
    //     outline: 'none',
    //   }}
  />
);

}


export default Cal
// const Calendar = ()=>{
// let [day]=useState('')
// for(let day = 1; day <= 31; day++){
//     console.log(day);
//   }
//   return(
//     <Container>
//     <div>
//     {day}-undefined
//     </div>
//     </Container>
//   )
// }
