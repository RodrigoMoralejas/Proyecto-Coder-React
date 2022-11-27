import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemcart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.img} alt="" />
      <h3>Product: {product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Amount: {product.amount}</p>
      <button onClick={() => removeProduct(product.id)}>Remove Product</button>
    </div>
  );
};

export default ItemCart;
