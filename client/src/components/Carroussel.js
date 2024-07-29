import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Carroussel() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
<img style={{height:"500px",width:"700px"}} src='https://stylegirlfriend.com/wp-content/uploads/2022/04/city-casual-date-outfit.jpg' alt=''/>
      <Carousel.Caption>
        <h3>Men's Fashion Gen Ai</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
     <img style={{height:"500px",width:"700px"}} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695308610-727-650c5b2bb0e12.jpg?crop=1xw:1xh;center,top&resize=980:*' alt=''/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:"500px",width:"700px"}} src='https://cdn.thecoolist.com/wp-content/uploads/2017/08/How-to-dress-for-your-body-type.jpg' alt=''/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carroussel;
