import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, setCart } = useCartContext();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [checkOutFinished, setCheckOutFinished] = useState(false);

  const handleOrder = (order) => {
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order);
    setCart([]);
    setCheckOutFinished(true);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (email1 !== email2) {
      alert("confirm email, please check and try again");
    } else {
      const order = {
        buyer: {
          name: name,
          lastname: lastName,
          email: email1,
        },
        items: cart.map((product) => ({
          id: product.id,
          title: product.name,
          price: product.price,
          amount: product.amount,
        })),
        total: totalPrice(),
      };
      handleOrder(order);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail1 = (e) => {
    setEmail1(e.target.value);
  };

  const handleEmail2 = (e) => {
    setEmail2(e.target.value);
  };

  if (checkOutFinished === false) {
    return (
      <div className="checkoutForm">
        <form action="" onSubmit={(e) => handleCheckout(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleName}
            value={name}
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={handleLastName}
            value={lastName}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail1}
            value={email1}
          />
          <input
            type="text"
            placeholder="Confirm email"
            name="emailConfirmation"
            onChange={handleEmail2}
            value={email2}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

  if (checkOutFinished === true) {
    return (
      <div className="checkOutFinished">
        <h3>
          Thanks <span>{name}</span> for your purchase!
        </h3>
        <p>
          We'll be contacting you to: <span>{email1}</span>
        </p>
        <Link to="/">keep shopping</Link>
      </div>
    );
  }
};

export default Checkout;
