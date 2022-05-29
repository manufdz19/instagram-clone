import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logos from '../Assets/logos.png';

const UserCard = ({ avatar, username, name, verified, ...props }) => {
  const navigate = useNavigate();
  return (
    <Flex
      h='auto'
      m='1px 0 10px 0'
      justifyContent='flex-start'
      alignItems='center'
      flex='0 0 auto'
      pl='4px'
      {...props}
    >
      <Box>
        <Avatar src={avatar} h='32px' w='32px' />
      </Box>
      <Flex p='0 12px' flex='1 1 auto'>
        <Box>
          <Flex alignItems='center'>
            <Text
              fontSize='14px'
              fontWeight='600'
              color='#262626'
              _hover={{
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={() => navigate(`/${username}`)}
            >
              {username}
            </Text>
            {verified && (
              <Box
                backgroundImage={logos}
                backgroundPosition='188px -368px'
                h='14px'
                w='14px'
              />
            )}
          </Flex>
          <Text fontSize='12px' fontWeight='400' color='#8e8e8e'>
            {name}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text
          fontSize='12px'
          fontWeight='600'
          color='#0095f6'
          _hover={{
            cursor: 'pointer',
          }}
        >
          Seguir
        </Text>
      </Box>
    </Flex>
  );
};

export default UserCard;
