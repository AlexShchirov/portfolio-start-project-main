import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
};
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId} />
                </IconWrapper>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>{props.description}</StyledText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 340px;
    padding: 62px 20px 40px;
`;

const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`;

const StyledTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`;

const StyledText = styled.p`
    text-align: center;
    line-height: 1.4;
`;
