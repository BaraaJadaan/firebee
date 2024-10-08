import { Box, Flex, Button, HStack, IconButton, Avatar, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" boxShadow="sm">
      <Flex h={20} alignItems="center" justifyContent="space-between" maxW="1400px" mx="auto" px={4}>
        <HStack as="nav">
          <Box cursor="pointer">
            <img src={logo} alt="Logo" style={{ width: '120px' }} />
          </Box>
          <HStack ml={10} spacing={10} display={{ base: 'none', md: 'flex' }}>
            <Box opacity="80%" cursor="pointer">How It Works</Box>
            <Box opacity="80%" cursor="pointer">Signals</Box>
            <Box opacity="80%" cursor="pointer">Reviews</Box>
            <Box opacity="80%" cursor="pointer">Blog</Box>
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <Button
            borderRadius="30px"
            color="white"
            bg="green.300"
            fontWeight="20"
            variant="solid"
            px={8}
            py={6}
            mr={7}
            _hover={{ bg: 'green.400' }} // Change the hover color
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Buy Now
          </Button>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="Open Menu"
            icon={<Avatar size="sm" bg="blue.100" />}
            display={{ base: 'none', md: 'inline-flex' }}
          />
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display={{ base: 'inline-flex', md: 'none' }}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <img src={logo} alt="Logo" style={{ width: '80px' }} />
            </DrawerHeader>
            <DrawerBody>
              <Box onClick={onClose} mb={4} cursor="pointer">How It Works</Box>
              <Box onClick={onClose} mb={4} cursor="pointer">Signals</Box>
              <Box onClick={onClose} mb={4} cursor="pointer">Reviews</Box>
              <Box onClick={onClose} mb={4} cursor="pointer">Blog</Box>
              <Button
                borderRadius="30px"
                color="white"
                bg="green.300"
                fontWeight="20"
                variant="solid"
                w="full"
                mt={4}
                _hover={{ bg: 'green.400' }}
              >
                Buy Now
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}

export default Navbar;
