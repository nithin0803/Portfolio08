import { m, LazyMotion, domAnimation } from "framer-motion";
import Sectiontitle from "../components/SectionTittle";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import "./style.scss";
import { Box, Flex, chakra } from "@chakra-ui/react";
const Contact = () => {
  return (
    <Flex
      id="contact"
      w={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      className="overflow-hidden-web">
      <Flex w={"70%"} minH={"800px"} flexDir={"column"}>
        <Box w={"100%"}>
          <Sectiontitle title="CONTACT" subTitle="Get in touch" />
        </Box>
        <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="contactForm">
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </LazyMotion>
        </Flex>
      </Flex>
      <Flex w={"100%"} flexDirection={"column"}>
        <SocialLinks />
        <Flex
          justifyContent={"center"}
          color={"rgb(255, 255, 255)"}
          pb={"1rem"}
          bgColor={"#1F2833"}>
          <chakra.span>
            Made by <em>NITHIN B</em>
          </chakra.span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
