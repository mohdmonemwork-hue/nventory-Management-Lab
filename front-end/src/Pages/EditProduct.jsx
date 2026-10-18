import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function EditProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });

  const { productId } = useParams();

  async function getProduct() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,
    );
    setFormData(response.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,
      formData,
    );

    navigate("/products");
  }
  return (
    <>
      <div>
        <h1>update Product</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            id="title"
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            value={formData.description}
            onChange={handleChange}
            name="description"
            id="description"
          />

          <label htmlFor="category">Category:</label>
          <select
            value={formData.category}
            onChange={handleChange}
            name="category"
            id="category"
          >
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            min="0"
            value={formData.price}
            onChange={handleChange}
            name="price"
            id="price"
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            min="0"
            value={formData.quantity}
            onChange={handleChange}
            name="quantity"
            id="quantity"
          />

          <button>Update Product</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
