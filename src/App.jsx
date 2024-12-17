import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return <ChakraProvider>
    <Layout />
  </ChakraProvider>;
}

export default App;
