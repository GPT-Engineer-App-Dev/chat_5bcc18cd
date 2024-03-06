import React from "react";
import { Box, Flex, Input, VStack, Text, Avatar, Divider, InputGroup, InputLeftElement, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { FaSearch, FaEllipsisV, FaUserCircle, FaRegSmile } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex h="100vh">
      <Box w={["100%", "100%", "300px"]} bg="gray.100" p={4} display={{ base: "none", md: "block" }}>
        {/* Sidebar Search */}
        <InputGroup mb={4}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search or start new chat" />
        </InputGroup>
        {/* Sidebar Contacts */}
        <VStack divider={<Divider />} spacing={4} align="stretch">
          <Box w="100%" h="75px" _hover={{ bg: "gray.200" }} cursor="pointer">
            <Flex align="center" p={2}>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MDk3MzM0NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" mr={3} />
              <Box flex="1">
                <Text fontWeight="bold">Alice Smith</Text>
                <Text fontSize="sm">Hey, how are you?</Text>
              </Box>
            </Flex>
          </Box>
          {/* More contacts can be added here */}
        </VStack>
      </Box>

      <Box w={["100%", "100%", "300px"]} bg="gray.100" p={4} display={{ base: "block", md: "none" }}>
        <Button ref={btnRef} onClick={onOpen}>
          Contacts
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Contacts</DrawerHeader>
            <DrawerBody>
              {/* Sidebar Contacts for mobile */}
              <VStack divider={<Divider />} spacing={4} align="stretch">
                {/* Contacts will be similar to above */}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Flex flex="1" direction="column" p={4}>
        {/* Chat Header */}
        <Flex justify="space-between" align="center" mb={4}>
          <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MDk3MzM0NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" mr={3} />
          <Flex align="center">
            <Text fontWeight="bold" mr={4}>
              Alice Smith
            </Text>
            <Button size="sm" variant="ghost">
              <FaEllipsisV />
            </Button>
          </Flex>
        </Flex>
        {/* Chat Messages */}
        <VStack flex="1" spacing={4} align="stretch" mb={4}>
          {/* Messages will go here */}
        </VStack>
        {/* Chat Input */}
        <Flex align="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaRegSmile color="gray.300" />} />
            <Input placeholder="Type a message" />
          </InputGroup>
          <Button ml={2} colorScheme="blue">
            Send
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
