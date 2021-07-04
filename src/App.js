import "./App.css";
import LoginCard from "./Logincard"
import {ChakraProvider} from "@chakra-ui/react"
import Card from "./Card"

function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
