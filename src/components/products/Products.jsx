import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  {
    /* Fetching data from the backend */
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://127.0.0.1:3100/api/product/findallproducts?category=${cat}`
            : "http://127.0.0.1:3100/api/product/findallproducts"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((product) => Object.entries(filters).every(([key, value]) => product[key].includes(value)))
    )

  }, [filters, sort, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if(sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  },[sort])

  return (
    <Container>
      {cat ? filteredProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      }) : products.slice(0, 8).map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
