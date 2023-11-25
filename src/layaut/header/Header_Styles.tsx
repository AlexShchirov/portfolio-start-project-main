import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
    /* background: rgba(31, 31, 32, 0.9); */
    background-color: ${theme.colors.primaryBg};
    opacity: 0.9;
    padding: 20px 0px;
    position: fixed; // !!! sticky.....................
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 99999;
`;


export const S = {
    Header,
}