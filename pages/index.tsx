import { Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import GradientLayout from '../components/gradientLayout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      color="purple"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://static.wikia.nocookie.net/battleklasky/images/e/eb/I_liek_trainz.png"
      roundImage
    >
      {/* <div style={{ color: 'white' }}>
        <pre>{JSON.stringify(artists, null, 2)}</pre>
      </div> */}
      <Box color="white" paddingX="40px">
        <Box marginBottom="30px">
          <Text fontWeight="semibold" fontSize="xl">
            Top artists this month
          </Text>
          <Text fontSize="small" color="gray.400">
            only visible to you
          </Text>
        </Box>
        <Flex gap="0.6rem">
          {artists.map((artist) => (
            <Box
              bgGradient="linear(rgba(22,22,22, 0.1) 0%, rgba(22,22,22, 0.8) 100%)"
              borderRadius="4px"
              padding="15px"
              width="12%"
              key={artist.id}
            >
              <Image
                src={`https://picsum.photos/300?random=${artist.id}`}
                borderRadius="100%"
              />
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="x-small">Artist</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = (await prisma.artist.findMany({})) || [];

  return {
    props: { artists },
  };
};

export default Home;
