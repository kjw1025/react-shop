import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  return (
    <nav className="navBar">
      <h1 className="logo">로고</h1>
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li>
          <Link to="/itemDetail">Cart</Link>
        </li>
        <li>
          <Link to="/event">Event</Link>
        </li>
      </ul>
    </nav>
  );
}
