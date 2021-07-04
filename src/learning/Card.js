import React from "react";
import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
  Image,
  Badge,
  Text,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Card() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("whitesmoke", "gray.700");
  const priceColor = useColorModeValue("gray", "gray.100")

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Flex direction="column">
        <Box
          w={['300px', '300px', '400px', '400px']}
          rounded="20px"
          overflow="hidden"
          boxShadow="lg"
          bg={formBackground}
        >
          <Image src="./featured.png" />
          <Box p={5}>
            <Stack isInline align="baseline">
              <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
                NEW
              </Badge>
              <Badge
                variant="solid"
                colorScheme="green"
                rounded="full"
                px={2}
                mx={2}
              >
                CLOUD IO
              </Badge>
              <Text
                fontSize="13px"
                color="gray.500"
                letterSpacing="wide"
                fontWeight="500"
                textTransform="uppercase"
              >
                2 hrs &bull; 12 lectures
              </Text>
            </Stack>
            <Text as="h2" fontWeight="semibold" fontSize="lg" my={2}>
              Introduction to Secret Manager
            </Text>
            <Text isTruncated fontWeight="light" fontSize="md">
              Lorem ipsum dolor, sit amet consectetur
              <br /> adipisicing elit. Doloribus fugiat molestiae,
              <br /> repellendus officiis aut maiolto nonft illo repellat quod
              similique illum ducimus velit minus voluptatibus aliquam
              consectetur fugit qui itaque!
            </Text>
            <Stack
              isInline
              align="self-start"
              justifyContent="space-between"
              px={1}
            >
              <Text fontWeight="bold" fontSize="lg" color={priceColor}>
                $3
              </Text>
              <Box as="span" px={1.5}>
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon color="#e6aa67" key={i} />
                  ))}
                <StarIcon color="gray" />
              </Box>
            </Stack>
            <Box textAlign="center">
              <Button
                bg="#38a169"
                color="white"
                size="md"
                mt={3}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                ENROLL
              </Button>
              <Button
                bg='gray'
                color='white'
                size="md"
                mt={3}
                mx={2}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                onClick={toggleColorMode}
              >
                SEE LATER
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Card;
