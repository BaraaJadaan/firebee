import { Box, Flex, Image, Text, List, ListItem, ListIcon, Heading, HStack, Divider, Grid, GridItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import product from '../assets/product.png';
import gq from '../assets/gq.png';
import guardian from '../assets/guardian.png';
import nyt from '../assets/nyt.png';
import mashable from '../assets/mashable.png';
import cnn from '../assets/cnn.png';
import wsj from '../assets/wsj.png';

function Content() {
  const logos = [
    { src: gq, alt: "GQ" },
    { src: guardian, alt: "The Guardian" },
    { src: nyt, alt: "The New York Times" },
    { src: mashable, alt: "Mashable" },
    { src: cnn, alt: "CNN" },
    { src: wsj, alt: "The Wall Street Journal" }
  ];

  const itemsInBox = [
    "1 Firebee headband",
    "1 Charging cable",
    "1 User manual",
  ];

  return (
    <Box p={8} pt={20} mt={10} textAlign="center">
      <Heading fontSize={"4xl"} color="gray.700" mb={8}>
        What's in the box?
      </Heading>

      <Image 
        src={product} 
        alt="What's in the box?" 
        mb={8} 
        mx="auto" 
        maxW={{ base: "100%", md: "600px" }} 
      />

      <Text fontSize={"md"} color="gray.600" mb={4} letterSpacing={3}>
        FEATURED ON
      </Text>
      <Grid 
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }} 
        gap={3}
        mb={8}
        justifyItems="center"
        alignItems="center"
        maxW={'670px'}
        mx="auto"
      >
        {logos.map((logo, index) => (
          <GridItem key={index}>
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              minW={{ base: "60px" ,lg: "100px" }} 
              objectFit="contain"
            />
          </GridItem>
        ))}
      </Grid>

      <Flex justify="center" align="center" direction="column"> 
        <Divider mb={7} borderWidth="1px" borderColor="gray.300" maxW="700px" w="80%" />

        <HStack 
          justify="center" 
          spacing={{ base: 4, md: 8, lg: 20 }} 
          fontSize={"xl" } 
          fontWeight="lighter" 
          flexDirection={{ base: "column", md: "row" }} 
        >
          {itemsInBox.map((item, index) => (
            <List key={index}>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {item}
              </ListItem>
            </List>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Content;
