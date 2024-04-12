import { Box, Flex, Heading, Image, Link, Text, VStack, Button, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header with band imagery */}
      <Flex direction="column" align="center" justify="center" bg="black" color="white" p={10}>
        <Image src="https://images.unsplash.com/photo-1575343661961-396d02abf317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwRmFiaWFuJTIwYW5kJTIwdGhlJTIwTWFjaGluZXN8ZW58MHx8fHwxNzEyOTYyMjA4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>
          Fabian and the Machines
        </Heading>
        <Text fontSize="xl">Join the Revolution of Sound!</Text>
      </Flex>

      {/* Tour Dates Section */}
      <VStack spacing={4} p={8} align="stretch">
        <Heading as="h2" size="lg">
          Tour Dates
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">New York</Heading>
          <Text mt={4}>March 20, 2023 - Madison Square Garden</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Los Angeles</Heading>
          <Text mt={4}>April 15, 2023 - The Wiltern</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Chicago</Heading>
          <Text mt={4}>May 5, 2023 - Chicago Theatre</Text>
        </Box>
      </VStack>

      {/* YouTube Video Embed */}
      <Flex justify="center" p={8}>
        <Box as="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" allowFullScreen />
      </Flex>

      {/* Social Media Links */}
      <Flex justify="center" p={4} gap={6}>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} w={8} h={8} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} w={8} h={8} />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} w={8} h={8} />
        </Link>
        <Link href="https://youtube.com" isExternal>
          <Icon as={FaYoutube} w={8} h={8} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
