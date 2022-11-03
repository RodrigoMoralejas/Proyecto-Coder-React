import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { products as productsDB } from "./mockDB/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/itemdetail/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
