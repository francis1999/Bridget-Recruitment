import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}     viewBox="0 0 26 26">
    <Path
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.56}
      strokeWidth={1.963}
      d="m3.963 9.415 9.541-6.872 9.541 6.872v10.8c0 .52-.223 1.02-.62 1.388a2.21 2.21 0 0 1-1.5.575H6.083a2.21 2.21 0 0 1-1.5-.575 1.893 1.893 0 0 1-.62-1.389V9.415Z"
    />
    <Path
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.56}
      strokeWidth={1.963}
      d="M10.324 22.178V12.36h6.36v9.818"
    />
  </Svg>
);
export {SvgComponent as HomeIcon};
