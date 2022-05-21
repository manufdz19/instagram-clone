import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ChakraProvider } from '@chakra-ui/react';
import { InstagramTheme } from './Theme/InstagramTheme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={InstagramTheme}>
    <App />
  </ChakraProvider>
);
