import { Box, Button, Divider, Fade, Flex, FormControl, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import login from '../Assets/login.png';
import login_1 from '../Assets/login_1.png';
import login_2 from '../Assets/login_2.png';
import login_3 from '../Assets/login_3.png';
import login_instagram from '../Assets/login_instagram.png';
import facebook from '../Assets/facebook.png';
import app_store from '../Assets/app_store.png';
import google_play from '../Assets/google_play.png';
import { motion } from 'framer-motion';

const Login = () => {

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (index === 3) return setIndex(1);
      
      setIndex(index+1)
    }, 5000);
  },[index]);

  const photoOptions = {
    1: login_1,
    2: login_2,
    3: login_3
  }

  return (
    <Flex
      minH='100vh'
      overflow='hidden'
      backgroundColor='#fafafa'
      flexDirection='column'
    >
      <Flex 
        maxW='935px' 
        w='100%' 
        flexGrow='1' 
        flexDirection='row' 
        justifyContent='center' 
        margin='32px auto' 
        pb='32px'
      >
        <Flex 
          h='581.15px' 
          flexBasis='380.32px' 
          alignSelf='center' 
          bgImage={login} 
          backgroundSize='468.32px 634.15px' 
          backgroundPosition='-46px 0'
          mb='12px' 
          mr='32px' 
          w='100%'
        >
          <Flex 
            position='relative' 
            margin='27px 0 0 113px'
          >
            <Image
            h='538.84px'
            w='250px'
            src={photoOptions[1]}
            style={{
              transition: 'opacity 1s ease-in-out',
              opacity: 1 === index ? 1 : 0
            }}
          />
            <Image
            h='538.84px'
            w='250px'
            src={photoOptions[2]}
            position='relative'
            left='-250px'
            style={{
              transition: 'opacity 1s ease-in-out',
              opacity: 2 === index ? 1 : 0
            }}
          />
            <Image
            h='538.84px'
            w='250px'
            src={photoOptions[3]}
            position='relative'
            left='-498px'
            style={{
              transition: 'opacity 1s ease-in-out',
              opacity: 3 === index ? 1 : 0
            }}
          />
          </Flex>
        </Flex>
        
        <Flex
          flexGrow='1'
          justifyContent='center'
          mt='12px'
          maxW='350px'
          flexDirection='column'
          position='relative'
        >
          <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            backgroundColor='#fff'
            border= '1px solid #dbdbdb'
            borderRadius='1px'
            m='0 0 10px'
            p='10px 0'
          >
            <Box mt='36px' mb='12px'>
              <Image 
                src={login_instagram}
                maxH='100%'
                maxW='100%'
              />
            </Box>
            <Flex
              mb='10px'
              maxW='350px'
              w='100%'
              mt='24px'
            >
              <FormControl m='0 40px 6px'>
                <Input 
                  id='email' 
                  type='email' 
                  autoComplete='false'
                  h='36px' mb='5px'
                  fontSize='12px'
                  backgroundColor='#fafafa'
                  borderRadius='3px'
                  _placeholder={{ opacity: 1, color: '#8e8e8e', fontSize: '12px' }}
                  placeholder='Teléfono, usuario o correo electrónico'
                  _focus={{
                    borderColor: '#8e8e8e',
                  }}
                />

                <InputGroup
                  alignItems='center'
                >
                  <Input 
                    id='email' 
                    type={show ? 'text' : 'password' }
                    h='36px' 
                    mb='15px' 
                    fontSize='12px'
                    backgroundColor='#fafafa'
                    borderRadius='3px'
                    _placeholder={{ opacity: 1, color: '#8e8e8e', fontSize: '12px' }}
                    placeholder='Contraseña'
                    _focus={{
                      borderColor: '#8e8e8e',
                    }}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button 
                      _focus={{ borderColor:'transparent'}}
                      variant='algo' 
                      h='36px' 
                      onClick={ () => setShow(!show) }
                      color='#262626' 
                      fontSize='14px'
                    >
                      {show ? 'Ocultar' : 'Mostrar'}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Button w='100%' variant='login' mb='20px'>
                  Entrar
                </Button>

                <Flex
                  gap='10px'
                  alignItems='center'
                  mb='20px'
                >
                  <Divider color='#dbdbdb' opacity='1'/>
                  <Text
                    color='#8e8e8e'
                    fontSize='13px'
                    fontWeight='600'
                  >
                    O
                  </Text>
                  <Divider color='#dbdbdb' opacity='1'/>
                </Flex>
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  gap='8px'
                  mb='12px'
                >
                  <Button 
                    variant='facebook'
                    leftIcon={<Image src={facebook} h='14px'/>}
                    w='100%'
                  >
                    Iniciar sesión con Facebook
                  </Button>
                </Flex>
                <Text
                  color='#00376b'
                  fontSize='12px'
                  textAlign='center'
                >
                  ¿Has olvidado la contraseña?
                </Text>
              </FormControl>
            </Flex>
          </Flex>

          <Flex
            alignItems='center'
            justifyContent='center'
            backgroundColor='#fff'
            border= '1px solid #dbdbdb'
            borderRadius='1px'
            m='0 0 10px'
            p='18px'
            gap='5px'
          >
            <Text
              color='#262626'
              fontSize='14px'
              fontWeight='400'
            >
              ¿No tienes una cuenta?
            </Text>
            <Text
              color='#0095f6'
              fontSize='14px'
              fontWeight='600'
            >
              Regístrate
            </Text>
          </Flex>

          <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text
              color='#262626'
              fontSize='14px'
              fontWeight='400'
              m='10px 20px 20px 20px'
            >
              Descarga la aplicación.
            </Text>
            <Flex gap='8px'>
              <Link
                _focus={{ borderColor:'transparent'}}
                href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
                isExternal
              >
                <Image 
                  src={app_store}
                  h='40px'
                />
              </Link>
              <Link
                _focus={{ borderColor:'transparent'}}
                href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D31C9A455-28A0-4AA4-A104-14EC230BE637%26utm_content%3Dlo%26utm_medium%3Dbadge'
                isExternal
              >
                <Image 
                  src={google_play}
                  h='40px'
                />
              </Link>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
      <Flex
          backgroundColor='#fafafa'
          p='0 16px'
          justifyContent='center'
        >
          <Box mb='26px'>
            <Box mb='24px'>
              <Flex flexWrap='wrap' h='46px' />
              <Flex 
                m='12px 0' 
                justifyContent='center'
                alignItems='center'
              >
                <Text
                color='#8e8e8e'
                fontSize='12px'
                fontWeight='400'
                m='10px 20px 10px 20px'
                >
                  Español (España)
                </Text>
                <Text
                color='#8e8e8e'
                fontSize='12px'
                fontWeight='400'
                m='10px 20px 10px 20px'
                >
                  © 2022 Instagram clone from manufdz19
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
    </Flex>
  );
};

export default Login;
