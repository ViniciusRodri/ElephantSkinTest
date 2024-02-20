import React, { useState } from 'react';
import { Flex, Text, Image, Stack } from '@chakra-ui/react';
import { LeftMenuMobile } from '../LeftMenuMobile';

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('HOME');

  const handleItemClick = (item: string) => {
    setActiveItem(item === activeItem ? '' : item);
  };

  const menuItems = [
    { label: 'HOME', id: 'HOME' },
    { label: 'PROJECT', id: 'PROJECT' },
    { label: 'SALES', id: 'SALES' },
  ];

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      py={['5', null, null, '6']}
      px={['5', null, null, '6']}
      position="relative"
    >
      <Stack display={['none', null, null, null, 'flex']}>
        <nav>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
            }}
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'inline-block',
                  paddingBottom: '8px',
                  borderBottom: activeItem === item.id ? '1px solid #FFF' : 'none',
                  marginRight: '15px',
                  transition: 'text-shadow 0.3s ease',
                }}
                onMouseEnter={() => handleItemClick(item.id)}
                onMouseLeave={() => handleItemClick('')}
              >
                <Text
                  as="a"
                  href="#"
                  fontWeight={activeItem === item.id ? 'bold' : 'normal'}
                  textDecoration="none"
                  cursor="pointer"
                  onClick={() => handleItemClick(item.id)}
                  _hover={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Text>
              </li>
            ))}
          </ul>

          <div
            style={{
              position: 'absolute',
              bottom: '34px',
              left: '24px',
              width: '80%',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.32) 63.62%, rgba(255, 255, 255, 0) 106.54%)',
            }}
          />
        </nav>
      </Stack>

      <LeftMenuMobile />

      <Flex
        gap="5"
        justifyContent="flex-end"
        display={['none', null, null, null, 'flex']}
      >
        <Image src="/profile__level.png" objectFit="cover" />
        <Image src="/natiivo.png" objectFit="contain" />
      </Flex>
    </Flex>
  );
};

export default Header;
