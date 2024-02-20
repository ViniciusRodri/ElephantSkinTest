import React, { ReactElement, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/source-sans-3';
import { theme } from '../styles/globals';

const AppProvider = ({ children }: any): ReactElement => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProvider;
