
import {
  backgroundColor,
  border,
  composeRestyleFunctions,
  layout,
  spacing,
  useRestyle,
  useTheme,
} from '@shopify/restyle';
import React from 'react';

import {ReactElement} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import { Box, Text, Theme } from '../../lib/theme';
import { RestyleProps } from './types';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
]);

type FlatButtonProps = RestyleProps & {
  // title: string | ReactNode;
  title: string | ReactElement;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  textStyles?: StyleProp<TextStyle>;
};

const FlatButton: React.FC<FlatButtonProps> = ({
  title,
  onPress,
  disabled,
  isLoading,
  onLongPress,
  textStyles,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      onPress={isLoading || disabled ? () => {} : onPress}
      onLongPress={isLoading || disabled ? () => {} : onLongPress}
      activeOpacity={isLoading || disabled ? 1 : 0.8}>
      <Box
        {...props}
        bg="primary"
        opacity={disabled ? 0.5 : 1}
        borderRadius="4xl"
        height={verticalScale(50)}
        alignItems="center"
        justifyContent="center">
        {isLoading ? (
          <ActivityIndicator color={theme.colors.white} size={'large'} />
        ) : (
          <Text
            color="white"
            fontWeight="700"
            variant="base"
            style={textStyles}>
            {title}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default FlatButton;
