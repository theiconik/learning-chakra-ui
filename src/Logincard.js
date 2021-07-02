import React from "react";
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";


function Logincard() {
  
   const { toggleColorMode } = useColorMode()
   const formBackground = useColorModeValue("gray.100", "gray.700")

   return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="someone@email.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="********" variant="filled" mb={3} type="password" />
        <Button mb={6} colorScheme="teal">
          LOGIN
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color</Button>
      </Flex>
    </Flex>
  );
}

export default Logincard;
