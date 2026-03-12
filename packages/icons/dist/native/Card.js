import React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconCard({ size = 24, color = 'currentColor', style }: Props) {
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
      <Rect x="1" y="4" width="22" height="16" rx="2"/>
  <Line x1="1" y1="10" x2="23" y2="10"/>
    </Svg>
  );
}
