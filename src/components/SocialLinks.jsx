import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";
import { Flex, Link } from "@chakra-ui/react";
import "./componentStyle.scss";

const SocialLinks = () => {
  return (
    <Flex
      w={"100%"}
      h={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"0.75rem"}
      padding={"1.5rem"}
      backgroundColor={"#1F2833"}>
      <Link href="https://github.com/nithin0803" target="_blank">
        <FontAwesomeIcon className="socialLinks" icon={icons.faGithub} />
      </Link>
      <Link href="mailto:nithin08.official@gmail.com" target="_blank">
        <FontAwesomeIcon className="socialLinks" icon={icons.faEnvelope} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/nithin-b-85ba4016b/"
        target="_blank">
        <FontAwesomeIcon className="socialLinks" icon={icons.faLinkedin} />
      </Link>
    </Flex>
  );
};

export default SocialLinks;
