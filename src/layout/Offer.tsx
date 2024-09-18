import { Box, Image } from '@chakra-ui/react'
import offer from '../assets/sale.png'

function Offer() {
  return (
    <Box>
        <Image h={{ base: 10, lg: 'auto' }} objectFit={'cover'} cursor={'pointer'} src={offer}/>
    </Box>
  )
}

export default Offer