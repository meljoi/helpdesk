
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Calculator from '../calculator/Calculator';
import Note from '../notes/Note';
import Weather from '../weather/Weather';
import GoogleCal from '../calendar/GoogleCal'

const HomePage = ({handleLogOut}) =>{

  return(
    <div>
    <Container fluid>
    <div>

{/* Stack the columns on mobile by making one full-width and the other half-width */}

      <Row className="test">
        <Col xs={12} md={8}>
          <GoogleCal />
        </Col>
        <Col xs={6} md={4}>

          <Calculator />

        </Col>
      </Row>

      <Row className="test">
        <Col xs={12} md={8}>
          <Note />
        </Col>

        <Col xs={6} md={4}>
        <Weather />
        </Col>

      </Row>
      </div>
    </Container>




    </div>
  )
}


export default HomePage
