import {
  HStack,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";

export function TipTotals({ label, price }) {
  return (
    <HStack>
      <Stat align="left">
        <StatLabel color="hsl(0, 0%, 100%)">{label}</StatLabel>
        <StatHelpText color="hsl(184, 14%, 56%)" fontSize="xs">
          / person
        </StatHelpText>
      </Stat>
      <Stat align="right">
        <StatNumber color="hsl(172, 67%, 45%)" fontSize="40px">
          ${price}
        </StatNumber>
      </Stat>
    </HStack>
  );
}
