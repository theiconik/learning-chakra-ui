import "./App.css";
import LoginCard from "./learning/Logincard"
import {ChakraProvider} from "@chakra-ui/react"
import Card from "./learning/Card"

function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
