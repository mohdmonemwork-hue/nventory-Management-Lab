import React from "react";
import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <Link to={"/"}>HomePage</Link>
      <Link to={"/products"}>AllProducts</Link>
      <Link to={"/products/create"}>CreateProduct</Link>
    </>
  );
}

export default NavBar;
