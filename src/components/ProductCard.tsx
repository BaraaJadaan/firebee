import React from 'react';
import { Box, Text, Stack, HStack, Badge, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  perks: string[];
  description: string;
  isMostPopular?: boolean;
  isSelected: boolean;
  onCardSelect: (title: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, oldPrice, perks, description, isMostPopular, isSelected, onCardSelect }) => {

  const handleCardClick = () => {
    onCardSelect(title);
  };

  return (
    <Box
      bg='white'
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      p={4}
      borderColor={isSelected ? 'purple.400' : 'gray.200'}
      boxShadow={isSelected ? '0 0 10px rgba(128, 0, 128, 0.6)' : 'none'}
      onClick={handleCardClick}
      cursor="pointer"
    >
      <Stack spacing={3}>
        <HStack alignItems="center" justifyContent={'space-between'}>
          <Text fontSize="2xl" fontWeight="bold">{title}</Text>
          
          <HStack spacing={4}>
            {oldPrice && (
              <Text as="s" color="gray.500" fontSize="lg" >
                ${oldPrice.toFixed(2)}
              </Text>
            )}
            <Text fontSize="2xl" color="gray.800" fontWeight="bold">
              ${price.toFixed(2)}
            </Text>
          </HStack>
        </HStack>
        {isMostPopular && (
          <Badge bg={'linear-gradient(90deg, rgba(122,0,165,0.7030461842940301) 24%, rgba(0,51,255,0.7030461842940301) 100%)'} borderRadius={20} px={10} py={1} variant="solid" fontWeight={10} alignSelf="start">
            MOST POPULAR KIT
          </Badge>
        )}
        
        <List spacing={2}>
          {perks.map((perk, index) => (
            <ListItem display={'flex'} alignItems={'center'} key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Text>{perk}</Text>
            </ListItem>
          ))}
        </List>
        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProductCard;
