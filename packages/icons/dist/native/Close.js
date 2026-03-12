import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconClose({ size = 24, color = 'currentColor', style }: Props) {
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
      <Line x1="18" y1="6" x2="6" y2="18"/>
  <Line x1="6" y1="6" x2="18" y2="18"/>
    </Svg>
  );
}
