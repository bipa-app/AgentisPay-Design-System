import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconFilter({ size = 24, color = 'currentColor', style }: Props) {
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
      <Polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </Svg>
  );
}
