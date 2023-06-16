import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "../components/SectionTittle";
import SkillsCards from "../components/SkillsCards";
import "./style.scss";
import MarqueeCards from "../components/MarqueeeCards";

const Skills = () => {
  return (
    <Flex
      id="skills"
      justifyContent={"center"}
      w={"100%"}
      className="overflow-hidden-web">
      <Flex w={"70%"} flexDirection={"column"} minHeight={"800px"}>
        <Box w={"100%"}>
          <SectionTitle title="SKILLS" subTitle="WHAT I DO" />
        </Box>
        <Box
          h={"100%"}
          borderColor={"#45A29E"}
          borderRightWidth={"2px"}
          borderLeftWidth={"2px"}>
          <Box pos={"relative"}>
            <Box
              backgroundColor={"#45A29E"}
              h={"1px"}
              w={"100%"}
              pos={"absolute"}
              top={"45px"}></Box>
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </Box>
          <Box pos={"relative"}>
            <Box
              backgroundColor={"#45A29E"}
              h={"1px"}
              w={"100%"}
              pos={"absolute"}
              top={"45px"}></Box>
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Skills;
