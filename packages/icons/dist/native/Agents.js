import React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconAgents({ size = 24, color = 'currentColor', style }: Props) {
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
      <Rect x="4" y="8" width="16" height="12" rx="2"/>
  <Path d="M8 8V5a4 4 0 0 1 8 0v3"/>
  <Circle cx="9" cy="14" r="1" fill="currentColor" stroke="none"/>
  <Circle cx="15" cy="14" r="1" fill="currentColor" stroke="none"/>
  <Path d="M9 18h6"/>
    </Svg>
  );
}
