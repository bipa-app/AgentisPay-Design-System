import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconPending({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M5 3H3v18h2l4-6 4 6h2l4-6 2 6h2V3h-2l-4 6-4-6H9L5 9V3z"/>
    </Svg>
  );
}
