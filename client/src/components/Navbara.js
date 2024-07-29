import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../JS/userSlice';
import ModalsEdit from './ModalsEdit';


function Navbara() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user?.user)
  return (
    
    <Navbar expand="lg"  style={{backgroundColor:"#3c60c7",display:"grid",gridTemplateColumns:"0.02fr 1fr 3fr 1.5fr",placeItems:"center"}}>
 
      <div style={{display:"flex"}}>
      <img style={{width:"50px",borderRadius:"40%",marginRight:"25px"}} src='https://img.freepik.com/premium-vector/men-s-fashion-logo_526766-116.jpg' alt='fashion'/>
      <Nav.Link href="#home"> <Link to="/" style={{color:"white",fontSize:"25px",textDecoration:"none"}}>ExpressShop</Link></Nav.Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{color:"gray"}}>
        <Nav className="me-auto" style={{marginLeft:"150px"}}>
          <div>
          <Nav.Link href="#Home"> <Link to="/" style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"15px"}}> Home</Link></Nav.Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>

          <Nav.Link href="#link"><Link to="/Shop" style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"15px"}}>SHOP</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/about" style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"15px"}}>About</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/contact" style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"15px"}}>Contact</Link></Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
{ user?     
      <div style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
         {user?.category=="admin"? <Nav.Link href="#home"> <Link to="/dashbord" style={{color:"white",fontSize:"25px",textDecoration:"none"}}>Dashbord</Link></Nav.Link>:null}
      <Nav.Link href="#home"> <Link to="/profil" style={{color:"white",fontSize:"25px",textDecoration:"none"}}>Profil</Link></Nav.Link>
     
    
      <Nav.Link href="#link"><Link to="/pannier" style={{textDecoration:"none",color:"white",fontSize:"20px"}}> <img style={{width:"45px"}} src="https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG-Picture.png" alt="f"/></Link></Nav.Link>
      <button 
      style={{backgroundColor:"transparent", border:"none"}}
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"20px", fill:"white"}}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
      </button>
      </div>:null}
   
  </Navbar>

 
  );
}

export default Navbara;
