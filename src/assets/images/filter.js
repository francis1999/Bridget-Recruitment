import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={57.12} height={51} x={30.88} y={15} fill="#fff" rx={14} />
    </G>
    <Path
      stroke="#5F9117"
      strokeLinecap="round"
      strokeWidth={2}
      d="M56.313 48.07H49"
    />
    <Path
      stroke="#5F9117"
      strokeLinecap="round"
      strokeOpacity={0.59}
      strokeWidth={2}
      d="M69.475 48.07H56.313"
    />
    <Path
      fill="#5F9117"
      stroke="#5F9117"
      strokeWidth={1.5}
      d="M59.469 47.931c0-1.87-1.505-3.386-3.36-3.386-1.856 0-3.36 1.516-3.36 3.386s1.504 3.387 3.36 3.387c1.855 0 3.36-1.517 3.36-3.387Z"
    />
    <Path
      stroke="#5F9117"
      strokeLinecap="round"
      strokeWidth={2}
      d="M62.162 34.247h7.313"
    />
    <Path
      stroke="#5F9117"
      strokeLinecap="round"
      strokeOpacity={0.59}
      strokeWidth={2}
      d="M49 34.247h13.162"
    />
    <Path
      fill="#5F9117"
      stroke="#5F9117"
      strokeWidth={1.5}
      d="M59.006 34.386c0 1.87 1.505 3.386 3.36 3.386 1.856 0 3.36-1.516 3.36-3.386S64.222 31 62.366 31c-1.855 0-3.36 1.516-3.36 3.386Z"
    />
    {/* <Defs></Defs> */}
  </Svg>
);
export {SvgComponent as FilterIcon};
