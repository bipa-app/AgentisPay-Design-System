import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconPix({ size = 24, color = 'currentColor', style }: Props) {
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
      <Path d="M5.5 5.5L12 2l6.5 3.5v9L12 18l-6.5-3.5v-9z"/>
  <Path d="M12 2v16M5.5 5.5l6.5 3.5 6.5-3.5"/>
  <Path d="M5.5 14.5L12 11l6.5 3.5"/>
  <Circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/>
    </Svg>
  );
}
