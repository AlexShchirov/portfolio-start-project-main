import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export const GoTopByn = () => {
    const [showBtn, setshowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true);
            } else {
                setshowBtn(false);
            }
        });
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopByn
                    onClick={() => {
                        scroll.scrollToTop();
                    }}
                >
                    <Icon
                        iconId={"arrow"}
                        height={"30"}
                        width={"30"}
                        viewBox={"0 0 30 30"}
                    />
                </StyledGoTopByn>
            )}
        </>
    );
};

const StyledGoTopByn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    bottom: 30px;
    right: 30px;
`;
