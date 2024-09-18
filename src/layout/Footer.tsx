import { Box, Grid, Stack, Text, Link, HStack, Icon, Divider, Image } from '@chakra-ui/react';
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import logo_footer from '../assets/logo_footer.png';
import flare from '../assets/flare.png';

function Footer() {
  return (
    <Box bg="gray.900" color="white" mt={12} position="relative">
      <Box bg="linear-gradient(90deg, rgba(139,242,181,1) 0%, rgba(53,200,235,1) 100%)" h={3} w="100%" />
      
      {/* Top Section */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap={8}
        textAlign={{ base: 'center', md: 'left' }}
        px={{ base: 4, md: 12 }}
        mb={8}
        mt={10}
      >
        {/* About Section */}
        <Stack spacing={2}>
          <Text fontWeight="bold">About</Text>
          <Link href="#" _hover={{ color: 'gray.400' }}>Home</Link>
          <Link href="#" _hover={{ color: 'gray.400' }}>Product</Link>
        </Stack>

        {/* Support Section */}
        <Stack spacing={2}>
          <Text fontWeight="bold">Support</Text>
          <Link href="#" _hover={{ color: 'gray.400' }}>Activate</Link>
          <Link href="#" _hover={{ color: 'gray.400' }}>Login</Link>
        </Stack>

        {/* Social Media Section */}
        <Stack>
          <Text fontWeight="bold">Find Us On</Text>
          <HStack justifyContent={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Link href="#"><Icon as={FaYoutube} boxSize={6} /></Link>
            <Link href="#"><Icon as={FaTwitter} boxSize={6} /></Link>
            <Link href="#"><Icon as={FaFacebook} boxSize={6} /></Link>
            <Link href="#"><Icon as={FaInstagram} boxSize={6} /></Link>
            <Link href="#"><Icon as={FaPinterest} boxSize={6} /></Link>
          </HStack>
        </Stack>
      </Grid>

      <Divider borderColor="gray.600" />

      {/* Bottom Section */}
      <Grid
      
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        alignItems="center"
        textAlign={{ base: 'left' }}
        mt={8}
        px={{ base: 4, md: 12 }}
        pb={10}
      >
        {/* Logo and Copyright */}
        <Stack spacing={4} color="gray.400">
          <Box><img src={logo_footer} alt="Logo" style={{ width: '200px' }} /></Box>
          <Text fontSize="sm">© 2020 Firebee Technologies, Inc. All rights reserved.</Text>
          <Text fontSize="xs">
            The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </Text>
        </Stack>

        {/* Privacy Policy and Terms */}
        <Text fontSize="sm" color="gray.400" textAlign={{ base: 'center', md: 'right' }} mt={{ base: 4, md: 0 }}>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </Text>
      </Grid>

      {/* Gradient Background */}
      <Image
        src={flare}
        zIndex={-1}
        w="100%"
        position="absolute"
        bottom={0}
        left={0}
      />
    </Box>
  );
}

export default Footer;
