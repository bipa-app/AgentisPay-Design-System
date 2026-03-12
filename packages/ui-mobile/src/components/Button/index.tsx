import React from 'react';
import { Pressable, Text, ActivityIndicator, StyleSheet, type PressableProps } from 'react-native';
import { colors, radius, fonts } from '../../theme';

export type ButtonVariant = 'primary' | 'ghost' | 'teal' | 'danger' | 'success';
export type ButtonSize    = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
}

const variantStyle: Record<ButtonVariant, { bg: string; border: string; text: string }> = {
  primary: {
    bg:     colors['ap-orange'],
    border: colors['ap-orange'],
    text:   '#FFFFFF',
  },
  ghost: {
    bg:     colors['ap-bg4'],
    border: colors['ap-border2'],
    text:   colors['ap-t1'],
  },
  teal: {
    bg:     colors['ap-teal'],
    border: colors['ap-teal'],
    text:   '#FFFFFF',
  },
  danger: {
    bg:     colors['ap-danger-bg'],
    border: colors['ap-danger-brd'],
    text:   colors['ap-danger-fg'],
  },
  success: {
    bg:     colors['ap-success-bg'],
    border: colors['ap-success-brd'],
    text:   colors['ap-success'],
  },
};

const sizeStyle: Record<ButtonSize, { height: number; px: number; fontSize: number }> = {
  sm: { height: 36, px: 14, fontSize: 12 },
  md: { height: 48, px: 20, fontSize: 14 },
  lg: { height: 56, px: 28, fontSize: 15 },
};

export function Button({
  label,
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const v = variantStyle[variant];
  const s = sizeStyle[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        {
          height:           s.height,
          paddingHorizontal: s.px,
          backgroundColor:  v.bg,
          borderColor:      v.border,
          borderRadius:     radius.btn,
          opacity:          isDisabled ? 0.4 : pressed ? 0.82 : 1,
          transform:        [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={v.text} />
      ) : (
        <Text style={[styles.label, { color: v.text, fontSize: s.fontSize }]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    gap: 8,
  },
  label: {
    fontFamily: fonts.sansSemiBold,
    letterSpacing: 0.1,
    textAlign: 'center',
  },
});
