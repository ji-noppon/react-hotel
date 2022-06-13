import React from 'react'
import {Button, Card, Col,Row,Image, Container} from 'react-bootstrap'
import { GrLocation } from "react-icons/gr";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsLine } from "react-icons/bs";
type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
      <br />
      <h2>Contact</h2>
      <br />
      <Container>    
        <Row>
          <Col sm = {2}>
          </Col>
          <Col sm = {4}>
              <Card >
                <Card.Img variant="top"  
                          src="../src/images/admin.jpg"        
                          />
                <Card.Body>
                    <Card.Title>  Mr.Ameyuri Ringo</Card.Title>
                    <Card.Text>
                      <Row>
                        <Col>
                            <FcPhoneAndroid   style={{ fontSize: '2rem'}}/> 
                            <a href="tel:0955155210" style={{color: 'black'}}> 095-515-5210 </a> 
                        </Col>
                        <Col>
                            <BsLine style={{color: 'green', fontSize: '2rem'}} /> 
                            <a > @dminhotel</a> 
                        </Col>
                      </Row>

                    </Card.Text>   
                </Card.Body>
              </Card>
          </Col>

          <Col sm = {4}>
              <h3><GrLocation /> Address</h3>
              <p>4709 Shadowmar Drive Kenner,LA 70062</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Contact