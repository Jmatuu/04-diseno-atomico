import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface StyledInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
}

export default function StyledInput({
  value,
  onChangeText,
  placeholder,
  error,
}: StyledInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, error ? styles.inputError : null]}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9ca3af',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
});