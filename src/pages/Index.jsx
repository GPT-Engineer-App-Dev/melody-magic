// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Image, Link, Text, VStack, Button, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={10}>
      <Box as="header" w="full" bg="black" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="xl">
            My Band
          </Heading>
          <Flex align="center">
            <Link href="https://facebook.com" isExternal mx={2}>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="https://instagram.com" isExternal mx={2}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://youtube.com" isExternal mx={2}>
              <Icon as={FaYoutube} w={6} h={6} />
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Image src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEyOTYyMTcxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing" />

      <VStack spacing={5} p={5} align="start">
        <Heading as="h2" size="lg">
          Tour Dates
        </Heading>
        <Text>City A - Venue A - 01/01/2024</Text>
        <Text>City B - Venue B - 02/02/2024</Text>
        <Text>City C - Venue C - 03/03/2024</Text>
        <Button rightIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
          Buy Tickets
        </Button>
      </VStack>

      <Box p={5}>
        <Heading as="h3" size="md" mb={3}>
          Watch Our Latest Video
        </Heading>
        <Box position="relative" paddingBottom="56.25%" height="0">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></iframe>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
