import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { products } from "../../mockDB/products";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState(products);

  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const filterCategory = (productCategory) => {
      setItems(products.filter((x) => x.category === productCategory));
    };

    if (category) {
      category === "snares" && filterCategory("snares");
      category === "cymbals" && filterCategory("cymbals");
      category === "pedals" && filterCategory("pedals");
    } else {
      setItems(products);
    }
  }, [category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [category]);

  const onAdd = () => {};

  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
      {loading ? <h2>Loading...</h2> : <ItemList productsDB={items} />}
      <ItemCount stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
