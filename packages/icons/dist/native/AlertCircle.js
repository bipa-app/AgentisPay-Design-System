import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconAlertCircle({ size = 24, color = 'currentColor', style }: Props) {
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
      <Circle cx="12" cy="12" r="10"/>
  <Line x1="12" y1="8" x2="12" y2="12"/>
  <Line x1="12" y1="16" x2="12.01" y2="16"/>
    </Svg>
  );
}
