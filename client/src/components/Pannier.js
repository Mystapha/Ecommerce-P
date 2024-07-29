import React, { useState } from 'react';
import './Pannierr.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletecommande } from '../JS/commandeSlice';

function Pannier({ ping, setping }) {
  const commandes = useSelector((state) => state.commande.commandeList);
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  // Handle quantity change for an item
  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  // Calculate total price based on quantities
  const calculateTotalPrice = () => {
    let total = 0;
    commandes
      .filter((el) => el.iduser === user?._id)
      .forEach((el) => {
        const quantity = quantities[el._id] || 0; // Default to 0 if no quantity set
        total += quantity * el.prix;
      });
    return total;
  };

  return (
    <div className='body'>
      <div className="wrapper2">
        <h1>Shopping Cart</h1>
        <div className="projet">
          <div className="shop">
            {commandes?.filter((el) => el.iduser === user?._id).map((el) => (
              <div className="box" key={el._id}>
                <img style={{ width: "160px",height:"260px", padding: "10px", marginRight: "35px" }} src={el?.imgprod} alt="" />
                <div className="content">
                  <h3>{el?.nameproduct}</h3>
                  <h4>Price: {el?.prix}$</h4>
                  <p className="unit">
                    Quantity: <input
                      type="number"
                      placeholder="1"
                      min="1"
                      value={quantities[el._id] || ''}
                      onChange={(e) => handleQuantityChange(el._id, parseInt(e.target.value))}
                    />
                  </p>
                  <p className="btn-area">
                    <i className="fa fa-trash"></i>
                    <span className="btn2" onClick={() => { dispatch(deletecommande(el?._id));setping(!ping) }}>Remove</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="right-bar">
            <p><span>Number of commands</span> <span>{commandes.filter((el) => el.iduser === user?._id).length}</span></p>
            <hr />
            <p><span>Total price</span> <span>{calculateTotalPrice()}$</span></p>
            <hr />
            <a href='#'> <img style={{ width: "30px" }} src="/ajouter-un-panier.png" alt=""/> Checkout</a>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pannier;
