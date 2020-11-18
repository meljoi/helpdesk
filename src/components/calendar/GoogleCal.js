import React from 'react';

const GoogleCal =()=>{

  return(

    // <h4 className="type calender-text"> calendar</h4>
    <div className="calendar-container shadow">
      <iframe src="https://calendar.google.com/calendar/embed?height=550&amp;wkst=1&amp;bgcolor=%23E0CEC6&amp;ctz=America%2FNew_York&amp;src=NHB0bW9pam5mOG5vbWtwMG9mNzhkc3IxbGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23red&amp;color=%23blue&amp;showTitle=0&amp;showPrint=0&amp;showTz=0"
      style={{border:'none', width:"100%", height:"550px", padding:"10px", frameborder:"0", scrolling:"no"}}></iframe>
    </div>

  )
}


export default GoogleCal
