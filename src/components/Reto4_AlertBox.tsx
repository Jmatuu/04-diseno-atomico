import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type AlertType = 'success' | 'warning' | 'error';

interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

export default function AlertBox({ type, message, onClose }: AlertBoxProps) {
  return (
    <View style={[styles.container, styles[type]]}>
      <Text style={styles.message}>{message}</Text>
      {onClose ? (
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  success: {
    backgroundColor: '#16a34a',
  },
  warning: {
    backgroundColor: '#d97706',
  },
  error: {
    backgroundColor: '#dc2626',
  },
  message: {
    flex: 1,
    color: '#fff',
    fontWeight: '600',
  },
  closeButton: {
    marginLeft: 12,
    paddingHorizontal: 6,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});