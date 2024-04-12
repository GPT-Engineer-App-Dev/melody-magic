import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" p={5}>
      <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MHx8fHwxNzEyOTYyMjMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Concert Stage" boxSize="100%" objectFit="cover" filter="brightness(50%)" />
      <Flex direction="column" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="full" p={4}>
        <Text fontSize="6xl" fontWeight="bold" color="white" bg="blackAlpha.700" p={3}>
          Fabian and the Machines
        </Text>
        <Text fontSize="2xl" color="gray.300" mt={3} bg="blackAlpha.600" p={2}>
          Dive into the sound of tomorrow
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="pink" size="lg" mt={5}>
          Get Tickets
        </Button>
        <Button leftIcon={<FaMusic />} colorScheme="teal" size="lg" mt={3}>
          Listen Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
