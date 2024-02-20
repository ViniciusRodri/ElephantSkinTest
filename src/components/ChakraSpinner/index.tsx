import { Spinner } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const ChakraSpinner = (): ReactElement => {
  return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />;
};

export default ChakraSpinner;
