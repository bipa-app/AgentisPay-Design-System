import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

// ─────────────────────────────────────────────────────────
// BalanceDisplay
//
// Phantom-spacer centering: currency prefix has a fixed width;
// an invisible View of equal width sits on the right so the
// number is optically centered regardless of digit count.
//
// Layout: [CURRENCY_WIDTH R$] [integer] [decimals] [CURRENCY_WIDTH phantom]
//                                     ↑ true center
// ─────────────────────────────────────────────────────────

const CURRENCY_WIDTH = 36;

export type BalanceVariant = 'default' | 'success' | 'danger' | 'muted';

export interface BalanceDisplayProps {
  /** Integer part, e.g. "200" or "3.450" */
  integer: string;
  /** Decimal part including separator, e.g. ",00" */
  decimals?: string;
  /** Currency prefix symbol */
  currency?: string;
  /** Label above the amount */
  label?: string;
  /** Color variant */
  variant?: BalanceVariant;
}

const variantAmountColor: Record<BalanceVariant, string> = {
  default: colors['ap-t1'],
  success: colors['ap-success'],
  danger:  colors['ap-danger-fg'],
  muted:   colors['ap-t3-accessible'],
};

const variantCurrencyColor: Record<BalanceVariant, string> = {
  default: colors['ap-t5'],
  success: colors['ap-success'],
  danger:  colors['ap-danger-fg'],
  muted:   colors['ap-t5'],
};

export function BalanceDisplay({
  integer,
  decimals = ',00',
  currency = 'R$',
  label,
  variant  = 'default',
}: BalanceDisplayProps) {
  const amountColor   = variantAmountColor[variant];
  const currencyColor = variantCurrencyColor[variant];

  return (
    <View style={styles.hero}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.row}>
        {/* Currency prefix — fixed width */}
        <Text style={[styles.currency, { color: currencyColor }]}>{currency}</Text>

        {/* Amount */}
        <Text style={[styles.integer, { color: amountColor }]}>{integer}</Text>
        <Text style={[styles.decimals, { color: amountColor }]}>{decimals}</Text>

        {/* Phantom spacer — mirrors currency width → optical centering */}
        <View style={styles.phantom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: 8 },
  label: {
    fontFamily:    fonts.sans,
    fontSize:      12,
    color:         colors['ap-t5'],
    letterSpacing: 0.2,
  },
  row: { flexDirection: 'row', alignItems: 'flex-end' },
  currency: {
    fontFamily:    fonts.sans,
    fontSize:      20,
    width:         CURRENCY_WIDTH,
    textAlign:     'right',
    paddingBottom: 10,
    paddingRight:  6,
  },
  integer: {
    fontFamily:    fonts.mono,
    fontSize:      52,
    fontWeight:    '700',
    lineHeight:    52 * 0.9,
    letterSpacing: -2.5,
  },
  decimals: {
    fontFamily:    fonts.mono,
    fontSize:      26,
    lineHeight:    26 * 1.35,
    letterSpacing: -0.5,
  },
  phantom: { width: CURRENCY_WIDTH },
});
