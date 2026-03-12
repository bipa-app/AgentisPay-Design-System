import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, radius, fonts, spacing } from '../../theme';

export type TransactionStatus = 'success' | 'pending' | 'failed' | 'refunded';
export type TransactionDirection = 'in' | 'out';

export interface TransactionItemProps {
  /** Recipient or sender name */
  name:       string;
  /** Formatted amount, e.g. "R$ 200,00" */
  amount:     string;
  direction:  TransactionDirection;
  status:     TransactionStatus;
  /** Date/time string */
  timestamp:  string;
  /** Short metadata line (agent name, PIX key, etc.) */
  meta?:      string;
  onPress?:   () => void;
}

const statusColor: Record<TransactionStatus, string> = {
  success:  colors['ap-success'],
  pending:  colors['ap-orange'],
  failed:   colors['ap-danger-fg'],
  refunded: colors['ap-t2'],
};

const iconBg: Record<TransactionStatus, string> = {
  success:  colors['ap-success-bg'],
  pending:  colors['ap-orange-bg'],
  failed:   colors['ap-danger-bg'],
  refunded: colors['ap-bg4'],
};

const statusLabel: Record<TransactionStatus, string> = {
  success:  '✓',
  pending:  '⏳',
  failed:   '✕',
  refunded: '↩',
};

export function TransactionItem({
  name, amount, direction, status, timestamp, meta, onPress,
}: TransactionItemProps) {
  const amountColor = status === 'failed'
    ? colors['ap-t3-accessible']
    : direction === 'in'
    ? colors['ap-success']
    : colors['ap-t1'];

  const amountPrefix = direction === 'in' ? '+' : '−';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
    >
      {/* Icon */}
      <View style={[styles.icon, { backgroundColor: iconBg[status] }]}>
        <Text style={[styles.iconText, { color: statusColor[status] }]}>
          {statusLabel[status]}
        </Text>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        {meta ? <Text style={styles.meta} numberOfLines={1}>{meta}</Text> : null}
      </View>

      {/* Amount + Time */}
      <View style={styles.right}>
        <Text style={[styles.amount, { color: amountColor }]}>
          {status === 'failed' ? amount : `${amountPrefix} ${amount}`}
        </Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:  'row',
    alignItems:     'center',
    gap:            spacing[3],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
  },
  pressed: { backgroundColor: colors['ap-bg4'] },
  icon: {
    width:         40,
    height:        40,
    borderRadius:  radius.inner,
    alignItems:    'center',
    justifyContent:'center',
    flexShrink:    0,
  },
  iconText: {
    fontFamily: fonts.sansBold,
    fontSize:   14,
  },
  info: { flex: 1, gap: 2 },
  name: {
    fontFamily: fonts.sansMedium,
    fontSize:   14,
    color:      colors['ap-t1'],
  },
  meta: {
    fontFamily: fonts.sans,
    fontSize:   12,
    color:      colors['ap-t2'],
  },
  right:     { alignItems: 'flex-end', gap: 2 },
  amount: {
    fontFamily: fonts.mono,
    fontSize:   14,
    fontWeight: '700',
  },
  timestamp: {
    fontFamily: fonts.sans,
    fontSize:   11,
    color:      colors['ap-t3-accessible'],
  },
});
