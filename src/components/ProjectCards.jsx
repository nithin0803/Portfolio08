import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { githubIcon } from "../assets";
import { Box, Flex, chakra } from "@chakra-ui/react";
import "./componentStyle.scss";
import { projects } from "../constants/constants";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`card__wrapper`}
        style={{ marginLeft: "-20%" }}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className="projectCard"
        style={{ marginTop: "-120%" }}>
        <Box
          pos={"relative"}
          w={"100%"}
          h={"180px"}
          className="relative w-full h-[180px]">
          <chakra.img
            objectFit={"cover"}
            borderRadius={"0.5rem"}
            w={"100%"}
            h={"100%"}
            src={image}
            alt={name}
          />
          <Flex
            pos={"absolute"}
            inset={"0px"}
            margin={"0.75rem"}
            justifyContent={"flex-end"}>
            <Flex
              borderRadius={"9999px"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              w={"2rem"}
              h={"2rem"}
              onClick={() => window.open(source_code_link, "_blank")}>
              <chakra.img
                objectFit={"contain"}
                maxW={"100%"}
                h={"auto"}
                src={githubIcon}
                alt="github"
              />
            </Flex>
          </Flex>
        </Box>

        <Box mt={"0.75rem"}>
          <chakra.h3 className="text-white font-bold text-[20px]">
            {name}
          </chakra.h3>
          <p className="mt-2 text-secondary text-[14px] leading-[18px]">
            {description.length > 250
              ? `${description.substring(0, 250) + "..."}`
              : description}
          </p>
        </Box>
        <div className="mt-2 flex flex-wrap gap-1"></div>
        <div className="mt-3 flex justify-center items-center">
          <a
            className="shadow-md shadow-primary m-3 p-2 bg-tertiary w-[60%] rounded-lg flex justify-center"
            href={demo_link}
            target="_blank">
            See the Demo
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Flex w={"100%"} className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"></motion.p>
      </Flex>

      <Flex flexWrap={"wrap"} gap={"1.75rem"} mt={"5rem"}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Flex>
    </>
  );
};

export default SectionWrapper(Works, "");
