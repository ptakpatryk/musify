import GradientLayout from '../../components/gradientLayout';
import prisma from '../../lib/prisma';
import { validateToken } from '../../lib/auth';
import SongTable from '../../components/songsTable';

const getBGColor = (id) => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'gray',
    'teal',
    'yellow',
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  return (
    <GradientLayout
      color={getBGColor(playlist.id)}
      subtitle="playlist"
      title={playlist.name}
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      roundImage={false}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.MUSIFY_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin',
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      userId: user.id,
      id: parseInt(query.id, 10),
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      playlist,
    },
  };
};

export default Playlist;
