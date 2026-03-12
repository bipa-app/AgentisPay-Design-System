import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconSearch({ size = 24, color = 'currentColor', style }: Props) {
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
      <Circle cx="11" cy="11" r="8"/>
  <Line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </Svg>
  );
}
