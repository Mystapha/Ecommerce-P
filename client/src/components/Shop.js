import React from 'react'
import { useSelector } from 'react-redux';
import Cardshop from './Cardshop';
import AddProduct from './AddProduct';




function Shop({ping,setping}) {
    const products=useSelector((state) => state.product.productList);
    console.log(products);
  return (
    <>
      <div style={{marginTop:"50px",marginLeft:"70px"}} className="addproduct">
      <AddProduct ping={ping} setping={setping}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"40px",placeItems:"center",marginTop:"70px"}}>
      {products?.map((el)=><Cardshop Product={el} ping={ping} setping={setping}/>)}
    </div>
    </>
   
  )
}

export default Shop;
