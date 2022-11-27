import React, { useState } from "react";
import "./itemdetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";

const IteamDetail = ({ item }) => {
  const [cartAdded, setCartAdded] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (amount) => {
    setCartAdded(true);
    addProduct(item, amount);
  };

  return (
    <div className="itemDetail">
      <img src={item.img} alt="" />
      <div className="itemDetailInfo">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
        {cartAdded ? (
          <Link to="/cart">
            <button>Go to cart</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default IteamDetail;
