import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editproduct } from '../JS/productslice';
function ModalsEdit3({el, ping, setping}) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
           
            status: el?.status
  })
  return (
    <>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"white",fontSize:"15px",fontWeight:"700"}}>Status</Form.Label>
             <div>
             <select onChange={(e)=>setedited({...edited, status:e.target.value})}  style={{width:"100px",marginTop:"20px",fontSize:"15px"}}>
              <option value="favorite" >Favorite</option>
              <option value="infavorite">Infavorite</option></select>
           
             </div>
             <Button onClick={()=>{dispatch(editproduct({id:el?._id,edited})); setping(!ping)}}>ok</Button> 
            </Form.Group>
            </Form>
    </>
  )
}

export default ModalsEdit3
