import { Box, Flex, Image, Text, Stack, List, ListItem, ListIcon, Heading, HStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import band_lady from '../assets/band_lady.png';

function Benefits() {
  const benefits = [
    { text: "Can’t sleep? Turn on the", signal: "deep sleep", color: "purple.600" },
    { text: "Feeling tired? Turn on the", signal: "alert", color: "red.500" },
    { text: "Feeling anxious? Turn on the", signal: "calm", color: "teal.500" },
    { text: "Feeling unproductive? Turn on the", signal: "focus", color: "blue.500" },
    { text: "Feeling blue? Turn on the", signal: "happy", color: "purple.400" },
  ];

  return (
    <Box p={8} pt={20} mt={20} bg="gray.200">
      <Flex justifyContent="center" alignItems="center" gap={8}>
        <Stack spacing={6}>
          <Heading fontSize="6xl" textAlign={'center'} color="gray.700" fontWeight={'lighter'}>What will Firebee do for me?</Heading>
          <Text fontSize="lg" color="gray.600" textAlign={'center'}>
            Firebee will help you gently nudge yourself into a different mental state
          </Text>
          <HStack flexDirection={{ base: 'column', lg: 'row' }} spacing={{ base: '0', lg: '50' }}>
            <Image src={band_lady} alt="Firebee Headband" boxSize={'450px'} objectFit="contain" />
            <List spacing={8} fontSize="2xl" fontWeight='lighter'>
              {benefits.map((benefit, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>
                    {benefit.text} <Text as="span" fontWeight="bold" color={benefit.color}>{benefit.signal}</Text> signal
                  </Text>
                </ListItem>
              ))}
            </List>
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Benefits;
