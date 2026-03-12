import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconLock({ size = 24, color = 'currentColor', style }: Props) {
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
      <Rect x="3" y="11" width="18" height="11" rx="2"/>
  <Path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </Svg>
  );
}
