import { ChakraProvider, Flex, Heading, Input, Button } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="someone@email.com" variant="filled" mb={3} type="email" />
            <Input placeholder="********" variant="filled" mb={3} type="password" />
            <Button colorScheme="teal">LOGIN</Button>
          </Flex>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
