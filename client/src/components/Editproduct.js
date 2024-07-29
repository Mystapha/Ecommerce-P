import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {editproduct} from "../JS/productslice"

function EditProduct({product,ping,setping}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] =useState ({
    imgprod:product.imgprod,
    name:product.name,
    description:product.description,
    price:product.price
  });
  const dispatch = useDispatch();

  return (
    <div>
       <Button variant="primary" onClick={handleShow} style={{fontSize:"15px",borderRadius:"1px",backgroundColor:"#f16666",border:"none"}}>
        Edit Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"18px",fontWeight:"400",color:"green"}}>Edit Product </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"15px",fontWeight:"200"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter a image of product" onChange={(e)=>setedited({...edited, imgprod:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your name" onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>desctiption</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your description product" onChange={(e)=>setedited({...edited, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your category product" onChange={(e)=>setedited({...edited, categorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="Number" placeholder="Enter your price product" onChange={(e)=>setedited({...edited, price:e.target.value})} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button style={{fontSize:"15px"}} variant="primary" onClick={()=>{dispatch(editproduct({id:product._id, edited}));setping(!ping); handleClose()}}>
          Edit
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProduct;
