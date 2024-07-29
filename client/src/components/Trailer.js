import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addcommande } from '../JS/commandeSlice';
import Swal from 'sweetalert2'
function Trailer({ping, setping}) {
  const params=useParams();
  const products=useSelector((state) => state.product.productList);
  const product=products.filter((el)=>el?._id==params.id)[0];
  const dispatch=useDispatch();
  useEffect(() => {
    let img = document.querySelector(".zoom");

    img.onmousemove = function(e) {
      e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
      e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
    }
  }, [])
  const user=useSelector((state)=>state.user?.user)
  const newcommande={
    imgprod:product?.imgprod,
    iduser:user?._id,
    nameuser:user?.name+" "+ user?.lastname,
    nameproduct:product?.name,
    date:new Date(),
    prix:product?.price
  }
  return (
    
    <div className="produit">
            <h2 className="promo">Promotion!!</h2>
             <Card  style={{display:"flex",margin:"60px",padding:"10px"}}>
                <Card.Img variant="top" src={product.imgprod} style={{width:"100%"}} className="zoom"/>
                <Card.Body style={{backgroundColor:"#fbfbdb",marginTop:"5px"}}>
                  <Card.Title style={{textAlign:"center",fontWeight:"600"}}>{product.name}</Card.Title>
                  <Card.Text style={{textAlign:"center",fontSize:"12px",fontWeight:"600"}}>{product.description}</Card.Text>
                  <Card.Text style={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{product.categorie}</Card.Text>
                  
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center"}}>
        <Card.Text style={{textAlign:"center",fontSize:"25px",fontWeight:"700",color:"#e77373"}}>
                    {product.price} $
           </Card.Text>
          <button style={{backgroundColor:"#dd8383",width:"120px",padding:"8px",color:"white",fontSize:"20px",fontWeight:"500"}} onClick={()=>{dispatch(addcommande(newcommande));setping(!ping); Swal.fire({
  title: "Good job!",
  text: "your order is pending",
  icon: "success"
});}}> BUY NOW</button>
        </div>
                </Card.Body>
              </Card>
 
    </div>
  )
}

export default Trailer
