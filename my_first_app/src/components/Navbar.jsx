
import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/Cartcontext";

const Navbar = () => {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          LUXE<span className="text-warning">.</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Cart */}
          <div className="d-flex align-items-center">
            <NavLink
              to="/cart"
              className="nav-link text-white d-flex align-items-center gap-2"
            >
              <i className="bi bi-bag fs-5"></i>
              <span>Cart</span>
              <span className="badge bg-warning text-dark rounded-pill">
                {cartCount}
              </span>
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
