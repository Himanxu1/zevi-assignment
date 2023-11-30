import  { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
