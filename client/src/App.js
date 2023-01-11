import * as React from "react";
import Frontend from "./components/Frontend/index";
import Test from "./components/Test";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* <Frontend /> */}
      <Test />
    </ChakraProvider>
  );
}

export default App;
