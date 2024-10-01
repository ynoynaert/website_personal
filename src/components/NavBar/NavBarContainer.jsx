import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100vw" // Full width
      p={4} // Adjust padding if needed
      bg="#fffcf5"
      position="fixed"
      top="0"
      left="0"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
