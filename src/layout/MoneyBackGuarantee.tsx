import { Box, Flex, Image, Text, Stack, Divider } from '@chakra-ui/react';
import money_guarantee from '../assets/money_guarantee.png';

function MoneyBackGuarantee() {
  return (
    <Box mx={{base: 30, lg: 60}} py={20}>
      <Flex justifyContent="center" alignItems="center" flexDirection={{base: 'column', lg: 'row' }} gap={6}>
        <Image src={money_guarantee} alt="30 Day Money Back Guarantee" boxSize="200px" />
        
        <Stack spacing={4} textAlign={{ base: 'center', lg: 'left' }}>
          <Text fontSize="4xl" color="gray.600">30 Day Money Back Guarantee</Text>
          <Text fontSize="md" color="gray.600">
            At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase. 
          </Text>
        </Stack>
      </Flex>
      {/* <Divider mt={20} borderWidth="1px" borderColor="gray.300" maxW="800px" mx={'auto'} /> */}
    </Box>
  );
}

export default MoneyBackGuarantee;
