import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../theme';

export interface TopNavProps {
  title?:       string;
  /** Show a back chevron on the left */
  showBack?:    boolean;
  onBack?:      () => void;
  /** Optional right action element */
  rightAction?: React.ReactNode;
}

export function TopNav({ title, showBack, onBack, rightAction }: TopNavProps) {
  return (
    <View style={styles.nav}>
      {/* Left */}
      <View style={styles.side}>
        {showBack ? (
          <Pressable
            onPress={onBack}
            style={({ pressed }) => [styles.backBtn, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>
        ) : null}
      </View>

      {/* Title */}
      {title ? (
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      ) : (
        <View />
      )}

      {/* Right */}
      <View style={[styles.side, styles.sideRight]}>
        {rightAction ?? null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height:          48,
    flexDirection:   'row',
    alignItems:      'center',
    justifyContent:  'space-between',
    paddingHorizontal: spacing[4],
    backgroundColor: colors['ap-bg'],
    borderBottomWidth: 1,
    borderBottomColor: colors['ap-border'],
  },
  side:      { width: 44, alignItems: 'flex-start' },
  sideRight: { alignItems: 'flex-end' },
  title: {
    fontFamily: fonts.sansSemiBold,
    fontSize:   16,
    color:      colors['ap-t1'],
    flex:       1,
    textAlign:  'center',
  },
  backBtn: {
    width:          36,
    height:         36,
    alignItems:     'center',
    justifyContent: 'center',
    borderRadius:   8,
  },
  pressed: { backgroundColor: colors['ap-bg4'] },
  backIcon: {
    fontFamily: fonts.sans,
    fontSize:   28,
    color:      colors['ap-t1'],
    lineHeight: 30,
  },
});
