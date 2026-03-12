import React, { useState } from 'react';
import {
  View, Text, TextInput as RNInput, StyleSheet,
  type TextInputProps as RNTextInputProps,
} from 'react-native';
import { colors, radius, fonts, spacing } from '../../theme';

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  label?:       string;
  error?:       string;
  helper?:      string;
  prefix?:      string;
  required?:    boolean;
}

export function TextInput({
  label, error, helper, prefix, required, ...props
}: TextInputProps) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? colors['ap-danger']
    : focused
    ? colors['ap-orange']
    : colors['ap-border2'];

  const shadowStyle = focused && !error
    ? {
        shadowColor:   colors['ap-orange'],
        shadowOffset:  { width: 0, height: 0 },
        shadowOpacity: 0.18,
        shadowRadius:  6,
        elevation:     2,
      }
    : {};

  return (
    <View style={styles.field}>
      {label ? (
        <Text style={styles.label}>
          {label}
          {required ? <Text style={styles.required}> *</Text> : null}
        </Text>
      ) : null}

      <View style={[styles.inputWrap, { borderColor }, shadowStyle]}>
        {prefix ? (
          <Text style={styles.prefix}>{prefix}</Text>
        ) : null}
        <RNInput
          style={styles.input}
          placeholderTextColor={colors['ap-t3']}
          cursorColor={colors['ap-orange']}
          selectionColor={colors['ap-orange-bg']}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          accessibilityValue={error ? { text: error } : undefined}
          {...props}
        />
      </View>

      {error ? (
        <Text style={styles.error} accessibilityRole="alert">{error}</Text>
      ) : helper ? (
        <Text style={styles.helper}>{helper}</Text>
      ) : null}
    </View>
  );
}

export interface AmountInputProps extends Omit<RNTextInputProps, 'style' | 'keyboardType'> {
  label?:       string;
  currencyPrefix?: string;
  error?:       string;
}

export function AmountInput({
  label, currencyPrefix = 'R$', error, ...props
}: AmountInputProps) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? colors['ap-danger']
    : focused ? colors['ap-orange'] : colors['ap-border2'];

  return (
    <View style={styles.field}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputWrap, { borderColor }]}>
        <Text style={styles.amountPrefix}>{currencyPrefix}</Text>
        <RNInput
          style={styles.amountInput}
          keyboardType="decimal-pad"
          placeholderTextColor={colors['ap-t3']}
          cursorColor={colors['ap-orange']}
          selectionColor={colors['ap-orange-bg']}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field:     { gap: 6 },
  label:     { fontFamily: fonts.sansMedium, fontSize: 13, color: colors['ap-t2'] },
  required:  { color: colors['ap-orange'] },
  inputWrap: {
    flexDirection:   'row',
    alignItems:      'center',
    backgroundColor: colors['ap-bg3'],
    borderWidth:     1,
    borderRadius:    radius.input,
    paddingHorizontal: spacing[4],
    height:          48,
    gap:             6,
  },
  prefix: {
    fontFamily: fonts.mono,
    fontSize:   14,
    color:      colors['ap-t3-accessible'],
  },
  input: {
    flex:        1,
    fontFamily:  fonts.sans,
    fontSize:    14,
    color:       colors['ap-t1'],
    paddingVertical: 0,
  },
  amountPrefix: {
    fontFamily:  fonts.mono,
    fontSize:    20,
    color:       colors['ap-t5'],
    lineHeight:  24,
  },
  amountInput: {
    flex:        1,
    fontFamily:  fonts.mono,
    fontSize:    28,
    fontWeight:  '700',
    color:       colors['ap-t1'],
    letterSpacing: -1,
    paddingVertical: 0,
  },
  error:  { fontFamily: fonts.sans, fontSize: 12, color: colors['ap-danger-fg'] },
  helper: { fontFamily: fonts.sans, fontSize: 12, color: colors['ap-t2'] },
});
