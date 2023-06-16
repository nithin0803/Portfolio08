import { Box, Flex } from "@chakra-ui/react";
import ProjectCards from "../components/ProjectCards";
import Sectiontitle from "../components/SectionTittle";
import "./style.scss";
const Projects = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      id="projects"
      className="overflow-hidden-web">
      <Flex
        w={"70%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pb={"9rem"}
        minHeight={"800px"}
        height={"100vh"}
        mt={"10rem"}
        pos={"relative"}>
        <Box width={"100%"} height={"180%"} mt={"-10rem"} mb={"-20rem"}>
          <Sectiontitle title="PROJECTS" subTitle="What I have done so far" />
        </Box>
        <Flex justifyContent={"center"} zIndex={10} w={"100%"} height={"70%"}>
          <Box w={"100%"}>
            <ProjectCards />
          </Box>
          <Box
            pos={"absolute"}
            right={"-50%"}
            w={"100%"}
            h={"100%"}
            top={"100%"}></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Projects;
