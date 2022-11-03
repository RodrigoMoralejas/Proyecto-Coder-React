import React from "react";
import { Link } from "react-router-dom";
import "./itemcard.css";

const ItemCard = ({ product }) => {
  return (
    <div className="itemCard">
      <h3>{product.name}</h3>
      <img src={product.img} alt="" />
      <div className="itemBotCard">
        <h4>${product.price}</h4>
        <Link to={`/itemdetail/${product.id}`}>
          <button>View details</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
