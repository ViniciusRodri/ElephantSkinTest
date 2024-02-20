import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  Image,
  MenuList,
  MenuItem,
  Divider,
} from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { TooltipDefault } from '../Tooltip';

export const LeftMenuMobile = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Box display={['flex', null, null, null, 'none']}>
      <Flex onClick={onOpen} gap="1" alignItems="center" cursor="pointer" color="white">
        <TbMenu2 size="25" />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background="#0a070794">
          <DrawerCloseButton color="white" />

          <DrawerBody p="2">
            <Flex mt="1rem" alignItems="center" justifyContent="center">
              <Image src="/natiivo.png" objectFit="contain" />
            </Flex>
            <Flex gap="5" mt="1rem" mb="1rem" alignItems="center" justifyContent="center">
              {menuItems.map((item) => (
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
              ))}
            </Flex>
            <Divider />
            <Flex flexDirection="column" p="5" mt="2rem">
              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/360-new.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>360°</span>
              </Flex>
              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/Group.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>Around</span>
              </Flex>

              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/Group-1.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>Details</span>
              </Flex>

              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/surroudings.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>Surroudings</span>
              </Flex>

              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/gallery.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>Gallery</span>
              </Flex>

              <Flex minH="40px" gap="2">
                <Image
                  src="/Icons/Movie.svg"
                  boxSize="22px"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                    opacity: '1',
                  }}
                />
                <span>Movie</span>
              </Flex>
            </Flex>

            <Divider />

            <Box pt="6">
              <Flex alignItems="center" justifyContent="space-between">
                <Flex gap="2" alignItems="center">
                  <Image src="/profile__level.png" objectFit="cover" boxSize="30px" />
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
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
