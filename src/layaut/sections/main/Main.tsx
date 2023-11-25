import React from "react";
import photo from "../../../assets/images/foto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Сontainer";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper
                    align={"center"}
                    justify={"space-around"}
                    wrap={"wrap"}
                >
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>
                            I am <span>Alexander Shchirov</span>
                        </S.Name>
                        <S.MainTitile>
                            Rescuer before - a Web developer now.
                        </S.MainTitile>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="my foto" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
