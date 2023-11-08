import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src="" alt=""/>
            </a>

            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Testimony</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader= styled.header`
  background-color: #64dc64;
`
