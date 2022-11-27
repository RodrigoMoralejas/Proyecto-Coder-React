import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.amount * act.price, 0);
  };

  const totalProduct = () =>
    cart.reduce(
      (accumulator, actualproduct) => accumulator + actualproduct.amount,
      0
    );

  const addProduct = (item, amount) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, amount: product.amount + amount }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, amount }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalProduct,
        totalPrice,
        setCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
