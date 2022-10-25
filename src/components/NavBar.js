import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <h1 className="logo">로고</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/itemDetail">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
