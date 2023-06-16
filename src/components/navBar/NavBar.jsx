import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";
import { navLinks } from "../../Constants/constants";
import { nLogo } from "../../assets";
function NavBar() {
  const [isActive, setActive] = useState("");
  return (
    <Flex
      p="1.25rem 4rem"
      alignItems="center"
      pos="fixed"
      w="100%"
      zIndex={20}
      top={0}>
      <Flex
        m="0 auto"
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Image
            w={"2rem"}
            h={"2.25rem"}
            objectFit={"contain"}
            src={nLogo}
            alt={"Nithin"}
          />
        </Link>
        <Breadcrumb separator={""}>
          {navLinks.map((navItems, key) => {
            return (
              <BreadcrumbItem
                style={{ color: "#FFFFFF" }}
                fontWeight={500}
                cursor={"pointer"}
                fontSize={"18px"}
                gap={"2.5rem"}
                className={`nav__items ${
                  isActive === navItems.title ? "nav__active" : ""
                }`}
                key={key}
                onClick={() => {
                  setActive(navItems.title);
                }}>
                <BreadcrumbLink href={`#${navItems.id}`}>
                  {navItems.title}{" "}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </Flex>
    </Flex>
  );
}

export default NavBar;
