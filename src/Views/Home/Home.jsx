import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import UserAvatarStory from '../../Components/UserAvatarStory';
import UserCard from '../../Components/UserCard';
import { AuthContext } from '../../Context/AuthContext';
import { USERS } from '../../Mocks/UsersMocks';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Flex
      minH='calc(100vh - 60px)'
      maxW='935px'
      w='100%'
      flexFlow='row-nowgrap'
      flexGrow='1'
      position='relative'
      margin='0 auto'
      pt='30px'
    >
      {/* LEFT PANEL */}
      <Flex float='left' mr='28px' maxW='614px' w='100%' flexDirection='column'>
        <Flex
          bgColor='white'
          border='1px solid #dbdbdb'
          borderRadius='3px'
          padding='16px 16px'
          mb='30px'
          h='119px'
          w='100%'
          mt='-6px'
          alignItems='center'
          overflow='hidden'
          overflowX='scroll'
          css={{
            '&::-webkit-scrollbar': {
              height: '20px',
            },
            '&::-webkit-scrollbar-track': {
              width: '20px',
              height: '20px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c2c2c2',
              border: '7px solid white',
              borderRadius: '9999px',
            },
          }}
        >
          {USERS.map((userMock) => (
            <UserAvatarStory
              key={userMock.id}
              avatar={userMock.avatar}
              username={userMock.username}
            />
          ))}
        </Flex>

        <Box
          bgColor='white'
          border='1px solid #dbdbdb'
          borderRadius='3px'
          padding='16px 0'
          mb='24px'
          h='119px'
          w='100%'
        ></Box>
      </Flex>

      {/* RIGTH PANEL */}
      <Flex left='1126px' maxW='293px' w='100%' p='0' flexDirection='column'>
        {/* Profile */}
        <Flex
          h='auto'
          m='22px 0 10px 0'
          justifyContent='flex-start'
          flex='0 0 auto'
          mb='17px'
        >
          <Box>
            <Avatar src={user.avatar} h='56px' w='56px' />
          </Box>
          <Box p='12px 18px'>
            <Text
              fontSize='14px'
              fontWeight='600'
              color='#262626'
              m='-3px 0 -3px'
              _hover={{
                cursor: 'pointer',
              }}
            >
              {user.username}
            </Text>
            <Text fontSize='14px' fontWeight='400' color='#8e8e8e'>
              {user.name}
            </Text>
          </Box>
        </Flex>

        <Flex justifyContent='space-between' alignItems='center' mb='10px'>
          <Text fontSize='14px' fontWeight='600' color='#8e8e8e'>
            Sugerencias para ti
          </Text>
          <Text fontSize='12px' fontWeight='600' color='#262626'>
            Ver todo
          </Text>
        </Flex>

        {USERS.filter((users) => users.id !== user.id).map((userMock) => (
          <UserCard
            key={userMock.id}
            avatar={userMock.avatar}
            username={userMock.username}
            name={userMock.name}
            verified={userMock.verified}
          />
        ))}

        <Box mt='20px'>
          <Text fontSize='12px' fontWeight='400' color='#C7C7C7'>
            © 2022 INSTAGRAM FROM MANUFDZ19
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
