import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
  <Path
    stroke={props.color || '#000'}
    strokeLinejoin="round"
    strokeOpacity={0.56}
    strokeWidth={1.963}
    d="M17.4 1.507H2.674A1.473 1.473 0 0 0 1.2 2.979v14.726a1.473 1.473 0 0 0 1.473 1.473H17.4a1.472 1.472 0 0 0 1.472-1.473V2.98A1.472 1.472 0 0 0 17.4 1.507Z"
  />
  <Path
    stroke={props.color || '#000'}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeOpacity={0.56}
    strokeWidth={1.963}
    d="M4.853 13.207 7.63 10.43l2.154 2.148 5.161-5.18"
  />
  <Path
    stroke={props.color || '#000'}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeOpacity={0.56}
    strokeWidth={1.963}
    d="M11.018 7.397h3.927v3.927"
  />
</Svg>
);
export {SvgComponent as TrendsIcon};
