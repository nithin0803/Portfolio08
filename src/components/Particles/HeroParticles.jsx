import { Box } from "@chakra-ui/react";
import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";
import "../componentStyle.scss";

const HeroParticles = () => {
  return (
    <Box w={"100%"} height={"100vh"} minHeight={"800px"}>
      <ParticlesComponent id="hero-particles" particlesOptions={heroOptions} />
    </Box>
  );
};

export default HeroParticles;
