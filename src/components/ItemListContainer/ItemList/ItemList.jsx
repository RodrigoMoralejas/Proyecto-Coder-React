import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./itemlist.css";

const ItemList = ({ productsDB }) => {
  return (
    <div className="itemList">
      {productsDB.map((product) => {
        return <ItemCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ItemList;
