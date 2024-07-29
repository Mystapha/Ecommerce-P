import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Editproduct from './Editproduct';
import { Link, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { deleteproduct } from '../JS/productslice';
import { useDispatch, useSelector } from 'react-redux';
function Cardshop({Product,ping,setping}) {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user?.user)
  return (
    <div>
       <Link to={`/trailer/${Product?._id}`} style={{textDecoration:"none"}}>
    <Card className="cards">
      <Card.Img variant="top" src={Product.imgprod} style={{height:"280px",borderRadius:"20px",padding:"10px"}}/>
      <Card.Body style={{backgroundColor:"#f3f3bc",textAlign:"center"}}>
        <Card.Title style={{textAlign:"center",fontSize:"15px",fontWeight:"bold",color:"#856565"}}>{Product.name}</Card.Title>
        <Card.Text style={{fontSize:"10px"}}>
          {Product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",fontSize:"18px",fontWeight:"500",backgroundColor:"#7dc77d"}}>
        <ListGroup.Item style={{backgroundColor:"#7dc77d",color:"white"}}>{Product.categorie}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#7dc77d",color:"white"}}>{Product.price} $</ListGroup.Item>
      </ListGroup>
     { user?.category=="admin"?<Card.Body style={{backgroundColor:"#b7dfb7",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
         <Editproduct product={Product} ping={ping} setping={setping}/>
         <Button style={{fontSize:"15px",borderRadius:"1px",backgroundColor:"#f16666",border:"none"}} onClick={()=>
      {dispatch(deleteproduct(Product._id));setping(!ping);
      }}> x </Button>
      </Card.Body>:null}
    </Card>
    </Link>
    </div>
  )
}

export default Cardshop;
