import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100vw"
      p={4}
      bg="#fffcf5"
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
