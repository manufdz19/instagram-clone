import { Box, Button, Divider, Flex, FormControl, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import header_logo from '../../Assets/header_logo.png'
import logos from '../../Assets/logos.png'

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <Flex
      minH='100vh'
      overflowY='scroll'
      backgroundColor='brand.background'
      flexDirection='column'
    >
      {/* Header */}
      <Flex
        w='100%'
        h='60px'
        bgColor='white'
        borderBottom='1px solid #dbdbdb'
        justifyContent='center'
        alignItems='center'
      >
        <Flex
          maxW='975px'
          w='100%'
          h='60px'
          p='0 20px'
          alignItems='center'
        >
          <Flex 
            flex='1 0 127px' 
            h='36px' 
            alignItems='flex-end'
          >
            <Image 
              src={header_logo}
              h='fit-content'
              onClick={() => navigate('/login')}
              _hover={{
                cursor: 'pointer'
              }}
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Reset password form */}
      <Flex
        flexGrow='1'
        justifyContent='center'
        margin='44px 0'
        overflow='hidden'
      >
        <Flex
          bgColor='white'
          border='1px solid #dbdbdb'
          borderRadius='3px'
          margin='60px auto 0'
          maxW='935px'
          overflow='hidden'
        >
          <Flex
            maxW='388px'
            m='0 auto'
            justifyContent='flex-start'
            flexDirection='column'
          >
            <Flex
              m='24px 0 10px 0'
              h='96px'
              w='100%'
              justifyContent='center'
            >
              <Box 
                backgroundImage={logos}
                backgroundPosition='-130px 0'
                h='96px'
                w='96px'
              />
            </Flex>

            <Flex
              m='0 0 5px 0'
              w='100%'
              justifyContent='center'
            >
              <Text
                color='#262626'
                fontSize='16px'
                fontWeight='600'
              >
                ¿Tienes problemas para entrar?
              </Text>
            </Flex>

            <Flex
              m='0 44px 10px 44px'
              justifyContent='center'
            >
              <Text
                lineHeight='18px'
                textAlign='center'
                color='#8e8e8e'
                fontSize='14px'
                fontWeight='400'
              >
                Introduce tu correo electrónico, número de teléfono o nombre de usuario y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.
              </Text>
            </Flex>

            <Flex
              m='0 44px 16px 44px'
              justifyContent='center'
            >
              <FormControl>
                <Input 
                  id='email' 
                  type='email' 
                  autoComplete='false'
                  h='36px' mb='15px'
                  fontSize='12px'
                  backgroundColor='#fafafa'
                  borderRadius='3px'
                  _placeholder={{ opacity: 1, color: '#8e8e8e', fontSize: '12px' }}
                  placeholder='Correo electrónico, teléfono o nombre de usuario'
                  _focus={{
                    borderColor: '#8e8e8e',
                  }}
                />

                <Button w='100%' variant='login' mb='20px'>
                  Enviar enlace de acceso
                </Button>
              </FormControl>
            </Flex>

            <Flex
              gap='20px'
              m='0 44px 16px 44px'
              alignItems='center'
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
              m='0 44px 16px 44px'
              justifyContent='center'
            >
              <Text
                color='#262626'
                fontSize='14px'
                fontWeight='600'
              >
                Crear nueva cuenta
              </Text>
            </Flex>

            <Flex
              mt='68px'
              justifyContent='center'
            >
              <Button
                w='100%'
                bgColor='#fafafa'
                border='1px solid #dbdbdb'
                borderRadius='0px'
                color='#262626'
                fontSize='14px'
                fontWeight='600'
                _hover={{
                  bgColor:'#fafafa',
                }}
                onClick={() => navigate('/login')}
              >
                Volver al inicio de sesión
              </Button>
            </Flex>

          </Flex>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex
        h='140px'
        p='0 16px'
        mt='48px'
        overflow='hidden'
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
  )
}

export default ResetPassword