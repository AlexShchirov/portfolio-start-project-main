import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/social-network.webp";
import timerImg from "./../../../assets/images/new-york.webp";
import { Container } from "../../../components/Сontainer";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";

const worksItems = ["All", "Landing  page", "React", "spa"];


const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper
                    justify={"space-between"}
                    align={"flex-start"}
                    wrap={"wrap"}
                >

                    {workData.map((w)=>{
                        return(
                            <Work
                        title={w.title}
                        src={w.src}
                        text={w.text}
                        />)})}
                    
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


