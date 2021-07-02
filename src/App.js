import "./App.css";
import LoginCard from "./Logincard"
import {ChakraProvider} from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <LoginCard />
    </ChakraProvider>
  );
}

export default App;
