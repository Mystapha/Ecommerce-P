import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { edituser } from '../JS/userSlice';


function Profil({ping,setping}) {


const user=useSelector((state)=>state.user?.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edited, setedited] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email:user?.email,
    password:user?.password
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{display:"grid",placeItems:"center",backgroundColor:"#c7b7b8",margin:"50px",borderRadius:"20px",boxShadow:"3px 3px 3px gray"}}>


      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",padding:"20px",margin:"20px",color:"#55406cc7"}}>
      <div style={{marginTop:"50px" ,textAlign:"center"}}>
      <h1 style={{fontWeight:"700"}}>Welcome</h1>
      <h1 style={{marginTop:"40px",fontWeight:"600"}}> {user?.name}  {user?.lastname}</h1> 
      <h4>{user?.email}</h4>
      </div>
      <div>
       <img style={{marginTop:"40px",borderRadius:"20px",boxShadow:"2px 2px 2px #55406cc7",width:"550px"}} src="https://cursus.edu/storage/thumbnails/HMBE7gAkEfDyFcL3bIA7N8Yiz1y0Zwv1xGqC5Gpe.jpeg" alt=""/>
        <div style={{marginTop:"30px"}}>
          <h1 style={{textAlign:"center",fontWeight:"700"}}>About</h1>
          <Form style={{marginTop:"30px",fontSize:"15px"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:"flex",justifyContent:"space-between"}}>
        <Form.Label> Name</Form.Label>
        <Form.Control type="email" placeholder={user?.name} style={{width:"400px"}} onChange={(e)=>setedited({...edited, name:e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:"flex",justifyContent:"space-between"}}>
        <Form.Label> Lastname</Form.Label>
        <Form.Control type="text" placeholder={user?.lastname} style={{width:"400px"}}  onChange={(e)=>setedited({...edited, lastname:e.target.value})} />
        </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:"flex" ,justifyContent:"space-between"}}>
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder={user?.email} style={{width:"400px"}}  onChange={(e)=>setedited({...edited, email:e.target.value})} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:"flex" ,justifyContent:"space-between"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder={user?.password} style={{width:"400px"}}  onChange={(e)=>setedited({...edited, password:e.target.value})} />
        </Form.Group>
        <Button variant="primary" onClick={()=>{dispatch(edituser({id:user?._id,edited}));setping(!ping);
             handleClose();}}>
          edit
        </Button>
      </Form>
        </div>
        </div>
      </div>
      <button style={{marginTop:"80px",padding:"10px",margin:"30px",fontSize:"20px",backgroundColor:"#c16060",color:"white",borderRadius:"10px",border:"none",boxShadow:"2px 2px 1px gray"}}
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
