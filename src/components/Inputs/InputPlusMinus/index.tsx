import { Input, HStack, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

interface IInputProps {
  setValor?: any;
  name: string;
}

export const InputPlusMinus = React.forwardRef(
  ({ name, setValor, ...rest }: IInputProps, ref: any) => {
    const [value, setValue] = useState(0);

    const Increment = (type: 'minus' | 'plus') => {
      if (type === 'minus' && value > 500) {
        setValue(value - 500);
        setValor('valor', value - 500);
      }
      if (type === 'plus' && value < 20000) {
        setValue(value + 500);
        setValor('valor', value + 500);
      }
    };

    const setValorFunction = (e: any) => {
      setValor('valor', Number(e));
      setValue(Number(e));
    };

    return (
      <HStack
        maxW="320px"
        borderRadius="12px 12px 1px 1px"
        background="white.100"
        border="1px solid"
        borderColor="#e7e7e7"
        borderBottom="2px"
        borderBottomColor="black"
      >
        <Button
          color={'black'}
          onClick={() => {
            Increment('minus');
          }}
        >
          -
        </Button>
        <InputGroup>
          <InputLeftElement color={'black'}>R$</InputLeftElement>
          <Input
            ref={ref}
            border={0}
            color={'black'}
            {...rest}
            onChange={(e) => {
              setValorFunction(e.target.value);
            }}
          />
        </InputGroup>
        <Button
          color={'black'}
          onClick={() => {
            Increment('plus');
          }}
        >
          +
        </Button>
      </HStack>
    );
  },
);
InputPlusMinus.displayName = 'InputPlusMinus';
