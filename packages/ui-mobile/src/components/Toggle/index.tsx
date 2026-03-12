import React from 'react';
import { View, Text, Switch, Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export interface ToggleProps {
  label:         string;
  value:         boolean;
  onValueChange: (value: boolean) => void;
  disabled?:     boolean;
  helper?:       string;
}

export function Toggle({ label, value, onValueChange, disabled, helper }: ToggleProps) {
  return (
    <View style={styles.row}>
      <View style={styles.labelWrap}>
        <Text style={[styles.label, disabled && styles.dimmed]}>{label}</Text>
        {helper ? <Text style={styles.helper}>{helper}</Text> : null}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={{
          false: colors['ap-bg4'],
          true:  colors['ap-orange-bg'],
        }}
        thumbColor={value ? colors['ap-orange'] : colors['ap-t3']}
        ios_backgroundColor={colors['ap-bg4']}
        {...(Platform.OS === 'web' ? { activeThumbColor: colors['ap-orange'] } : {})}
        accessibilityRole="switch"
        accessibilityState={{ checked: value, disabled }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  labelWrap: { flex: 1, gap: 2 },
  label: {
    fontFamily: fonts.sansMedium,
    fontSize:   14,
    color:      colors['ap-t1'],
  },
  helper: {
    fontFamily: fonts.sans,
    fontSize:   12,
    color:      colors['ap-t2'],
  },
  dimmed: { opacity: 0.4 },
});
