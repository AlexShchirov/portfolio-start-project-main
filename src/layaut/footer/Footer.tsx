import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const SocialItemsData = [
    {
        iconId: "inst",
    },
    {
        iconId: "linkedin",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Alexander</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((i, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon
                                        height={"21px"}
                                        width={"21px"}
                                        viewBox={"0 0 21px 21px"}
                                        iconId={i.iconId}
                                    />
                                </S.SocialLink>
                            </S.SocialItem>
                        );
                    })}
                </S.SocialList>
                <S.Copyright>
                    © 2023 Alexander Shchirov, All Rights Reserved.
                </S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
