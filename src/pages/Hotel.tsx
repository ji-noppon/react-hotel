import React from 'react'
import { Table ,Container,Image,Row,Col,Button} from 'react-bootstrap'

type Props = {}

const Hotel = (props: Props) => {
  return (
    <div >
      <Container>
        <br />
        <h2>Hotel</h2>
        <br />
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
              <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Picture</th>
                  <th>Price</th>
                  <th>Review</th>
                  <th>Book In</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><Image src='https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_960_720.jpg' 
                            style={{width:'100%' , height:'15rem' ,maxWidth:'25rem'}}>
                      </Image></td>
                  <td>150/day</td>
                  <td>Good</td>
                  <td><Button variant="success">Click</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><Image src='https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_960_720.jpg' 
                            style={{width:'100%' , height:'15rem' ,maxWidth:'25rem'}}>
                      </Image></td>
                  <td>250/day</td>
                  <td>Good</td>
                  <td><Button variant="success">Click</Button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><Image src='https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg' 
                            style={{width:'100%' , height:'15rem' ,maxWidth:'25rem'}}>
                      </Image></td>
                  <td>300/day</td>
                  <td>Good</td>
                  <td><Button variant="success">Click</Button></td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hotel