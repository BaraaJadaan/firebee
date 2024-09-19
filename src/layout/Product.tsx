import { useState } from 'react';
import { Box, Flex, Stack, Grid, GridItem, Image, Text, Button, HStack } from '@chakra-ui/react';
import Carousal from '../components/Carousal';
import ProductCard from '../components/ProductCard';
import pay_methods from '../assets/pay_methods.png';
import { StarIcon } from '@chakra-ui/icons';
import perks1 from '../assets/perks1.png';
import perks2 from '../assets/perks2.png';
import perks3 from '../assets/perks3.png';
import perks4 from '../assets/perks4.png';
import standard1 from '../assets/standard1.png';
import standard2 from '../assets/standard2.png';

function Product() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const handleCardSelect = (title: string) => {
    setSelectedCard(title);
  };

  return (
    <Box py={10} bg={'gray.200'}>
      <Flex 
        justifyContent="center" 
        alignItems="flex-start" 
        flexDirection={{ base: 'column', lg: 'row' }} 
        gap={8}
      >
        <Box flex={{ base: '1', lg: '1' }} maxW={{ base: '100%', lg: '50%' }} mx="auto">
          <HStack ml={{ base: 4, lg: 20 }} spacing={4} position={'relative'} mb={{ base: 8, lg: 0 }}>
            <Image src={standard1} alt="Certification 1" boxSize="80px" objectFit="contain" />
            <Image src={standard2} alt="Certification 2" boxSize="80px" objectFit="contain" />
          </HStack>

          <Carousal />

          <Box mt={'120px'} ml={{ base: 4, lg: 10 }}>
            <Grid 
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}  
              gap={6}
            >
              <GridItem display={'flex'} gap={8} alignItems={'center'}>
                <Image w={'50px'} src={perks1} alt="perks1" objectFit={'contain'}/>
                <Text fontSize="md">Signal Catalogue Updates Included</Text>
              </GridItem>
              <GridItem display={'flex'} gap={8} alignItems={'center'}>
                <Image w={'50px'} src={perks2} alt="perks2" objectFit={'contain'}/>
                <Text fontSize="md">Free Shipping within USA</Text>
              </GridItem>
              <GridItem display={'flex'} gap={8} alignItems={'center'}>
                <Image w={'50px'} src={perks3} alt="perks1" objectFit={'contain'}/>
                <Text fontSize="md">Signal Catalogue Updates Included</Text>
              </GridItem>
              <GridItem display={'flex'} gap={8} alignItems={'center'}>
                <Image w={'50px'} src={perks4} alt="perks1" objectFit={'contain'}/>
                <Text fontSize="md">Customer Support via E-mail, Phone, and Chat</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        <Stack flex={{ base: '1', lg: '1' }} mx={{ base: '2%', lg: '5%' }} maxW={{ base: '100%', lg: '50%' }} >
          <Text fontSize="3xl" fontWeight="bold">Firebee Headband</Text>
          <HStack spacing={3} alignItems="center" >
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} color="yellow.500" />
            ))}
            <Text fontSize="lg">(267 Reviews)</Text>
          </HStack>
          <Text fontSize="md" color="gray.500">
            Order today and receive your Firebee by June 15th, 2021
          </Text>
          <ProductCard
            title="Firebee Starter Kit"
            price={379.00}
            oldPrice={999.00}
            perks={[
              "Access to 7 signals (and future signal releases)",
              "Firebee Headband",
              "$19/month membership, first 2 months free",
            ]}
            description="The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. Membership can be cancelled anytime. No contracts. Satisfaction guaranteed"
            isMostPopular={true}
            isSelected={selectedCard === "Firebee Starter Kit"}
            onCardSelect={handleCardSelect}
          />
          <ProductCard
            title="Founder's Kit"
            price={799.00}
            perks={[
              "Access to 7 signals (and future signal releases)",
              "Firebee Headband",
              "No Monthly Membership",
            ]}
            description="The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders kit can be paid through Affirm allowing customers to make small payments of $73 a month."
            isSelected={selectedCard === "Founder's Kit"}
            onCardSelect={handleCardSelect}
          />
          <Button
            borderRadius='30px'
            color={'white'}
            bg={"green.300"}
            fontWeight={'20'}
            variant="solid"
            py={6}
            mt={3}
            _hover={{ bg: 'green.400' }}
          >
            Buy Now
          </Button>
          <HStack justifyContent="center" mt={3}>
            <Image src={pay_methods} w='60%' />
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Product;
