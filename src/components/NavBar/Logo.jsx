import React from "react";
import { Image, Text, Flex, Center } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Flex>
      <Image src="/logo.png" alt="Logo" boxSize="75px" />
      <Center>
        <Text>Youna Noynaert</Text>
      </Center>
    </Flex>
  );
}
