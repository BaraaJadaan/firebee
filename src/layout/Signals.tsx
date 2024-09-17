import { Box, Grid, GridItem, Text, Stack, Image, Heading, HStack, Flex } from '@chakra-ui/react';
import bedtime from '../assets/bedtime.png';
import deep from '../assets/deep_sleep.png';
import relax from '../assets/relax.png';
import calm from '../assets/calm.png';
import focus from '../assets/focus.png';
import happy from '../assets/happy.png';
import alert from '../assets/alert.png';
import discover from '../assets/discover.png';
import wave from '../assets/wave.png';


const signalsData = [
  { title: 'Bedtime', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: bedtime },
  { title: 'Deep Sleep', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: deep },
  { title: 'Relax', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: relax },
  { title: 'Calm', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: calm },
  { title: 'Focus', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: focus },
  { title: 'Happy', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: happy },
  { title: 'Alert', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: alert },
  { title: 'discover', description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.', image: discover },
];

function Signals() {
  return (
    <Box position={'relative'}>
        <Flex>
            <Image src={wave} position={'absolute'} left={0} zIndex={-1} />
        </Flex>
    <Box p={8} mt={20} mx={{base: 30, lg: 40}} >
      <Stack textAlign="center" mb={10}>
        <Heading fontSize="4xl">Firebee Signals</Heading>
        <Text fontSize="lg" color="gray.600">A signal for every situation</Text>
      </Stack>

      <Grid 
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
        gap={8}
      >
        {signalsData.map((signal, index) => (
          <GridItem 
            key={index} 
            p={4} 
            bg="gray.100" 
            borderRadius="lg" 
            boxShadow="sm" 
          >
            <HStack spacing={5}>
                <Image src={signal.image} alt={signal.title} boxSize="90px" mx="auto" mb={4} />
                <Text fontSize="md" color="gray.600">{signal.description}</Text>
            </HStack>
          </GridItem>
        ))}
        <Flex>
            <Image src={wave} position={'absolute'} right={0} zIndex={-1} />
        </Flex>
      </Grid>
    </Box>
    </Box>
  );
}

export default Signals;
