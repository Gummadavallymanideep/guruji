import React from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Homepage from "./Homepage";

function App(){
  return(
    <div>
      <ChakraBaseProvider>
        <Homepage />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;