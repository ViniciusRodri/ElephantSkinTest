import { Text, Flex, Textarea } from '@chakra-ui/react';
import React from 'react';

interface IInputMainProps {
  nome?: string;
  error?: string;
}

export const TextAreaMain = React.forwardRef(
  ({ error, nome, ...rest }: IInputMainProps, ref: any) => {
    return (
      <>
        <Flex flexDirection={'column'} w={'100%'} padding={2}>
          <Text padding={2} color={'black'}>
            {nome}
          </Text>
          <Textarea
            color="black"
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
            <Text color="red.500" fontSize="0.8em">
              {error}
            </Text>
          )}
        </Flex>
      </>
    );
  },
);
TextAreaMain.displayName = 'TextAreaMain';
