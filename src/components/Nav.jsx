import React from "react";
import "../bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">CRUD-formik</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
                <Link to="/all-products" className="nav-link" aria-current="page">All Products</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-product" className="nav-link" aria-current="page">Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
