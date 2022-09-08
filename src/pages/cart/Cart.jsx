import React from 'react';
import styled from 'styled-components';
import Announcement from '../../components/announcements/Announcement';
import Footers from '../../components/footers/Footers';
import Navbar from '../../components/navbar/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};

`;
const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;
const Bottom = styled.div``;
const Info = styled.div``;
const Product = styled.div``;
const ProductDetail = styled.div``;
const Summary = styled.div``;
const SummaryTitle = styled.h1``;
const SummaryItem = styled.div``;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;



const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>

                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail></ProductDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 90</SummaryItemPrice>

                    </SummaryItem> 

                </Summary>
            </Bottom>

        </Wrapper>
        <Footers />
    </Container>
  )
}

export default Cart