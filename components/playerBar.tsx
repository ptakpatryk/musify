import { Box, Flex, Text } from '@chakra-ui/layout';
import { useStoreState } from 'easy-peasy';
import Player from './player';

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);

  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center" justify="space-between">
        {activeSong ? (
          <Box padding="20px" width="25%" color="gray.300">
            <Text fontSize="large">{activeSong.name}</Text>
            <Text fontSize="small">{activeSong.artist.name}</Text>
          </Box>
        ) : null}
        <Box width="40%">
          {activeSong ? <Player activeSong={activeSong} songs={songs} /> : null}
        </Box>
        <Box width="25%" />
      </Flex>
    </Box>
  );
};

export default PlayerBar;
