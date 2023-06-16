import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";
import { Flex, chakra } from "@chakra-ui/react";
import "./componentStyle.scss";

const SkillsCards = () => {
  return (
    <Flex>
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card ">
            <div className="card__content">
              <img className="card__image" src={skill.icon} alt={skill.title} />
              <chakra.span
                fontSize="1.25rem"
                lineHeight="1.75rem"
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}>
                {skill.title}
              </chakra.span>
              <chakra.span
                fontSize="0.875rem"
                lineHeight="1.25rem"
                className="card__description"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}>
                {skill.description}
              </chakra.span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </Flex>
  );
};

export default SkillsCards;
