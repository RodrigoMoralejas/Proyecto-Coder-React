import React, { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counterDiv">
      <div className="counterBtn">
        <button disabled={count <= 1} onClick={restar}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={sumar}>
          +
        </button>
      </div>
      <button onClick={reset}>Reset</button>
      <button>Add to cart</button>
    </div>
  );
};

export default ItemCount;
