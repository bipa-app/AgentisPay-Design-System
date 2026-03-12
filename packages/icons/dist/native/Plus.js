import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconPlus({ size = 24, color = 'currentColor', style }: Props) {
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
      <Line x1="12" y1="5" x2="12" y2="19"/>
  <Line x1="5" y1="12" x2="19" y2="12"/>
    </Svg>
  );
}
