import { Box, Flex, Image } from "@chakra-ui/react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import React from "react";
import HeroParticles from "../components/Particles/HeroParticles";
import HeroText from "../components/HerorText";
import HeroScroller from "../components/elements/HeroScroller";
import "./style.scss";
import { nithin08 } from "../assets";
function Heror() {
  return (
    <Flex
      id="hero"
      justifyContent={"center"}
      width={"100%"}
      pos={"relative"}
      className="overflow-hidden-web">
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="hero_content relative w-full flex justify-center items-center h-screen min-h-[800px]">
          <HeroText />
          <HeroParticles />
        </m.div>
        <HeroScroller />
      </LazyMotion>
    </Flex>
  );
}

export default Heror;
