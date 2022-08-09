import React from "react";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../custom css/Allprod.css";
import axios from "axios";

export default function Allprod() {
  const URL = "https://625b049050128c570200c123.mockapi.io/formik/";

  const navigate = useNavigate()

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

//   function to delete product
  const deleteProd = async (id) => {
    await axios.delete(URL+id);
    getData();
  };

//   function to get all products
  const getData = async () => {
    const res = await axios.get(URL);
    setLoading(false);
    setData(res.data);
  };

  return (
    <>
      <div className="container p-5 text-center">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <h2>All Products</h2>
            <table className="table table-striped table-hover table-borderlesss">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Model</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((pr, i) => (
                  <tr key={i}>
                    <th>{pr.id}</th>
                    <td>{pr.name}</td>
                    <td>{pr.model}</td>
                    <td>{pr.price}</td>
                    <td>
                      <button className="btn btn-primary" onClick={()=> navigate('/edit-product/'+pr.id)} >Edit</button>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteProd(pr.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
