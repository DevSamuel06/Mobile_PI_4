import React from 'react';
import { TouchableOpacity, Text , StyleSheet } from 'react-native';

type ButtonSignupProps = {
  onPress: () => void;
};

export default function ButtonSignup({ onPress }: ButtonSignupProps) {
  return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>CRIAR CONTA</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4da6ff',
      borderRadius: 20,
      paddingVertical: 12,
      paddingHorizontal: 8,
      alignItems: 'center',
      marginBottom: 12,
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
  });