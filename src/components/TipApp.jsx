import { Box, Flex } from "@chakra-ui/react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { useState, useEffect } from "react";

export function TipApp() {
  const [billValue, setBillValue] = useState();
  const [peopleNumber, setPeopleNumber] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  useEffect(() => {
    if (billValue > 0 && tipValue > 0 && peopleNumber > 0) {
      setTipAmount(
        parseFloat((billValue * tipValue) / 100 / peopleNumber).toFixed(2)
      );
      setTotalAmount(
        parseFloat(
          (Number(tipAmount) * Number(peopleNumber) + Number(billValue)) /
            Number(peopleNumber)
        ).toFixed(2)
      );
    }
  }, [billValue, tipValue, peopleNumber, tipAmount, totalAmount]);

  const handleBillChange = (e) => {
    let inputBillValue = e.target.value;
    setBillValue(inputBillValue);
  };

  const handlePeopleChange = (e) => {
    let inputPeopleValue = e.target.value;
    setPeopleNumber(inputPeopleValue);
  };

  const handleTipClick = (e) => {
    let tipButtonValue = e.target.value;
    setTipValue(tipButtonValue);
  };

  const handleCustomChange = (e) => {
    let tipButtonValue = e.target.value;
    setTipValue(tipButtonValue);
  };

  const resetBtn = (e) => {
    e.preventDefault();
    setBillValue("");
    setPeopleNumber("");
    setTipValue("");
    setTipAmount("0.00");
    setTotalAmount("0.00");
  };

  return (
    <Flex
      direction={["column", "column", "row"]}
      gap={5}
      bg="white"
      as={Box}
      w={["100%", "100%", 800]}
      h={[600, 600, 400]}
      p={5}
      borderRadius="xl"
    >
      <LeftSide
        handleBillChange={handleBillChange}
        billValue={billValue}
        handlePeopleChange={handlePeopleChange}
        peopleNumber={peopleNumber}
        handleTipClick={handleTipClick}
        handleCustomChange={handleCustomChange}
      />
      <RightSide
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        resetBtn={resetBtn}
      />
    </Flex>
  );
}
