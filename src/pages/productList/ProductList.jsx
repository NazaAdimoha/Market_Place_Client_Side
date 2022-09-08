import React from "react";
import styled from "styled-components";
import Announcement from "../../components/announcements/Announcement";
import Footers from "../../components/footers/Footers";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;

`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    margin: 20px;
    
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;

`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: 1px solid teal;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #555;

`;


const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <option disabled selected>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
            </Select>
            <Select>
                <option disabled selected>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <option disabled selected>Newest</option>
                <option>Price (asc)</option>
                <option>Price (desc)</option>

            </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footers />
    </Container>
  );
};

export default ProductList;
