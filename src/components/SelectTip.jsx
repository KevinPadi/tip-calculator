import {
  Box,
  FormLabel,
  NumberInput,
  NumberInputField,
  Grid,
} from "@chakra-ui/react";
import { Buttons } from "./Buttons";

export function SelectTip({ labelName, handleTipClick, handleCustomChange }) {
  return (
    <Box p="10px">
      <FormLabel color="hsl(186, 14%, 43%)" p="0" fontSize="14px">
        {labelName}
      </FormLabel>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={3}
      >
        <Buttons
          buttonValue="5"
          handleTipClick={handleTipClick}
          buttonName="5%"
        />
        <Buttons
          buttonValue="10"
          handleTipClick={handleTipClick}
          buttonName="10%"
        />
        <Buttons
          buttonValue="15"
          handleTipClick={handleTipClick}
          buttonName="15%"
        />
        <Buttons
          buttonValue="25"
          handleTipClick={handleTipClick}
          buttonName="25%"
        />
        <Buttons
          buttonValue="50"
          handleTipClick={handleTipClick}
          buttonName="50%"
        />
        <NumberInput focusBorderColor="hsl(172, 67%, 45%)">
          <NumberInputField
            p={2}
            fontSize="xl"
            textAlign="center"
            placeholder="Custom"
            color="hsl(183, 100%, 15%)"
            onChange={handleCustomChange}
          />
        </NumberInput>
      </Grid>
    </Box>
  );
}
