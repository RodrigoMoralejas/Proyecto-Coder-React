import React, { useState } from "react";
import { useEffect } from "react";
import "./itemcount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(1);
  };

  const addCart = () => {
    onAdd(count);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counterDiv">
      <div className="counterBtn">
        <button disabled={count <= 1} onClick={subtract}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={add}>
          +
        </button>
      </div>
      <button onClick={reset}>Reset</button>
      <button disabled={stock <= 0} onClick={() => addCart()}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
