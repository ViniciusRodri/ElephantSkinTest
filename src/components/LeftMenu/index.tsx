import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import { LuPlus } from 'react-icons/lu';
import { TooltipDefault } from '../Tooltip';

const LeftMenu = (): ReactElement => {
  return (
    <Box
      height="100vh"
      pt="8"
      pb="8"
      transition="width 0.6s"
      w={'110px'}
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      display={['none', null, null, null, 'flex']}
    >
      <Flex
        mt="12rem"
        flexDirection="column"
        gap="2"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/Icons/360-new.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />
        <Image src="/Icons/Line.svg" width="37px" height="12" />

        <Image
          src="/Icons/Group.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />

        <Image src="/Icons/Line.svg" width="37px" height="12" />

        <Image
          src="/Icons/Group-1.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />
        <Image src="/Icons/Line.svg" width="37px" height="12" />

        <Image
          src="/Icons/surroudings.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />
        <Image src="/Icons/Line.svg" width="37px" height="12" />

        <Image
          src="/Icons/gallery.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />
        <Image src="/Icons/Line.svg" width="37px" height="12" />

        <Image
          src="/Icons/Movie.svg"
          boxSize="25px"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Flex>

      <Box
        position="absolute"
        top="50%"
        right="-43px"
        transform="translateY(-50%)"
        p="4"
        zIndex="999"
      >
        <Button
          background="#453d39"
          box-shadow="1px 1px 5px 1px #FFFFFF52 inset"
          color="white"
          borderRadius="50%"
          width="56px"
          height="56px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{
            color: 'white',
          }}
        >
          <LuPlus size="50" />
        </Button>
      </Box>

      <Flex
        mt="10rem"
        flexDirection="column"
        gap="5"
        alignItems="center"
        justifyContent="flex-end"
      >
        <TooltipDefault label="HELP">
          <Image
            src="/Icons/side-menu__help.svg"
            boxSize="22px"
            cursor="pointer"
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease',
              opacity: '1',
            }}
          />
        </TooltipDefault>

        <TooltipDefault label="LOGOUT">
          <Image
            src="/Icons/menu.svg"
            boxSize="22px"
            opacity="0.6"
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease',
              opacity: '1',
            }}
          />
        </TooltipDefault>
      </Flex>

      <Box
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        width="2px"
        bgGradient="linear(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, 0.32), rgba(255,255,255,0))"
      />
    </Box>
  );
};

export default LeftMenu;
