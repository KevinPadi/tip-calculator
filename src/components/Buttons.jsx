import { Button } from "@chakra-ui/react";

export function Buttons({ buttonName, handleTipClick, buttonValue }) {
  return (
    <Button
      fontSize="xl"
      p="5"
      bg="hsl(183, 100%, 15%)"
      color="white"
      _hover={{
        bg: "hsl(185, 41%, 84%)",
        color: "hsl(183, 100%, 15%)",
      }}
      _focus={{
        bg: "hsl(172, 67%, 45%)",
        color: "hsl(183, 100%, 15%)",
        outline: "none",
      }}
      value={buttonValue}
      onClick={handleTipClick}
    >
      {buttonName}
    </Button>
  );
}
