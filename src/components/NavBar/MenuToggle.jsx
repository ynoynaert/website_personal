import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: "block", md: "none" }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
  </Box>
);

export default MenuToggle;
