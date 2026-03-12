import React from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconArrowLeft({ size = 24, color = 'currentColor', style }: Props) {
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
      <Line x1="19" y1="12" x2="5" y2="12"/>
  <Polyline points="12 19 5 12 12 5"/>
    </Svg>
  );
}
