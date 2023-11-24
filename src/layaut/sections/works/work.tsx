import React from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "../../../components/Link";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
};
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="" />
                <Button>view project</Button>
            </ImageWrapper>

            <Discription>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Discription>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;
    }

    & + ${Link} {
        margin-left: 20px;
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            content: "";
            width: 100%;
            height: 100%;
        }
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;
const Discription = styled.div`
    padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
    margin: 14px 0 10px;
`;
