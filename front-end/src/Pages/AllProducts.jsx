import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
function AllProducts() {
  const [products, setProduct] = useState([]);

  async function getAllProducts() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products`,
    );
    setProduct(response.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div>
        <h1>all Products</h1>
        {products.map((oneProduct) => (
          <div>
            <h2>Title:{oneProduct.title}</h2>

            <Link to={`/products/${oneProduct._id}`}>Product Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProducts;
