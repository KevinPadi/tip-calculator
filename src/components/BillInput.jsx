import {
  Box,
  FormLabel,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
export function BillInput({ inputName, icon, handleBillChange, billValue }) {
  return (
    <Box>
      <FormLabel fontSize="14px" color="hsl(186, 14%, 43%)">
        {inputName}
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={icon} />
        <NumberInput
          value={billValue}
          focusBorderColor="hsl(172, 67%, 45%)"
          w="100%"
        >
          <NumberInputField
            bg="hsl(189, 41%, 97%)"
            color="hsl(183, 100%, 15%)"
            border="none"
            fontSize="xl"
            textAlign="right"
            placeholder="0"
            onChange={handleBillChange}
          />
        </NumberInput>
      </InputGroup>
    </Box>
  );
}
