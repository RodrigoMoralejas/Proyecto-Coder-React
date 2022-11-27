import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();

    const queryCollection = collection(queryDb, "products");

    if (category) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [category]);

  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
      <ItemList productsDB={items} />
    </div>
  );
};

export default ItemListContainer;
