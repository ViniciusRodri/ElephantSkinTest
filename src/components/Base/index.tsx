import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import Header from '../Header';
import LeftMenu from '../LeftMenu';

interface IBaseProps {
  children: ReactNode;
}

const Base = ({ children }: IBaseProps): ReactElement => {
  return (
    <>
      <Flex
        backgroundImage="url('/bg.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        flexDir="column"
        justifyContent="center"
        position="relative"
        zIndex="9"
      >
        <Flex>
          <LeftMenu />
          <Box width="100%">
            <Header />

            <Flex
              width="100%"
              h={['100vh', null, null, null, '85vh']}
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              {children}
            </Flex>
            <Flex width="100%" alignItems="center" justifyContent="flex-end" pr="5">
              <Text textAlign="center" color="white" opacity="0.8" fontSize="0.8rem">
                © 2023 Natiivo Miami. All rights reserved.{' '}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Base;
