import { extendTheme } from '@chakra-ui/react';

export const InstagramTheme = extendTheme({
  colors: {
    brand: {
      background: '#fafafa',
      blue: '#0095f6',
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        login: {
          bgColor: 'brand.blue',
          color: 'white',
          border: '1px solid transparent',
          borderRadius: '4px',
          h: '30px',
          fontSize: '14px',
          fontWeight: '600',
          p: '5px 9px',
          _hover: {
            bgColor: 'brand.blue',
            color: 'white',
            _disabled: {
              bgColor: 'brand.blue',
              cursor: 'default',
            },
          },
        },
        facebook: {
          bgColor: 'transparent',
          color: '#385185',
          fontSize: '14px',
          fontWeight: '600',
        },
      },
    },
  },
  Input: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
});
