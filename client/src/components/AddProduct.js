import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { addproduct } from '../JS/productslice';

function AddProduct({ping,setping}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newproduct,setnewproduct]=useState ({
    imgprod:"",
    name:"",
    description:"",
    price:""
  });
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.user?.user)
  return (
    <div>
       {  user?.category=="admin"?<Button variant="primary" onClick={handleShow} style={{fontSize:"20px",borderRadius:"15px",backgroundColor:"#f16666",border:"none",boxShadow:"2px 1px gray"}}>
        ADD Product 
      </Button>:null}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"18px",fontWeight:"400",color:"green"}}>Add Product </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"15px",fontWeight:"200"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter a image of product" onChange={(e)=>setnewproduct({...newproduct, imgprod:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your name" onChange={(e)=>setnewproduct({...newproduct, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>desctiption</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your description product" onChange={(e)=>setnewproduct({...newproduct, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="text" placeholder="Enter your category product" onChange={(e)=>setnewproduct({...newproduct, categorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control style={{fontSize:"15px"}} type="Number" placeholder="Enter your price product" onChange={(e)=>setnewproduct({...newproduct, price:e.target.value})} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button style={{fontSize:"15px",backgroundColor:"#255fb5c2"}} variant="primary" onClick={()=>{dispatch(addproduct(newproduct));setping(!ping); handleClose()}}>
          add
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProduct
