import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08"
      stroke={props.color || '#005B97'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export {SvgComponent as BackButtonIcon};
