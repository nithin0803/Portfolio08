import React from "react";
import SectionTittle from "../components/SectionTittle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Box, Flex, chakra } from "@chakra-ui/react";
import "./style.scss";
import { introduction, memoji } from "../Constants/constants";
import ImageSlider from "../components/elements/ImageSlider";
function About() {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      id="about"
      className="about overflow-hidden-web">
      <Flex w={"70%"} flexDirection={"column"} pb={"4rem"}>
        <Box w={"100%"}>
          <SectionTittle title="ABOUT ME" subTitle="Introduction" />
        </Box>
        <Flex w={"100%"}>
          <Flex w={"50%"} h={"100%"} mt={"2.5rem"} alignItems={"center"}>
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="about__contentText">
                <chakra.span color={"#45A29E"}>
                  {introduction.text[0]}
                </chakra.span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
              </m.p>
            </LazyMotion>
          </Flex>
          <Flex
            w={"50%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Flex
              w={"50%"}
              h={"350px"}
              justifyContent={"center"}
              alignItems={"center"}>
              <ImageSlider images={memoji.image} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
