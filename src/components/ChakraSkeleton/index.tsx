import { Stack, Skeleton } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const ChakraSkeleton = (): ReactElement => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default ChakraSkeleton;
