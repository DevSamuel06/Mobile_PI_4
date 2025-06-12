import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { login } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignup from '../components/ButtonSignup';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setErro('');
    try {
      const data = await login(email, senha);

      if (data.token) {
        navigation.navigate('Home' as never);
      } else {
        setErro('Resposta inesperada da API');
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        setErro(error.response.data.message);
      } else {
        setErro('Erro ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <ButtonLogin onPress={handleLogin} disabled={!email || !senha} />
            <ButtonSignup onPress={() => navigation.navigate('Signup' as never)} />
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
    color: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
