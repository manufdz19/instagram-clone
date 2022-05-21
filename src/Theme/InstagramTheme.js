import { extendTheme } from '@chakra-ui/react';

export const InstagramTheme = extendTheme({
  colors: {
    brand: {
      blue: '#0095f6'
    },
  },
  components: {
    Button: {
      variants: {
        login: {
          bgColor: 'brand.blue',
          color: 'white',
          border: '1px solid transparent',
          borderRadius: '4px',
          h:'30px',
          fontSize: '14px',
          fontWeight: '600',
          p:'5px 9px'
        },
        facebook: {
          bgColor: 'transparent',
          color: '#385185',
          fontSize: '14px',
          fontWeight: '600',
        }
      }
    }
  }
});
