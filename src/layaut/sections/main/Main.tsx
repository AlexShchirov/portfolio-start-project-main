import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Alexander Shchirov</Name>
                    <MainTitile>A Web Developer.</MainTitile>
                </div>
                <Photo src={photo} alt="my foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff4d0;
`



const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

`
const MainTitile = styled.h1`

`

const Name= styled.h2`

`