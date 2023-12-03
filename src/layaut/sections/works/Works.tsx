import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/social-network.webp";
import timerImg from "./../../../assets/images/new-york.webp";
import { Container } from "../../../components/Container";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//const tabsItems = ["All", "Landing  page", "React", "spa"];

const tabItems: Array<{
    status: TabsStatusType;
    title: string;
}> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing  page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },
];

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1,
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
        id: 2,
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setcurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter((work) => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter((work) => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter((work) => work.type === "spa");
    }

    function changeFilterStatus(value: TabsStatusType) {
        setcurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper
                    justify={"space-between"}
                    align={"flex-start"}
                    wrap={"wrap"}
                >
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                layout = { true}
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                exit={{opacity:0}}
                                key={w.id}
                                >
                                    <Work
                                        title={w.title}
                                        src={w.src}
                                        text={w.text}
                                        key={w.id}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
