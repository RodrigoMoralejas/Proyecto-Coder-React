import React, { useState, useEffect } from "react";
import IteamDetail from "./ItemDetail/IteamDetail";
import { useParams } from "react-router-dom";
import { products } from "../../mockDB/products";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItem(products.find((x) => x.id === parseInt(itemId)));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [item]);

  return (
    <div className="itemDetailContainer">
      {loading ? <p>loading...</p> : <IteamDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
