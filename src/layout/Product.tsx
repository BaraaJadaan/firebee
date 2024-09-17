import { Box, Flex, Stack, Button, Image } from '@chakra-ui/react';
import Carousal from '../components/Carousal';
import ProductCard from '../components/ProductCard';
import pay_methods from '../assets/pay_methods.png';

function Product() {
  return (
    <Box p={4}>
      <Flex justifyContent="center" alignItems="flex-start">
        {/* Carousel Section */}
        <Box flex="1" maxW="700px">
          <Carousal />
        </Box>
        
        {/* Product Cards Section */}
        <Stack flex="1" mx={30}>
          <ProductCard
            title="Firebee Starter Kit"
            price={379.00}
            oldPrice={999.00}
            perks={[
              "Access to 7 signals (and future signal releases)",
              "Firebee Headband",
              "$19/month membership, first 2 months free",
            ]}
            description="The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. Membership can be cancelled anytime. No contracts. Satisfaction guaranteed."
            isMostPopular={true}
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
          />
          <Button
            borderRadius='30px'
            color={'white'}
            bg={"green.300"}
            fontWeight={'20'}
            variant="solid"
            mx={10}
            py={6}
          >
            Buy Now
          </Button>
          <Image src={pay_methods} w='60%' />
        </Stack>
        
      </Flex>
    </Box>
  );
}

export default Product;
