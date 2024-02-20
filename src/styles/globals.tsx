import { extendTheme } from '@chakra-ui/react';
import styled, { createGlobalStyle } from 'styled-components';

export const theme = extendTheme({
  colors: {
    gray: {
      100: '#F6F7FA',
      200: '#EBF2FA',
      300: '#747474',
    },
    white: '#FFFFFF',

    black: '#000000',
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#FFFFFF',
        fontSize: '0.9em',
      },
      a: {
        textDecoration: 'none',
        transition: 'transform 0.15s ease-out, background 0.15s ease-out',
        _hover: {
          textDecoration: 'underline',
          transform: 'scale(1.03, 1.03)',
        },
        _active: {
          transform: 'scale(1, 1)',
        },
      },
      button: {
        transition: 'transform 0.15s ease-out, background 0.15s ease-out',
        _hover: {
          transform: 'scale(1.03, 1.03)',
        },
        _active: {
          transform: 'scale(1, 1)',
        },
      },
    },
  },
});

export const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;     
    height: 10px;
    scrollbar-width: thin;         
  }      

  ::-webkit-scrollbar-track {
    background: #f1f1f1;       
  }

  ::-webkit-scrollbar-thumb {
    background-color: #929191;    
    border-radius: 10px;     
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const BaseMainContent = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0em 0em;
`;
