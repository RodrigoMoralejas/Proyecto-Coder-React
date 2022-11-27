import React, { useState, useEffect } from "react";
import IteamDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "products", itemId);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [itemId]);

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
