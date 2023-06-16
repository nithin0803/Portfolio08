import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import "./componentStyle.scss";
import { chakra } from "@chakra-ui/react";

function Sectiontitle(props) {
  const { title, subTitle } = props;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="heading noselect"
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}>
        <chakra.span
          opacity="0.5"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}>
          {subTitle}
        </chakra.span>
        <chakra.h2
          className="titleStyle"
          fontSize="6rem"
          lineHeight="1"
          letterSpacing="0.05rem"
          style={{ fontFamily: "Philosopher, sans-serif " }}>
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </chakra.h2>
      </m.div>
    </LazyMotion>
  );
}

export default Sectiontitle;
