import React from 'react';
import Svg, { Polyline, Path } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconHistory({ size = 24, color = 'currentColor', style }: Props) {
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
      <Polyline points="1 4 1 10 7 10"/>
  <Path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
  <Polyline points="12 6 12 12 16 14"/>
    </Svg>
  );
}
