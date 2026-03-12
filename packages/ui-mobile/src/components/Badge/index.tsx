import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { colors, radius, fonts } from '../../theme';

export type BadgeVariant = 'pending' | 'success' | 'danger' | 'info' | 'teal' | 'default';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  /** Animate with a pulse. Auto-enabled for 'pending'. */
  pulse?: boolean;
}

const variantStyle: Record<BadgeVariant, { bg: string; border: string; text: string }> = {
  pending: {
    bg:     colors['ap-orange-bg'],
    border: colors['ap-orange-brd'],
    text:   colors['ap-orange'],
  },
  success: {
    bg:     colors['ap-success-bg'],
    border: colors['ap-success-brd'],
    text:   colors['ap-success'],
  },
  danger: {
    bg:     colors['ap-danger-bg'],
    border: colors['ap-danger-brd'],
    text:   colors['ap-danger-fg'],
  },
  info: {
    bg:     colors['ap-info-bg'],
    border: colors['ap-info-brd'],
    text:   colors['ap-info'],
  },
  teal: {
    bg:     colors['ap-teal-bg'],
    border: colors['ap-teal-brd'],
    text:   colors['ap-teal'],
  },
  default: {
    bg:     colors['ap-bg4'],
    border: colors['ap-border'],
    text:   colors['ap-t2'],
  },
};

export function Badge({ label, variant = 'default', pulse }: BadgeProps) {
  const shouldPulse = pulse ?? variant === 'pending';
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!shouldPulse) return;
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.45, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1,    duration: 800, useNativeDriver: true }),
      ])
    );
    anim.start();
    return () => anim.stop();
  }, [shouldPulse, opacity]);

  const v = variantStyle[variant];

  return (
    <Animated.View style={[styles.badge, { backgroundColor: v.bg, borderColor: v.border, opacity }]}>
      <Text style={[styles.label, { color: v.text }]}>{label}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: radius.pill,
    borderWidth: 1,
  },
  label: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 11,
    letterSpacing: 0.4,
  },
});
