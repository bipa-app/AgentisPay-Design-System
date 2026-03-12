import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconReceive({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M12 3v14"/>
  <Polyline points="5 14 12 21 19 14"/>
  <Path d="M5 3h14"/>
    </Svg>
  );
}
