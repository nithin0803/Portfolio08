import { Flex, Image, Box } from "@chakra-ui/react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import "./componentStyle.scss";
import { chakra } from "@chakra-ui/react";
import { nithin08 } from "../assets";

const HeroText = () => {
  const name = "";
  return (
    <Flex
      flexDirection={"column"}
      width={"fit-content"}
      height={"fit-content"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"rgb(255 255 255)"}
      borderRadius={"50%"}
      zIndex={10}
      pos={"absolute"}
      userSelect={"none"}
      appearance={"none"}
      filter={"drop-shadow(0 0 5rem #292D44)"}
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div">
      <Box>
        <Image
          boxSize={"20rem"}
          objectFit="cover"
          src={nithin08}
          alt="Nithin"
        />
      </Box>
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="HeroText"
          style={{ fontFamily: "Moirai One" }}>
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}></m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}>
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <chakra.span
                  color={"#66FCF1"}
                  key={index}
                  className="bounce"
                  style={{ fontSize: "1.2em" }}>
                  {char}
                </chakra.span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
    </Flex>
  );
};

export default HeroText;
