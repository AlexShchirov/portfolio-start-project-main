import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    margin: 0 10px 0 0; //!!! его не было/ не понятно как отображает браузер отступ, то есть он то его нету


    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 10px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: -1;

        height: 0;
        transition: ${theme.animations.transition}; 

        ${(props) =>
            props.active === true &&
            css<{ active?: boolean }>`
                height: 10px;
            `}
    }
`;
