import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) =>
        data.map((p) => ({
          ...p,
          comfort: Math.floor(Math.random() * 4) + 1,
          quality: Math.floor(Math.random() * 4) + 1,
          rating: Math.floor(Math.random() * 4) + 1,
          service: Math.floor(Math.random() * 4) + 1,
        }))
      )
      .then((r) => setProducts(r))
      .catch((err) => console.log("error in fetching data: " + err))
      .finally(() => setLoading(false));
  }, []);
  console.log(products);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className='preloader-wrapper big active'>
          <div className='spinner-layer spinner-blue-only'>
            <div className='circle-clipper left'>
              <div className='circle'></div>
            </div>
            <div className='gap-patch'>
              <div className='circle'></div>
            </div>
            <div className='circle-clipper right'>
              <div className='circle'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='app'>
      <Navbar />
      <Layout products={products} />
    </div>
  );
}

export default App;
