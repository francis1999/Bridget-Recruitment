

import React, {ReactNode} from 'react';
import { Box, Theme } from '../../lib/theme';
import { BoxProps } from '@shopify/restyle';

interface FlexBoxProps extends BoxProps<Theme> {
  children: ReactNode;
}

const FlexBox: React.FC<FlexBoxProps> = ({children, ...rest}) => {
  return (
    <Box {...rest} flexDirection="row">
      {children}
    </Box>
  );
};

export default FlexBox;
