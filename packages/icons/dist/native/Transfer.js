import React from 'react';
import Svg, { Polyline, Path } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconTransfer({ size = 24, color = 'currentColor', style }: Props) {
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
      <Polyline points="17 1 21 5 17 9"/>
  <Path d="M3 11V9a4 4 0 0 1 4-4h14"/>
  <Polyline points="7 23 3 19 7 15"/>
  <Path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </Svg>
  );
}
