import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/menu";
import { Container } from '../../components/Сontainer';

const items=["Home","Skills","Works","Testimony","Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu menuItems={items}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #64dc64;
  display: flex;
  justify-content: space-between;
`
