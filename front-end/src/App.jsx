import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AllProducts from "./Pages/AllProducts";
import ProductDetails from "./Pages/ProductDetails";
import CreateProduct from "./Pages/CreateProduct";
import EditProduct from "./Pages/EditProduct";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
