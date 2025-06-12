import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonRedirect from '../components/ButtonRedirect';

export default function HomeScreen() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const name = await AsyncStorage.getItem('userName');
      if (name) setUserName(name);
    };
    fetchUser();
  }, []);

  const openDashboard = () => {
    // Substitua pela URL real do seu dashboard do Data Studio
    Linking.openURL('https://lookerstudio.google.com/u/0/reporting/14699bb1-d3a1-44e4-8d66-d88243dbcd2c/page/nEsNF');
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem-vindo ao Clima App!</Text>
        <ButtonRedirect onPress={openDashboard} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
});
