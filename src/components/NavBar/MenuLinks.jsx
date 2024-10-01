import { Stack, Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

export default function MenuLinks({ isOpen }) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="#">home</MenuItem>
        <MenuItem to="#">selected work</MenuItem>
        <MenuItem to="#">resume</MenuItem>
        <MenuItem to="#">get in touch</MenuItem>
      </Stack>
    </Box>
  );
}
