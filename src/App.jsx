import { Center } from "@chakra-ui/react";
import { TipApp } from "./components/TipApp";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
function App() {
  return (
    <Center h="100vh">
      <Flex gap={[3, 3, 20]} align="center" direction="column">
        <Header />
        <TipApp />
      </Flex>
    </Center>
  );
}

export default App;
