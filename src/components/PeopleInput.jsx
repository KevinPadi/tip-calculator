import {
  Box,
  FormLabel,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftElement,
  FormControl,
  Flex,
  FormHelperText,
  FormErrorMessage,
  Spacer,
} from "@chakra-ui/react";

export function PeopleInput({
  inputName,
  icon,
  handlePeopleChange,
  peopleNumber,
}) {
  const isError = peopleNumber === "0";

  return (
    <Box>
      <FormControl isInvalid={isError}>
        <Flex>
          <FormLabel fontSize="sm" color="hsl(186, 14%, 43%)">
            {inputName}
          </FormLabel>
          <Spacer />
          {!isError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage fontSize="14px">Can't be zero</FormErrorMessage>
          )}
        </Flex>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={icon} />
          <NumberInput
            value={peopleNumber}
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
              onChange={handlePeopleChange}
            />
          </NumberInput>
        </InputGroup>
      </FormControl>
    </Box>
  );
}
