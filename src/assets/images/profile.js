import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
        stroke={props.color || '#000'}
      strokeOpacity={0.56}
      strokeWidth={2.454}
      d="M10.041 7.379a2.945 2.945 0 1 0 0-5.89 2.945 2.945 0 0 0 0 5.89Z"
    />
    <Path
      stroke={props.color || '#000'}
      strokeLinejoin="round"
      strokeOpacity={0.56}
      strokeWidth={2.454}
      d="M2.187 15.233a3.927 3.927 0 0 1 3.927-3.927h7.854a3.927 3.927 0 0 1 3.927 3.927 1.964 1.964 0 0 1-1.963 1.963H4.15a1.964 1.964 0 0 1-1.964-1.963Z"
    />
  </Svg>
);
export {SvgComponent as ProfileIcon};
