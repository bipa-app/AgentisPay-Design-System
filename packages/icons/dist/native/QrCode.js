import React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function IconQrCode({ size = 24, color = 'currentColor', style }: Props) {
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
      <Rect x="3" y="3" width="7" height="7"/>
  <Rect x="14" y="3" width="7" height="7"/>
  <Rect x="3" y="14" width="7" height="7"/>
  <Rect x="14" y="14" width="3" height="3"/>
  <Line x1="21" y1="14" x2="21" y2="14.01"/>
  <Line x1="18" y1="21" x2="18" y2="21.01"/>
  <Line x1="21" y1="18" x2="21" y2="21"/>
  <Line x1="5" y1="5" x2="5" y2="5.01"/>
  <Line x1="19" y1="5" x2="19" y2="5.01"/>
  <Line x1="5" y1="19" x2="5" y2="19.01"/>
    </Svg>
  );
}
