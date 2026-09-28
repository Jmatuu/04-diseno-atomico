import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface InfoCardProps {
  title: string;
  imageUri?: string;
  children?: React.ReactNode;
}

export default function InfoCard({ title, imageUri, children }: InfoCardProps) {
  return (
    <View style={styles.card}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  content: {
    gap: 8,
  },
});