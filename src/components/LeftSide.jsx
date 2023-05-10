import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { BillInput } from "./BillInput";
import { SelectTip } from "./SelectTip";
import { DollarIcon } from "../assets/icons/DolarIcon";
import { PersonIcon } from "../assets/icons/PersonIcon";
import { PeopleInput } from "./PeopleInput";

export function LeftSide({
  handleBillChange,
  billValue,
  handlePeopleChange,
  peopleNumber,
  handleTipClick,
  handleCustomChange,
}) {
  return (
    <Flex flexDir={"column"} w={["100%", "100%", "50%"]}>
      <BillInput
        billValue={billValue}
        handleBillChange={handleBillChange}
        inputName="Bill"
        icon={<DollarIcon />}
      />
      <Spacer />
      <SelectTip
        handleTipClick={handleTipClick}
        handleCustomChange={handleCustomChange}
        labelName="Select Tip %"
      />
      <Spacer />
      <PeopleInput
        peopleNumber={peopleNumber}
        handlePeopleChange={handlePeopleChange}
        inputName="Number of People"
        icon={<PersonIcon />}
      />
    </Flex>
  );
}
