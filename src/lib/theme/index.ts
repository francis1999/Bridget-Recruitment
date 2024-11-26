import {createBox, createText, createTheme} from '@shopify/restyle';
import {colors, darkThemeColors} from './colors';
import {moderateScale} from 'react-native-size-matters';
import {textVariants} from './text-variants';

const theme = createTheme({
  colors: colors,
  spacing: {
    px: '1px',
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '4.5': 18,
    '5': 20,
    '5.5': 22,
    '6': 24,
    '7': 28,
    '7.5': 30,
    '8': 32,
    '9': 36,
    '10': 40,
    '11': 44,
    '12': 48,
    '16': 64,
    '18': 72,
    '20': 80,
    '24': 96,
    '32': 128,
    '40': 160,
    '48': 192,
    '56': 224,
    '64': 256,
    '72': 288,
    '80': 320,
    '96': 384,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    full: '100%',
  },
  borderRadii: {
    none: 0,
    '2xs': moderateScale(2),
    xs: moderateScale(4),
    sm: moderateScale(6),
    md: moderateScale(8),
    lg: moderateScale(12),
    xl: moderateScale(16),
    '2xl': moderateScale(20),
    '3xl': moderateScale(24),
    '4xl': moderateScale(28),
    full: 9999,
  },
  textVariants,
});

export const darkTheme: Theme = {
  ...theme,
  colors: darkThemeColors,
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
