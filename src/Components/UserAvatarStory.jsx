import { Avatar, Flex, Text } from '@chakra-ui/react';

const UserAvatarStory = ({ avatar, username, ...props }) => {
  return (
    <Flex
      position='relative'
      flexDirection='column'
      w='100%'
      maxW='66px'
      alignItems='center'
      mr='15px'
      {...props}
    >
      <Flex
        h='62px'
        w='62px'
        border='2px'
        borderColor='#ff1be1'
        borderRadius='50%'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar src={avatar} h='56px' w='56px' />
      </Flex>
      <Text
        fontSize='12px'
        fontWeight='400'
        color='#262626'
        textOverflow='ellipsis'
        maxW='74px'
        whiteSpace='nowrap'
        letterSpacing='.01em'
        overflow='hidden'
      >
        {username}
      </Text>
    </Flex>
  );
};

export default UserAvatarStory;
