import React from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconSend({ size = 24, color = 'currentColor', style }: Props) {
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
      <Line x1="22" y1="2" x2="11" y2="13"/>
  <Polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </Svg>
  );
}
