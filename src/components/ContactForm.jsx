import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { chakra, Box, Flex, Center } from "@chakra-ui/react";
import "./componentStyle.scss";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    const serviceID = "default_service";
    const templateID = "template_u9lrcdj";
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, "tOmOeZMXweINdR23K").then(
      (result) => {
        document.getElementById("contact_form").reset();
        setIsSent(true);
        alert("Thank you I will get back to you as soon as possible ! (:");
      },
      (error) => {
        console.error(error);
        setIsSent(false);
      }
    );
  };

  return (
    <Box
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
        width: "80%",
        height: "96%",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      }}>
      <Box boxShadow={"xs"}>
        <h2 style={{ fontFamily: "Teko, sans-serif" }} className="message">
          <Typewriter words={["Let's get in touch!"]} loop={true} />
          &nbsp;
        </h2>
      </Box>
      <Flex w={"100%"} justifyContent={"center"}>
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200">
          <Flex w={"100%"} flexDirection={"column"}>
            <label htmlFor="firstname">First Name</label>
            <input
              className="form__input"
              placeholder="Enter your First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </Flex>
          <Flex w={"100%"} flexDirection={"column"}>
            <label htmlFor="lastname">Last Name</label>
            <input
              className="form__input"
              placeholder="Enter your Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </Flex>
          <Flex w={"100%"} flexDirection={"column"}>
            <label htmlFor="email">E-mail</label>
            <input
              className="form__input"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </Flex>
          <Flex w={"100%"} flexDirection={"column"}>
            <label>Message</label>
            <textarea
              className="form__input"
              placeholder="Enter your message..."
              name="message"
              required></textarea>
          </Flex>
          <Flex w={"100%"} justifyContent={"center"}>
            <input
              className="form__submit"
              type="submit"
              value={!isSent ? "Send" : "Done!"}
            />
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default ContactForm;
