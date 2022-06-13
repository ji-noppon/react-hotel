import React from 'react'
import { Card, Button, Carousel, Image , Container, Col, Row} from 'react-bootstrap'
import User from './Hotel'
import logo from '../images/galaxy.jpg'; 
type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg' >
        <Container>
            <br />
            <h2>Welcome to Queue</h2>
            <br />
        <Row >
            <Col md={4}>
              <Card >
                <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" />
                <Card.Body>
                    <Card.Title>Queue</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card >
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" />
                <Card.Body>
                    <Card.Title>Hotel</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" />
                <Card.Body>
                    <Card.Title>Review</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
        </Container>
         
    </div>
  )
}

export default Home