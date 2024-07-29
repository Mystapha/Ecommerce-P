import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    let img = document.querySelector(".zoom");
  
    img.onmousemove = function(e) {
      e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
      e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
    }
  }, [])
  return (
    <div style={{backgroundColor:"#d1daf3",width:"100%",height:"100%",margin:"0",padding:"0",marginTop:"-20px"}}>
      <div style={{display:"grid",placeItems:"center"}}>
      <p style={{textAlign:"center",fontSize:"50px",fontWeight:"600",color:"#ad9308"}}>About Us</p><hr style={{width:"70%",border:"solid 2px"}}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",margin:"40px",placeItems:"center"}}>
      <img className="zoom"  style={{width:"500px",borderRadius:"8px",boxShadow:"2px 2px 2px 2px black"}} src="https://www.shutterstock.com/image-photo/interior-mens-clothing-store-style-260nw-2016616760.jpg" alt=""/>
      <p style={{width:"400px",fontSize:"15px",color:"#706a6a"}}><h4 style={{fontSize:"30px",textAlign:"center",padding:"15px",fontWeight:"600",color:"#6e6262"}}>Welcome to The Express Shop</h4>

Step into The Gentleman's Corner, where classic style meets modern sophistication. Our boutique is dedicated to the discerning gentleman who values quality, elegance, and individuality.

At The Gentleman's Corner, we offer a curated selection of premium menswear, including tailored suits, casual wear, and accessories. Our collections feature the finest fabrics, impeccable craftsmanship, and timeless designs that cater to both formal and casual occasions.</p>
    </div>
     <div>
    <marquee><img src="https://expressshop.tn/wp-content/uploads/2022/04/Logo-smaaaaallll.png.webp" alt="Express Shop" class="img-header-logo" width="153" height="47"/><p style={{fontSize:"15px",fontWeight:"600"}}>To make your shopping easier</p></marquee>
    </div>
    </div>
  )
}

export default About
