import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();
  async function getProduct() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,
    );
    setProduct(response.data);
  }
  useEffect(() => {
    getProduct();
  }, []);

  async function DeleteProduct() {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,
    );
    navigate("/products");
  }
  return (
    <>
      <div>
        <h1>Product Details</h1>
        {product ? (
          <>
            <h3>title:{product.title}</h3>
            <p>description: {product.description}</p>
            <p>category: {product.category}</p>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>

            <button
              onClick={() => {
                DeleteProduct(product._id);
              }}
            >
              Delete THE PRODUCT
            </button>
            <Link to={`/products/${product._id}/edit`}>Update Product</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
