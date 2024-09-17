import React, { useState } from 'react';
import { Box, Text, Stack, Badge, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  perks: string[];
  description: string;
  isMostPopular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, oldPrice, perks, description, isMostPopular }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Box 
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
        <Text fontSize="2xl" fontWeight="bold">{title}</Text>
        {isMostPopular && (
          <Badge colorScheme="purple" variant="solid" alignSelf="start">
            MOST POPULAR KIT
          </Badge>
        )}
        <Stack direction="row" alignItems="center">
          {oldPrice && (
            <Text as="s" color="gray.500" fontSize="lg">
              ${oldPrice.toFixed(2)}
            </Text>
          )}
          <Text fontSize="2xl" color="gray.800" fontWeight="bold">
            ${price.toFixed(2)}
          </Text>
        </Stack>
        <List spacing={2}>
          {perks.map((perk, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {perk}
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
