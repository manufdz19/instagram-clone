import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import ICON_DOTS from '../assets/icons/dots_horizontal.svg';
import ICON_LIKE from '../assets/icons/like.svg';
import ICON_COMMENT from '../assets/icons/comment.svg';
import ICON_DIRECT from '../assets/icons/direct.svg';
import ICON_SAVED from '../assets/icons/saved.svg';
import moment from 'moment';

const PostCard = ({ post }) => {
  const { photo, title, user, likes, comments, createdAt } = post;
  const { avatar, username } = user;

  return (
    <Flex
      p='0'
      w='100%'
      maxH='inherit'
      borderRadius='8px'
      mb='12px'
      bgColor='white'
      border='1px solid #dbdbdb'
      position='relative'
      alignItems='stretch'
    >
      <Flex
        maxH='inherit'
        maxW='inherit'
        w='100%'
        flex='0 0 auto'
        justifyContent='center'
        flexDirection='column'
        alignItems='stretch'
        position='relative'
      >
        {/* Header */}
        <Flex
          position='relative'
          justifyContent='space-between'
          alignItems='center'
        >
          <Flex
            m='8px 4px 8px 12px'
            p='unset'
            alignItems='center'
            maxW='calc(100% - 48px)'
            flexGrow='1'
          >
            <Avatar src={avatar} h='32px' w='32px' />
            <Text fontSize='14px' fontWeight='600' color='#262626' ml='10px'>
              {username}
            </Text>
          </Flex>
          <Box m='8px'>
            <Image src={ICON_DOTS} w='24px' h='24px' />
          </Box>
        </Flex>

        {/* Image */}
        <Box>
          <Image src={photo} w='100%' h='100%' objectFit='cover' />
        </Box>

        {/* Actions */}
        <Flex p='0 12px' pb='6px' mt='4px' alignItems='center'>
          <Box w='40px' h='40px' p='8px 16px 8px 0'>
            <Image src={ICON_LIKE} w='24px' h='24px' />
          </Box>
          <Box w='40px' h='40px' p='8px 16px 8px 0'>
            <Image src={ICON_COMMENT} w='24px' h='24px' />
          </Box>
          <Box w='40px' h='40px' p='8px 16px 8px 0'>
            <Image src={ICON_DIRECT} w='24px' h='24px' />
          </Box>
          <Box w='40px' h='40px' p='8px 0 8px 16px' ml='auto'>
            <Image src={ICON_SAVED} w='24px' h='24px' />
          </Box>
        </Flex>

        {/* Likes */}
        <Flex p='0 12px' mb='8px'>
          <Text fontSize='14px' fontWeight='600' color='#262626'>
            {likes} Me gusta
          </Text>
        </Flex>

        {/* Title */}
        <Flex p='0 12px' gap='4px' mb='8px'>
          <Text fontSize='14px' fontWeight='600' color='#262626'>
            {username}
          </Text>
          <Text fontSize='14px' fontWeight='400' color='#262626'>
            {title}
          </Text>
        </Flex>

        {/* Comments */}
        <Flex p='0 12px' gap='4px' mb='8px'>
          <Text fontSize='14px' fontWeight='400' color='#8e8e8e'>
            Ver los {comments.total} comentarios
          </Text>
        </Flex>

        {/* Time ago */}
        <Flex p='0 12px' gap='4px' mb='8px'>
          <Text
            fontSize='10px'
            fontWeight='400'
            color='#8e8e8e'
            letterSpacing='.2px'
            textTransform='uppercase'
          >
            {moment(createdAt).fromNow()}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostCard;
