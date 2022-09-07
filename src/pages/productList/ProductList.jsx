import React from 'react'
import styled from 'styled-components';
import Announcement from '../../components/announcements/Announcement';
import Navbar from '../../components/navbar/Navbar';

export const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
    </Container>
  )
}

export default ProductList