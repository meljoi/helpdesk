import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Weather = ()=>{
  const [temp, setTemp]=useState("");
  const [city, setCity]=useState('');

  // const userLocation =()=>{
  //   if ("geolocation" in navigator) {
  //      console.log("Available");
  //    } else {
  //      console.log("Not Available");
  //    }
  // }
  // getting weather using the browser location
  useEffect(()=>{
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)
  const getTemp=fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=26cfc1a8ddc93ec22af584c536754d52&units=imperial`)


   .then((response)=> {return response.json()})
   .then((jsonData)=>{
     setTemp(jsonData.current.temp);
     setCity(jsonData.timezone);
   })
   .catch((error)=>{console.log(error)})
});





},[]);

  return(
// to get the data from the call
    <div className="weather-background shadow">
    <h4 className="type weather-text"> today's weather is:</h4>
    <Container fluid >

      <Row>

          <Col>
          <h3 className="type weather-output">{city} {temp}</h3>
          </Col>


      </Row>

    </Container>
    </div>
  )


}


export default Weather
