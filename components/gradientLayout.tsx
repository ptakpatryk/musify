import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const GradientLayout = ({
  children,
  color,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      overflowY="auto"
      height="100%"
      bgGradient={`linear(${color}.600 -5%, ${color}.700 10%, ${color}.800 40%, rgba(0,0,0,.95) 75%)`}
    >
      <Flex bg={`${color}.700`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? '100%' : '3px'}
            fit="cover"
          />
        </Box>
        <Box padding="20px" lineHeight="35px" color="gray.300">
          <Text fontSize="x-small" fontWeight="semibold" casing="uppercase">
            {subtitle}
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="semibold"
            color="white"
            marginBottom="0.5rem"
          >
            {title}
          </Text>
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
