import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
          <Image src={logo} boxSize="60px" padding="10px" />
          <Text fontSize="2xl" fontFamily="monospace">Video Discovery App</Text>
    </HStack>
  );
};

export default NavBar;
