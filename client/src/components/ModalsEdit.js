import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { edituser } from '../JS/userSlice';
import { useDispatch } from 'react-redux';
function ModalsEdit({el, ping, setping}) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
           
            category: el?.category
  })
  return (
    <>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"white",fontSize:"15px",fontWeight:"700"}}>Category</Form.Label>
             <div>
             <select onChange={(e)=>setedited({...edited, category:e.target.value})}  style={{width:"100px",marginTop:"20px",fontSize:"15px"}}>
              <option value="admin" > admin</option>
              <option value="user">user</option></select>
           
             </div>
             <Button onClick={()=>{dispatch(edituser({id:el?._id,edited})); setping(!ping)}}>ok</Button> 
            </Form.Group>
            </Form>
    </>
  )
}

export default ModalsEdit
