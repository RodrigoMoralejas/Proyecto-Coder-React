import "./App.css";
import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { products as productsDB } from "./mockDB/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import "./services/firebaseConfig";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting="Welcome to the best site for drummers"
                  productsDB={productsDB}
                />
              }
            />
            <Route
              path="/category/:category"
              element={
                <ItemListContainer
                  greeting="Welcome to the best site for drummers"
                  productsDB={productsDB}
                />
              }
            />
            <Route
              path="/itemdetail/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
