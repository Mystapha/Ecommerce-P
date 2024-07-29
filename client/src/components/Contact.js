import React from 'react'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const notify = () => toast("Wow so easy!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_57dyqcd', 'template_407y873', form.current, {
        publicKey: 'WdE2nAW4POnzQ78UU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center"}}>
      <p style={{fontSize:"35px",fontWeight:"600",color:"#704f4f"}}>Contact Us</p>
      <img style={{width:"45px"}} src="https://i.pinimg.com/originals/e9/ab/30/e9ab30fdcadf40bdc095a1e317f3851c.gif" alt="emogi"/>
      </div>
   <form ref={form} onSubmit={sendEmail} style={{display:"grid",gridTemplateColumns:"1fr",placeItems:"center",marginTop:"30px",margin:"20px",marginLeft:"-25px"}}>
      <label style={{fontSize:"20px",fontWeight:"700",marginBottom:"10px",marginTop:"10px",color:"red"}}>Name</label>
      <input type="text" name="user_name" placeholder="Create your Name" style={{width:"450px",height:"30px",textAlign:"center",fontSize:"15px",borderRadius:"3px",border:"none",boxShadow:"3px 2px 2px gray"}}/>
      <label style={{fontSize:"20px",fontWeight:"700",marginBottom:"10px",marginTop:"10px",color:"red"}}>Lastname</label>
      <input type="text" name="user_name" placeholder="Create your Lastname" style={{width:"450px",height:"30px",textAlign:"center",fontSize:"15px",borderRadius:"3px",border:"none",boxShadow:"3px 2px 2px gray"}}/>
      <label style={{fontSize:"20px",fontWeight:"700",marginBottom:"10px",marginTop:"10px",color:"red"}}>Email</label>
      <input type="email" name="user_email" placeholder="Create your email" style={{width:"450px",height:"30px",textAlign:"center",fontSize:"15px",borderRadius:"3px",border:"none",boxShadow:"3px 2px 2px gray"}} />
      <label style={{fontSize:"20px",fontWeight:"700",marginBottom:"10px",marginTop:"10px",color:"red"}}>Message</label>
      <textarea name="message" placeholder="Create your message" style={{width:"450px",height:"120px",textAlign:"center",fontSize:"15px",borderRadius:"3px",border:"none",boxShadow:"3px 2px 2px gray"}}/>
      <input type="submit" value="Send" onClick={notify}
      style={{marginTop:"25px",backgroundColor:"orange",width:"450px"
      ,height:"30px",color:"#fff",fontSize:"18px",fontWeight:"bold",border:"none",boxShadow:"2px 2px 2px gray",borderRadius:"8px"}} />
     <ToastContainer />
    </form>
 
    </div>
  )
}

export default Contact
