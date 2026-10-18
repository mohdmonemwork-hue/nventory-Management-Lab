import React from "react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Inventory Management</h1>
      <Link to="/products">View all products</Link>
    </div>
  );
}

export default HomePage;
