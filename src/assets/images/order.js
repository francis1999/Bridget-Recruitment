import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color || '#000'}
      strokeOpacity={0.56}
      strokeWidth={1.963}
      d="M15.935 1.525H4.015A2.384 2.384 0 0 0 1.63 3.909v15.497a2.384 2.384 0 0 0 2.384 2.385h11.921a2.384 2.384 0 0 0 2.385-2.385V3.91a2.384 2.384 0 0 0-2.385-2.384Z"
    />
    <Path
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeOpacity={0.56}
      strokeWidth={1.963}
      d="M6.398 7.486h7.153m-7.153 4.769h7.153m-7.153 4.768h4.769"
    />
  </Svg>
);
export {SvgComponent as OrderIcon};
