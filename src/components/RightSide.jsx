import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { TipTotals } from "./TipTotals";

export function RightSide({ tipAmount, totalAmount, resetBtn }) {
  return (
    <Flex
      flexDir={"column"}
      w={["100%", "100%", "50%"]}
      h="100%"
      borderRadius="xl"
      p={8}
      bg="hsl(183, 100%, 15%)"
    >
      <TipTotals label="Tip Amount" price={tipAmount} />
      <TipTotals label="Total" price={totalAmount} />
      <Spacer />
      <Button
        w="100%"
        fontSize="xl"
        bg="hsl(172, 67%, 45%)"
        color="hsl(183, 100%, 15%)"
        _hover={{
          bg: "hsl(185, 41%, 84%)",
          color: "hsl(183, 100%, 15%)",
          border: "1px solid hsl(185, 41%, 84%)",
        }}
        _focus={{
          bg: "hsl(172, 67%, 45%)",
          color: "hsl(183, 100%, 15%)",
          outline: "none",
        }}
        onClick={resetBtn}
      >
        RESET
      </Button>
    </Flex>
  );
}
