/* eslint-disable no-unused-vars */
import {
  Avatar,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HEADER_LOGO from '../../Assets/header_logo.png';
import ICON_PROFILE from '../../Assets/Icons/profile.svg';
import ICON_SAVED from '../../Assets/Icons/saved.svg';
import ICON_SETTING from '../../Assets/Icons/settings.svg';
import ICON_CHANGE from '../../Assets/Icons/change.svg';
import ICON_HOME from '../../Assets/Icons/home.svg';
import ICON_DIRECT from '../../Assets/Icons/direct.svg';
import ICON_ADD from '../../Assets/Icons/add.svg';
import ICON_DISCOVER from '../../Assets/Icons/discover.svg';
import ICON_LIKE from '../../Assets/Icons/like.svg';
import { AuthContext } from '../../Context/AuthContext';
import { Search2Icon } from '@chakra-ui/icons';

const Header = ({ hasOptions, hasSearch, ...props }) => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  return (
    <Flex
      w='100%'
      h='60px'
      bgColor='white'
      borderBottom='1px solid #dbdbdb'
      justifyContent='center'
      alignItems='center'
      {...props}
    >
      <Flex maxW='975px' w='100%' h='60px' p='0 20px' alignItems='center'>
        <Flex flex='1 0 100px' h='36px' alignItems='flex-end'>
          <Image
            src={HEADER_LOGO}
            h='fit-content'
            onClick={() => navigate('/login')}
            _hover={{
              cursor: 'pointer',
            }}
          />
        </Flex>
        {hasSearch && (
          <Flex alignItems='center' alignContent='center' mr='25px'>
            <InputGroup w='268px' bgColor='#efefef' borderRadius='8px'>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='#8e8e8e' />}
              />
              <Input
                h='36px'
                type='tel'
                _placeholder={{
                  opacity: 1,
                  color: '#8e8e8e',
                  lineHeight: '25px',
                  fontWeight: '300',
                  fontSize: '16px',
                }}
                placeholder='Busca'
                border='none'
                _focus={{
                  boxShadow: 'none',
                }}
              />
            </InputGroup>
          </Flex>
        )}
        {hasOptions && (
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            alignContent='center'
            position='relative'
            pl='27px'
          >
            <Image
              src={ICON_HOME}
              ml='27px'
              _hover={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
            <Image src={ICON_DIRECT} ml='22px' _hover={{ cursor: 'pointer' }} />
            <Image src={ICON_ADD} ml='22px' _hover={{ cursor: 'pointer' }} />
            <Image
              src={ICON_DISCOVER}
              ml='22px'
              _hover={{ cursor: 'pointer' }}
            />
            <Image src={ICON_LIKE} ml='22px' _hover={{ cursor: 'pointer' }} />
            <Menu>
              <MenuButton ml='22px'>
                <Avatar src={user.avatar} h='24px' w='24px' />
              </MenuButton>
              <MenuList left={0} width='230px' p='0'>
                <MenuItem
                  p='8px 16px'
                  gap='10px'
                  onClick={() => navigate(`${user.username}`)}
                >
                  <Image src={ICON_PROFILE} />
                  <Text
                    w='170px'
                    color='#262626'
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='18px'
                  >
                    Perfil
                  </Text>
                </MenuItem>
                <MenuItem p='8px 16px' gap='10px'>
                  <Image src={ICON_SAVED} />
                  <Text
                    w='170px'
                    color='#262626'
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='18px'
                  >
                    Guardados
                  </Text>
                </MenuItem>
                <MenuItem p='8px 16px' gap='10px'>
                  <Image src={ICON_SETTING} />
                  <Text
                    w='170px'
                    color='#262626'
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='18px'
                  >
                    Configuración
                  </Text>
                </MenuItem>
                <MenuItem p='8px 16px' gap='10px'>
                  <Image src={ICON_CHANGE} />
                  <Text
                    w='170px'
                    color='#262626'
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='18px'
                  >
                    Cambiar de cuenta
                  </Text>
                </MenuItem>
                <MenuDivider m='0' />
                <MenuItem p='8px 16px'>
                  <Text
                    w='170px'
                    color='#262626'
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='18px'
                    onClick={() => logout()}
                  >
                    Cerrar sesión
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
