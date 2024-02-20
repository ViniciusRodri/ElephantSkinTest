import { Input, Text, Flex } from '@chakra-ui/react';
import React from 'react';

interface IInputMainProps {
  type?: string;
  nome?: string;
  error?: string;
}

export const SelectMain = React.forwardRef(
  ({ type = 'text', nome, error, ...rest }: IInputMainProps, ref: any) => {
    return (
      <>
        <Flex flexDirection={'column'} w={'100%'} padding={2}>
          <Text padding={2} color={'black'}>
            {nome}
          </Text>
          <Input
            color="black"
            type={type}
            borderRadius="12px 12px 1px 1px"
            background="white.100"
            border="1px solid"
            borderColor="#e7e7e7"
            borderBottom="2px"
            borderBottomColor="black"
            ref={ref}
            {...rest}
          />
          {error && (
            <Text position="absolute" color="red.500" fontSize="0.8em">
              {error}
            </Text>
          )}
        </Flex>
      </>
    );
  },
);
SelectMain.displayName = 'SelectMain';
