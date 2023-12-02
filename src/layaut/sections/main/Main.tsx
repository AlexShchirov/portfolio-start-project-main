import React from "react";
import photo from "../../../assets/images/foto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
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
                            <p>A Web developer.</p>
                            <Typewriter
                                options={{
                                    strings: [
                                        "The Rescuer before",
                                        "A Web developer now.",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S.MainTitile>
                    </div>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.9}
                        glareColor="lightblue"
                        glarePosition="all"
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="my foto" />
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
