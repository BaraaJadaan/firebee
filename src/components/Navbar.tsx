import { Box, Flex, Button, HStack, IconButton, Avatar } from '@chakra-ui/react';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <Box bg={'white'}boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1400px" mx="auto">
        {/* Navigation Links and Logo */}
        <HStack as="nav" spacing={10}>
          <Box><img src={logo} alt="Logo" style={{ width: '100px' }} /></Box>
          <Box opacity={'80%'}>How It Works</Box>
          <Box opacity={'80%'}>Signals</Box>
          <Box opacity={'80%'}>Reviews</Box>
          <Box opacity={'80%'}>Blog</Box>
        </HStack>

        {/* Buy Now Button and Profile Icon */}
        <Flex alignItems="center">
          <Button
            borderRadius='30px'
            color={'white'}
            bg={"green.300"}
            fontWeight={'20'}
            variant="solid"
            px={8}
            py={6}
            mr={7}
          >
            Buy Now
          </Button>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="Open Menu"
            icon={<Avatar size={'sm'} bg={'blue.100'} />}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
