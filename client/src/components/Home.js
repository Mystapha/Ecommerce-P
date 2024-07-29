import React from 'react'
import Carroussel from './Carroussel'
import Card from 'react-bootstrap/Card';
import Cardhome from './Cardhome';

function Home() {
  return (
    <>
    <div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",marginTop:"50px",margin:"20px"}}>
      <div style={{display:"grid",placeItems:"center"}}>
      <Card style={{width:"80%"}}> 
      <Card.Header style={{fontSize:"20px",backgroundColor:"#bcbcdd",color:"white",fontWeight:"700"}}>OUR Surprise !!!</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{backgroundColor:"#fdfdea"}}>
          <p>
            {' '}
            Today's savvy online shoppers look for certain basics in every product description. Let's examine these "bare minimums" and see how some of the best-selling brands are using them.{' '}
          </p>
          <br/>
          <footer className="blockquote-footer">
            LOOK FOR <cite title="Source Title">Product Item Dream</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      </div>
      <Carroussel/>
      </div>
      <div>
      <Cardhome/>
      </div>
    </div>
    </>
  )
}

export default Home;
