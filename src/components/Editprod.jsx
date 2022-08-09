import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import "../custom css/Editprod.css";

export default function Editprod() {
  const URL = "https://625b049050128c570200c123.mockapi.io/formik/";
  const params = useParams();
  const navigate = useNavigate();

  const [prod, setProd] = useState({ name: "", model: "", price: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      getData();
    }
  }, []);

  async function getData() {
    const res = await axios.get(URL + params.id);
    setLoading(false);
    setProd(res.data);
  }

  const formik = useFormik({
    initialValues: {
      id: prod.id,
      name: prod.name,
      model: prod.model,
      price: prod.price,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateProd(values);
    },
  });

  // function to update product
  async function updateProd(value) {
    const res = await axios.put(URL + params.id, value);
    navigate("/");
  }

  return (
    <>
      {loading ? (
        <div className="container d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center">Edit Product</h2>
          <form className="p-3" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              className="form-field"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="model">Model</label>
            <br />
            <input
              type="text"
              id="model"
              className="form-field"
              onChange={formik.handleChange}
              value={formik.values.model}
            />
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="number"
              id="price"
              className="form-field"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <div className="mt-2 d-flex flex-row-reverse">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
