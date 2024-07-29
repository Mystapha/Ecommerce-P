import React, { useState } from 'react'
import './Dashbordd.css'
import { deleteuser } from '../JS/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalsEdit from './ModalsEdit';
import { deletecommande } from '../JS/commandeSlice';
import ModalsEdit2 from './ModalsEdit2';
import ModalsEdit3 from './ModalsEdit3';
import { deleteproduct } from '../JS/productslice';
import AddProduct from './AddProduct';

function Dashbord({ping,setping}) {
  const [categ, setcateg] = useState('dash');
  const users=useSelector((state)=>state.user.userList);
  const Commande=useSelector((state)=>state.commande.commandeList)
  const product=useSelector((state)=>state.product.productList)
  const dispatch=useDispatch();
  const [showmodal, setshowmodal] = useState(false);

  console.log(users);
  return (
    <div className="body2">
      <div className="menu">
        <ul>
          <li className="profile">
            <div className="img-box">
              <img src="/mustapha.png" alt="profile"/>
            </div>
            <h2>Mustapha Amara</h2>
          </li>
          <li className="active">
            <a href="#">
            <svg style={{backgroundColor:"white",width:"25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            <p>Dashbord</p>
            </a>
          </li>
          <li>
            <a href="#">
            <svg style={{backgroundColor:"white",width:"25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
            <p><button style={{backgroundColor:"transparent", border:"none", color:"white"}} onClick={()=>setcateg("users")}>Users</button></p>
            </a>
          </li>
          <li>
            <a href="#">
            <svg style={{backgroundColor:"white",width:"25px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
            <p><button  style={{backgroundColor:"transparent", border:"none", color:"white"}} onClick={()=>setcateg("products")}>Products</button></p>
            </a>
          </li>
          <li>
            <a href="#">
            <svg style={{backgroundColor:"white",width:"25px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
            <p><button  style={{backgroundColor:"transparent", border:"none", color:"white"}} onClick={()=>setcateg("commandes")}>Commandes</button></p>
            </a>
          </li>
          {/* <li>
            <a href='#'>
            <svg style={{backgroundColor:"white",width:"25px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
             <p>Favorite</p>
            </a>
          </li> */}
          <li className="log-out">
            <a href='#'>
          <svg style={{backgroundColor:"white",width:"25px"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
            <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="title-info">
          <p>dashbord</p>
       <svg style={{backgroundColor:"white",width:"25px"}} height="30px" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"><path d="M512 896v512h-256v-512h256zm384-512v1024h-256v-1024h256zm1024 1152v128h-2048v-1536h128v1408h1920zm-640-896v768h-256v-768h256zm384-384v1152h-256v-1152h256z"/></svg>
        </div>
        <div className="data-info">
        
          <div className="box1">
          <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
          <div className="data">
            <p>user</p>
            <span>100</span>
          </div>
          </div>
          <div className="box1">
         <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Product_delivery"><path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z"/><path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z"/><path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z"/><path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z"/><path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z"/><path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z"/></g></svg>
          <div className="data">
            <p>Products</p>
            <span>100</span>
          </div>
          </div>
          <div className="box1">
       <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Product_delivery"><path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z"/><path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z"/><path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z"/><path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z"/><path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z"/><path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z"/></g></svg>
          <div className="data">
            <p>Commandes</p>
            <span>100</span>
          </div>
          </div>
          <div className="box1">
        <svg   style={{backgroundColor:"white",width:"30px",height:"30px"}}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H24V24H0z" fill="none"/><path d="M21 18v2H3v-2h18zM6.95 3.55v9.9L2 8.5l4.95-4.95zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"/></g></svg>
          <div className="data">
            <p>revenues</p>
            <span>100</span>
          </div>
          </div>
        </div>



        {/* container dashbord */}
      {categ=="users" ? <div >
        <div className="title-info">
          <p>Users</p>
          <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Product_delivery"><path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z"/><path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z"/><path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z"/><path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z"/><path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z"/><path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z"/></g></svg>
        </div>
         
        <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((el)=><tr>
            <td>{el?.name}</td>
            <td>{el?.lastname}</td>
            <td>{el?.email}</td>
            {/* <td><input type="text" placeholder="el?.category"></input></td> */}
            <td>{el?.category}</td>
            <td> <ModalsEdit el={el} ping={ping} setping={setping}/></td> 
            <td><button style={{background:"transparent",border:"none"}}  onClick={()=>
      {dispatch(deleteuser(el._id));setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 30 30" fill="#fff">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg></button></td>
          </tr>)}
   
        
        </tbody>
      </table>
       </div>
        </div>:
        categ=="commandes" ? <div >
        <div className="title-info">
          <p>Commande</p>
          <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Product_delivery"><path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z"/><path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z"/><path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z"/><path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z"/><path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z"/><path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z"/></g></svg>
        </div>
        <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
      <table width="100%" style={{ tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th>Image Product</th>
            <th>Name product</th>
            <th>Name user</th>
            <th>Date</th>
            <th>Prix</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Commande?.map((el) => (
            <tr key={el?._id}>
              <td><img style={{ width: "50px" }} src={el?.imgprod} alt=""/></td>
              <td>{el?.nameproduct}</td>
              <td>{el?.nameuser}</td>
              <td >{el?.date}</td>
              <td>{el?.prix} $</td>
              <td>{el?.status}</td>
              <td><ModalsEdit2 el={el} ping={ping} setping={setping} /></td>
              <td>
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={() => {
                    dispatch(deletecommande(el._id));
                    setping(!ping);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 30 30" fill="#fff">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </div>:
        categ=="products" ? <div >
        <div className="title-info" style={{display:"flex",alignItems:"center"}}>
          <p>Product</p>
          <button style={{backgroundColor:"transparent",border:"none",marginTop:"-20px"}}> <AddProduct  ping={ping} setping={setping}/></button>
          <svg style={{backgroundColor:"white",width:"30px",height:"30px"}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Product_delivery"><path d="M12.1719,3.9982,6.0476,12.57a.6819.6819,0,0,0,.5542,1.0781l17.312.0166L31.1692,3.433H13.27A1.35,1.35,0,0,0,12.1719,3.9982Z"/><path d="M57.7119,12.6264,51.5476,3.9982A1.3506,1.3506,0,0,0,50.449,3.433H32.56l7.2334,10.2549,17.3628.0166A.6818.6818,0,0,0,57.7119,12.6264Z"/><path d="M37.99,15.8154,33.21,9.039V29.9077H50.449a1.75,1.75,0,0,0,1.75-1.75V16.4l-13.1075-.0126A1.3519,1.3519,0,0,1,37.99,15.8154Z"/><path d="M24.6111,16.3657h-.002L11.52,16.3764V28.1577a1.75,1.75,0,0,0,1.75,1.75h17.24V9.03l-4.7979,6.7661A1.3519,1.3519,0,0,1,24.6111,16.3657Z"/><path d="M15.1052,37.15H8.5471a1.0432,1.0432,0,0,0-1.0432,1.0434V60.5751a1.0434,1.0434,0,0,0,1.0432,1.0435h6.5581A2.2744,2.2744,0,0,0,17.38,59.3442v-19.92A2.2744,2.2744,0,0,0,15.1052,37.15Z"/><path d="M56.3279,39.7783a3.8042,3.8042,0,0,0-3.1846-1.7159h-2.57a5.5493,5.5493,0,0,0-5.1455,3.4429,5.75,5.75,0,0,1-1.0239,1.6192A8.3784,8.3784,0,0,1,37.72,46.9233l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0458A5.219,5.219,0,0,0,35.19,38.0624h-5.586a7.7366,7.7366,0,0,0-5.497,2.2706l-.1426.142a7.2457,7.2457,0,0,1-3.8858,2.0127V57.3989H40.45A15.4305,15.4305,0,0,0,54.64,48.0522l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.7783Z"/></g></svg>
        </div>
        <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
        <table width="100%" style={{ tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th>Image Product</th>
            <th>Name product</th>
            <th style={{width:"150px"}}>Description</th>
            <th>Categorie</th>
            <th>Price</th>
            <th> Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((el) => (
            <tr key={el?._id}>
              <td><img style={{ width: "50px" }} src={el?.imgprod} alt=""/></td>
              <td>{el?.name}</td>
              <td style={{fontSize:"10px"}}>{el?.description}</td>
              <td >{el?.categorie}</td>
              <td>{el?.price} $</td>
              <td> {el.status}</td>
            
              <td><ModalsEdit3 el={el} ping={ping} setping={setping} /></td>
              <td>
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={() => {
                    dispatch(deleteproduct(el._id));
                    setping(!ping);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 30 30" fill="#fff">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </div>:null
        
        }
      </div>
{/* {showmodal?      <div className="usermodal">
        <div className="bodymodal">
          <>
         <ModalsEdit/>
          </>
          <button className="btn6" onClick={()=>setshowmodal(false)}>x</button>
        </div>

      </div>:null} */}
    </div>
  )
}

export default  Dashbord
