import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/social-network.webp";
import timerImg from "./../../../assets/images/new-york.webp";
import { Container } from "../../../components/Сontainer";
import { Work } from "./Work";

const worksItems = ["All", "Landing  page", "React", "spa"];
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
            <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work
                        title={"Social Network"}
                        src={socialImg}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }
                    />
                    <Work
                        title={"Timer"}
                        src={timerImg}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper}{
        gap: 30px;
    }
`;
