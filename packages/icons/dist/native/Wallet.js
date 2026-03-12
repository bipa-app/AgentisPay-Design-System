import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconWallet({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
  <Path d="M16 3H8L4 7h16l-4-4z"/>
  <Circle cx="16" cy="13" r="1.5" fill="currentColor" stroke="none"/>
    </Svg>
  );
}
