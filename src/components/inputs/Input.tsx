/* eslint-disable react-native/no-inline-styles */
// @ts-ignore
// @ts-nocheck

import {backgroundColor, useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {InputProps} from './types';
import {Box, Text, Theme} from '../../lib/theme';

const Input: React.FC<InputProps> = ({
  label = 'Input Label',
  error,
  onChange,
  icon,
  // currency,
  prefix,
  moreStyles,
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const [inputText, setInputText] = useState('');

  const textInputStyle = {
    borderWidth: 1,
    height: verticalScale(40),
    borderRadius: theme.borderRadii.lg,
    borderColor: error ? theme.colors.red : '#EFEFEF',
    fontSize: moderateScale(16),
    paddingHorizontal: scale(12),
    color: theme.colors.textDark,
    fontWeight: '500',
    paddingLeft: prefix || icon ? scale(30) : scale(12),
    backgroundColor: '#FCFCFD',
    ...moreStyles,
  };

  const handleTextChange = (text: any) => {
    setInputText(text);
    onChange(text);
  };

  return (
    <Box marginVertical="1">
      <Text variant="lg" color="textPrimary" mb="2">
        {label}
      </Text>
      <Box>
        {prefix && (
          <Box position="absolute" top={verticalScale(14)} left={scale(10)}>
            <Text variant="xl" fontWeight="500" color="textDarkPurple">
              {prefix}
            </Text>
          </Box>
        )}

        {icon && (
          <Box
            position="absolute"
            zIndex={10}
            top={verticalScale(14)}
            left={scale(10)}>
            {icon}
          </Box>
        )}
        <TextInput
          style={textInputStyle}
          onChangeText={handleTextChange}
          value={inputText}
          placeholderTextColor={theme.colors.textSecondary}
          {...rest}
        />
      </Box>
      <Text color="red">{error}</Text>
    </Box>
  );
};

export default Input;
