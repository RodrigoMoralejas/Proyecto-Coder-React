import React from "react";
import "./itemdetail.css";

const IteamDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <img src={item.img} alt="" />
      <div className="itemDetailInfo">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default IteamDetail;
