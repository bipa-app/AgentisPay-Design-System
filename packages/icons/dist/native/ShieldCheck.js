import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconShieldCheck({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  <Polyline points="9 12 11 14 15 10"/>
    </Svg>
  );
}
