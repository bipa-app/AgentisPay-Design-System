import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../theme';

export interface BottomNavItem {
  id:     string;
  label:  string;
  icon:   React.ReactNode;
  badge?: number;
}

export interface BottomNavProps {
  items:     BottomNavItem[];
  activeId:  string;
  /** Central bot-bubble action */
  onBotPress?: () => void;
  onNavigate?: (item: BottomNavItem) => void;
}

export function BottomNav({ items, activeId, onBotPress, onNavigate }: BottomNavProps) {
  // Split items around the center bot bubble
  const mid   = Math.floor(items.length / 2);
  const left  = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <View style={styles.bar}>
      {/* Left tabs */}
      {left.map(item => (
        <NavTab key={item.id} item={item} active={item.id === activeId} onPress={() => onNavigate?.(item)} />
      ))}

      {/* Central bot bubble */}
      <Pressable
        onPress={onBotPress}
        style={({ pressed }) => [styles.botBubble, pressed && styles.botPressed]}
        accessibilityRole="button"
        accessibilityLabel="Agente"
      >
        <Text style={styles.botIcon}>✦</Text>
      </Pressable>

      {/* Right tabs */}
      {right.map(item => (
        <NavTab key={item.id} item={item} active={item.id === activeId} onPress={() => onNavigate?.(item)} />
      ))}
    </View>
  );
}

function NavTab({
  item, active, onPress,
}: { item: BottomNavItem; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityLabel={item.label}
    >
      <View style={styles.tabIconWrap}>
        {item.icon}
        {item.badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge > 99 ? '99+' : item.badge}</Text>
          </View>
        ) : null}
      </View>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{item.label}</Text>
      {active ? <View style={styles.indicator} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    height:          82,
    flexDirection:   'row',
    alignItems:      'center',
    justifyContent:  'space-around',
    backgroundColor: colors['ap-bg2'],
    borderTopWidth:  1,
    borderTopColor:  colors['ap-border'],
    paddingBottom:   spacing[2], // home indicator clearance
    paddingHorizontal: spacing[2],
  },
  tab: {
    flex:           1,
    alignItems:     'center',
    justifyContent: 'center',
    gap:            3,
    paddingVertical: spacing[2],
    position:       'relative',
  },
  tabPressed: { opacity: 0.7 },
  tabIconWrap: { position: 'relative' },
  tabLabel: {
    fontFamily: fonts.sans,
    fontSize:   10,
    color:      colors['ap-t3-accessible'],
    letterSpacing: 0.2,
  },
  tabLabelActive: { color: colors['ap-orange'], fontFamily: fonts.sansSemiBold },
  indicator: {
    position:        'absolute',
    bottom:          -spacing[2],
    width:           4,
    height:          4,
    borderRadius:    2,
    backgroundColor: colors['ap-orange'],
  },
  badge: {
    position:        'absolute',
    top:             -4,
    right:           -6,
    backgroundColor: colors['ap-orange'],
    borderRadius:    8,
    minWidth:        16,
    height:          16,
    alignItems:      'center',
    justifyContent:  'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    fontFamily: fonts.sansBold,
    fontSize:   9,
    color:      '#fff',
  },
  botBubble: {
    width:           52,
    height:          52,
    borderRadius:    26,
    backgroundColor: colors['ap-orange'],
    alignItems:      'center',
    justifyContent:  'center',
    marginBottom:    spacing[2],
    shadowColor:     colors['ap-orange'],
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.45,
    shadowRadius:    12,
    elevation:       8,
  },
  botPressed: { opacity: 0.82, transform: [{ scale: 0.96 }] },
  botIcon: {
    fontSize:   20,
    color:      '#fff',
    lineHeight: 22,
  },
});
