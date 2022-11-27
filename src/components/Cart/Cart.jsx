import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return <p className="emptyCart">empty cart</p>;
  } else {
    return (
      <div className="cart">
        {cart.map((product) => {
          return <ItemCart product={product} key={product.id} />;
        })}
        <p>total: ${totalPrice()}</p>
        <Link to="/checkout">Emitir Compra</Link>
      </div>
    );
  }
};

export default Cart;
