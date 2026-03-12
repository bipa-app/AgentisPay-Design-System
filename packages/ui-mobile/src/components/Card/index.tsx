import React from 'react';
import { View, Pressable, StyleSheet, type ViewProps, type PressableProps, type ViewStyle, type StyleProp } from 'react-native';
import { colors, radius, spacing, shadows } from '../../theme';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface BaseCardProps {
  padding?:  CardPadding;
  bordered?: boolean;
  shadow?:   boolean;
  children?: React.ReactNode;
}

export type CardProps =
  | (BaseCardProps & ViewProps    & { onPress?: undefined })
  | (BaseCardProps & PressableProps & { onPress: () => void });

const paddingMap: Record<CardPadding, number> = {
  none: 0,
  sm:   spacing[3],
  md:   spacing[4],
  lg:   spacing[6],
};

export function Card({
  padding  = 'md',
  bordered = true,
  shadow   = false,
  onPress,
  children,
  style,
  ...props
}: CardProps & { style?: object }) {
  const baseStyle: StyleProp<ViewStyle> = [
    styles.base,
    { padding: paddingMap[padding] } as ViewStyle,
    bordered ? styles.bordered : undefined,
    shadow   ? (shadows.sm as ViewStyle) : undefined,
  ];

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => [baseStyle, style as StyleProp<ViewStyle>, pressed ? styles.pressed : undefined]}
        onPress={onPress}
        {...(props as PressableProps)}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[baseStyle, style as StyleProp<ViewStyle>]} {...(props as ViewProps)}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors['ap-bg2'],
    borderRadius:    radius.card,
  },
  bordered: {
    borderWidth: 1,
    borderColor: colors['ap-border'],
  },
  pressed: {
    opacity: 0.82,
  },
});
