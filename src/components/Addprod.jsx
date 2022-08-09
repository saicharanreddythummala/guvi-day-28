import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Addprod() {
  const URL = "https://625b049050128c570200c123.mockapi.io/formik";

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      model: "",
      price: "",
    },
    onSubmit: (values) => {
      addprod(values).then(navigate('/'));
    },
  });

  // function to add product
  async function addprod(value) {
    const res = await axios.post(URL,value)
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center">Add a Product</h2>
        <form className="p-3" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="model">Model</label>
          <br />
          <input
            type="text"
            id="model"
            name="model"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
          <label htmlFor="price">Price</label>
          <br />
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
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
    </>
  );
}
