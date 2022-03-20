import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import Sidebar from './sidebar';

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box height="calc(100vh - 100px)" marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        height="100px"
        background="gray.800"
        width="100%"
      >
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
