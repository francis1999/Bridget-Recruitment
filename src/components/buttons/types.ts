
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  //   TextProps,
} from '@shopify/restyle';
import { Theme } from '../../lib/theme';

export type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme>;
