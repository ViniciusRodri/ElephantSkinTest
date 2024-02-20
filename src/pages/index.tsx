import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import Base from '../components/Base';
import { FaArrowRightLong } from 'react-icons/fa6';

const MotionText = motion(Text);
const MotionButton = motion(Button);

const Home = (): ReactElement => {
  const textVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    sub: { x: 0, opacity: 0.6, transition: { duration: 1.7 } },
  };

  return (
    <Base>
      <Flex pt="10rem" flexDirection="column">
        <Box>
          <MotionText
            fontSize={['28px', null, null, '48px']}
            color="white"
            fontWeight="600"
            textAlign="center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            INNOVATION IN YOUR HANDS
          </MotionText>
          <MotionText
            pt="1rem"
            fontSize={['18px', null, null, '24px']}
            color="white"
            opacity="0.6"
            fontWeight="500"
            textAlign="center"
            variants={textVariants}
            initial="initial"
            animate="sub"
          >
            Explore, Interact and Transform the Real Estate{' '}
          </MotionText>
          <MotionText
            fontSize={['18px', null, null, '24px']}
            color="white"
            opacity="0.6"
            fontWeight="500"
            textAlign="center"
            variants={textVariants}
            initial="initial"
            animate="sub"
          >
            Market with Our Smart Interactive Table.{' '}
          </MotionText>
        </Box>
      </Flex>
      <Flex
        pt="10rem"
        flexDirection="column"
        gap="5"
        alignItems="center"
        justifyContent="center"
      >
        <MotionText
          fontSize={['18px', null, null, '24px']}
          color="white"
          opacity="0.6"
          fontWeight="500"
          textAlign="center"
          variants={textVariants}
          initial="initial"
          animate="sub"
        >
          START EXPERIENCE{' '}
        </MotionText>

        <MotionButton
          backgroundColor="#FFFFFF14"
          boxShadow="1px 1px 5px 1px #FFFFFF52 inset"
          textAlign="center"
          textDecoration="none"
          cursor="pointer"
          borderRadius="50%"
          width="56px"
          height="56px"
          variants={textVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          _hover={{
            color: 'black',
          }}
        >
          <Box color="white">
            <FaArrowRightLong size="30" />
          </Box>
        </MotionButton>
      </Flex>
    </Base>
  );
};

export default Home;
