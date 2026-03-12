import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconMenu({ size = 24, color = 'currentColor', style }: Props) {
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
      <Line x1="3" y1="6" x2="21" y2="6"/>
  <Line x1="3" y1="12" x2="21" y2="12"/>
  <Line x1="3" y1="18" x2="21" y2="18"/>
    </Svg>
  );
}
