import React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { FcSearch } from "react-icons/fc"
import { Container, Left, Wrapper, Right, Center, Language, SearchContainer, Input, Logo, MenuItem,  } from '../styled_components/styles';

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>    
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <FcSearch style={{ color: "grey", fontSize: "1rem" }} />
                        </SearchContainer>
                    
                </Left>
                <Center>
                    <Logo>
                        BuyConnect...
                    </Logo>
                </Center>
                <Right>
                   <MenuItem>REGISTER</MenuItem>

                   <MenuItem>SIGN IN</MenuItem>

                   <MenuItem>
                    <Badge overlap="rectangular" badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                   </MenuItem> 
                </Right>
            </Wrapper>
        </Container> 
    </div>
  )
}

export default Navbar