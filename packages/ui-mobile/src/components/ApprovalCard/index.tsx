import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { colors, radius, fonts, spacing } from '../../theme';
import { Badge } from '../Badge';
import { Button } from '../Button';

export interface ApprovalCardProps {
  /** Agent that initiated the payment */
  agentName:   string;
  /** Agent command / instruction text */
  command:     string;
  /** Recipient display name */
  recipient:   string;
  /** Formatted amount, e.g. "R$ 200,00" */
  amount:      string;
  /** Seconds remaining to approve (0–N). Renders the timer track. */
  timeLeft?:   number;
  /** Total seconds for the timer (used to calculate progress). @default 60 */
  totalTime?:  number;
  onApprove?:  () => void;
  onReject?:   () => void;
}

export function ApprovalCard({
  agentName, command, recipient, amount,
  timeLeft = 60, totalTime = 60,
  onApprove, onReject,
}: ApprovalCardProps) {
  const progress = useRef(new Animated.Value(timeLeft / totalTime)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue:         timeLeft / totalTime,
      duration:        1000,
      useNativeDriver: false,
    }).start();
  }, [timeLeft, totalTime, progress]);

  const trackWidth = progress.interpolate({
    inputRange:  [0, 1],
    outputRange: ['0%', '100%'],
  });

  const isExpired  = timeLeft <= 0;
  const isUrgent   = timeLeft <= 10 && !isExpired;
  const trackColor = isExpired ? colors['ap-danger'] : isUrgent ? colors['ap-orange-light'] : colors['ap-orange'];

  return (
    <View style={styles.card}>
      {/* Timer track */}
      <View style={styles.track}>
        <Animated.View style={[styles.trackFill, { width: trackWidth, backgroundColor: trackColor }]} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Badge
          variant={isExpired ? 'danger' : 'pending'}
          label={isExpired ? 'Expirado' : `${timeLeft}s restantes`}
        />
        <Text style={styles.agentLabel}>{agentName}</Text>
      </View>

      {/* Command */}
      <View style={styles.commandWrap}>
        <Text style={styles.commandText} numberOfLines={2}>{command}</Text>
      </View>

      {/* Recipient + Amount */}
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.infoLabel}>Destinatário</Text>
          <Text style={styles.infoValue}>{recipient}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.infoLabel}>Valor</Text>
          <Text style={[styles.infoValue, styles.amount]}>{amount}</Text>
        </View>
      </View>

      {/* Actions */}
      {!isExpired && (
        <View style={styles.actions}>
          <View style={{ flex: 1 }}>
            <Button label="Recusar"  variant="danger"   onPress={onReject} />
          </View>
          <View style={{ flex: 1 }}>
            <Button label="Aprovar"  variant="primary"  onPress={onApprove} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors['ap-bg2'],
    borderWidth:     1,
    borderColor:     colors['ap-border'],
    borderRadius:    radius.card,
    overflow:        'hidden',
  },
  track: {
    height:          3,
    backgroundColor: colors['ap-bg4'],
  },
  trackFill: {
    height:          3,
    borderRadius:    2,
  },
  header: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        spacing[4],
    paddingBottom:  spacing[3],
  },
  agentLabel: {
    fontFamily: fonts.sansMedium,
    fontSize:   12,
    color:      colors['ap-t2'],
  },
  commandWrap: {
    marginHorizontal: spacing[4],
    marginBottom:     spacing[3],
    backgroundColor:  colors['ap-bg3'],
    borderWidth:      1,
    borderColor:      colors['ap-border2'],
    borderRadius:     radius.inner,
    padding:          spacing[3],
  },
  commandText: {
    fontFamily: fonts.mono,
    fontSize:   12,
    color:      colors['ap-t2'],
    lineHeight: 18,
  },
  infoRow: {
    flexDirection:   'row',
    justifyContent:  'space-between',
    paddingHorizontal: spacing[4],
    paddingBottom:   spacing[4],
  },
  infoLabel: {
    fontFamily: fonts.sans,
    fontSize:   11,
    color:      colors['ap-t3-accessible'],
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: fonts.sansSemiBold,
    fontSize:   14,
    color:      colors['ap-t1'],
  },
  amount: {
    fontFamily: fonts.mono,
    color:      colors['ap-orange'],
    fontSize:   16,
  },
  actions: {
    flexDirection: 'row',
    gap:           spacing[3],
    padding:       spacing[4],
    paddingTop:    spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors['ap-border'],
  },
});
