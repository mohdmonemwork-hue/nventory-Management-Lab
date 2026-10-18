import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });

  const navigate = useNavigate();
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/products`,
      formData,
    );

    navigate("/products");
  }
  return (
    <>
      <div>
        <h1>Create Product</h1>

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
            <option value="">Select a category</option>
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

          <button>Create Product</button>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
