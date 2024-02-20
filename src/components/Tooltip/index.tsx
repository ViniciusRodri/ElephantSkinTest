import { Tooltip } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface ITooltipDefaultProps {
  label: string;
  children: ReactElement;
}

export const TooltipDefault = ({
  label,
  children,
}: ITooltipDefaultProps): ReactElement => {
  return (
    <Tooltip
      label={label}
      placement="right"
      background="black500"
      color={'white500'}
      fontSize="0.8rem"
      fontWeight="600"
      position="relative"
      zIndex="9999"
      textShadow="0 0 5px rgba(255, 255, 255, 0.5)"
    >
      {children}
    </Tooltip>
  );
};
