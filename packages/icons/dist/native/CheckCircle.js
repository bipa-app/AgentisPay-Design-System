import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconCheckCircle({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <Polyline points="22 4 12 14.01 9 11.01"/>
    </Svg>
  );
}
