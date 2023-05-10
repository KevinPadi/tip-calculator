import { Box, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Box>
      <Heading
        color="hsl(180, 100%, 15%)"
        letterSpacing={10}
        as="h1"
        size="xl"
        fontFamily="Space Mono"
      >
        SPLI
        <br />
        TTER
      </Heading>
    </Box>
  );
}
