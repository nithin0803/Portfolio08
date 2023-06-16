import { Box, Flex } from "@chakra-ui/react";
import { m } from "framer-motion";
import "./elementStyle.scss";
const HeroScroller = () => {
  return (
    <Flex
      pos={"absolute"}
      bottom={"7rem"}
      justifyContent={"center"}
      alignItems={"center"}
      id="scroller">
      <a href="#about">
        <Flex
          p={"0.5rem"}
          borderColor={"#45A29E"}
          borderWidth={"4px"}
          borderRadius={"1.5rem"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          height={"64px"}>
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="heroScroller"
          />
        </Flex>
      </a>
    </Flex>
  );
};

export default HeroScroller;
