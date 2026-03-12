import React from 'react';
import Svg, { Line, Polyline, Path } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconBank({ size = 24, color = 'currentColor', style }: Props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Line x1="3" y1="21" x2="21" y2="21"/>
  <Line x1="3" y1="10" x2="21" y2="10"/>
  <Polyline points="5 10 5 21"/>
  <Polyline points="19 10 19 21"/>
  <Polyline points="9 10 9 21"/>
  <Polyline points="15 10 15 21"/>
  <Path d="M3 10L12 3l9 7"/>
    </Svg>
  );
}
