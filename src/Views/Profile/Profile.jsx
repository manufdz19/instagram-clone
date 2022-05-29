import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { USERS } from '../../Mocks/UsersMocks';
import ICON_SETTING from '../../Assets/Icons/settings.svg';
import ICON_LIKE from '../../Assets/Icons/likewhite.svg';
import ICON_COMMENT from '../../Assets/Icons/commentwhite.svg';
import { useState } from 'react';

const Profile = () => {
  const { username } = useParams();

  const [idHover, setIdHover] = useState(null);

  const user = USERS.find((user) => user.username === username);
  return (
    <Flex
      minH='calc(100vh - 60px)'
      maxW='935px'
      w='100%'
      flexDirection='column'
      flexFlow='row-nowgrap'
      flexGrow='1'
      position='relative'
      margin='0 auto'
      pt='30px'
      overflowY='hidden'
    >
      {/* Header */}
      <Flex mb='44px' h='250px'>
        <Flex mr='30px' flexBasis='0' flexGrow='1'>
          <Box h='150px' w='150px' m='0 auto'>
            <Avatar src={user.avatar} w='150px' h='150px' />
          </Box>
        </Flex>

        <Flex
          flexBasis='30px'
          flexGrow='2'
          flexShrink='1'
          minW='0'
          flexDirection='column'
          alignItems='stretch'
        >
          <Flex mb='20px' flexShrink='1' alignItems='center'>
            <Text fontSize='28px' color='#262626' fontWeight='300'>
              {user.username}
            </Text>
            <Button
              variant='outline'
              ml='20px'
              border='1px solid #dbdbdb'
              borderRadius='4px'
              color='#262626'
              fontSize='14px'
              fontWeight='600'
              h='30px'
              w='auto'
              _hover={{
                bgColor: 'transparent',
              }}
            >
              Editar perfil
            </Button>
            <Box ml='10px'>
              <Image src={ICON_SETTING} h='24px' w='24px' />
            </Box>
          </Flex>

          <Flex mb='20px' flexShrink='1' alignItems='center'>
            <Flex gap='5px' mr='40px'>
              <Text fontSize='16px' color='#262626' fontWeight='600'>
                {user.posts.total}
              </Text>
              <Text fontSize='16px' color='#262626' fontWeight='400'>
                publicaciones
              </Text>
            </Flex>
            <Flex gap='5px' mr='40px'>
              <Text fontSize='16px' color='#262626' fontWeight='600'>
                {user.followers.total}
              </Text>
              <Text fontSize='16px' color='#262626' fontWeight='400'>
                seguidores
              </Text>
            </Flex>
            <Flex gap='5px' mr='40px'>
              <Text fontSize='16px' color='#262626' fontWeight='600'>
                {user.follows.total}
              </Text>
              <Text fontSize='16px' color='#262626' fontWeight='400'>
                seguidos
              </Text>
            </Flex>
          </Flex>

          <Box>
            <Text fontSize='16px' color='#262626' fontWeight='600'>
              {user.name}
            </Text>
            <Text
              fontSize='16px'
              color='#262626'
              fontWeight='400'
              whiteSpace='pre-wrap'
            >
              {user.description}
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Historys */}
      <Flex h='130px' mb='44px'>
        <Box w='100%' h='100%'>
          <Flex h='100%' overflow='hidden' pl='48px'>
            1 2
          </Flex>
        </Box>
      </Flex>

      {/* Posts */}
      <Flex flexDirection='column' alignItems='stretch'>
        <Flex flexGrow='1'>
          <Flex mb='28px'>
            <SimpleGrid columns={3} spacing='28px'>
              {user.posts.list.map((post) => {
                return (
                  <Box
                    key={post.image}
                    flex='1 0 0%'
                    w='100%'
                    position='relative'
                    display='block'
                    mr='28px'
                    _hover={{
                      cursor: 'pointer',
                    }}
                    onMouseOver={() => {
                      setIdHover(post.id);
                    }}
                    onMouseOut={() => {
                      setIdHover(null);
                    }}
                  >
                    <Image src={post.image} objectFit='cover' />
                    <Box
                      display={idHover === post.id ? 'block' : 'none'}
                      position='absolute'
                      top='0'
                      left='0'
                      background='rgba(0,0,0, 0.3)'
                      w='100%'
                      h='100%'
                    >
                      <Flex
                        alignItems='center'
                        justifyContent='center'
                        mt='50%'
                      >
                        <Image src={ICON_LIKE} mr='5px' w='20px' />
                        <Text
                          color='white'
                          fontWeight='600'
                          fontSize='16px'
                          mr='30px'
                        >
                          {post.likes}
                        </Text>
                        <Image src={ICON_COMMENT} mr='5px' w='20px' />
                        <Text
                          color='white'
                          fontWeight='600'
                          fontSize='16px'
                          mr='15px'
                        >
                          {post.comments}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
