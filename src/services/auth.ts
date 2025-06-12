import { api } from './api';

export async function login(email: string, senha: string) {
  const response = await api.post('/login', { email, senha });
  return response.data;
}

export async function signup(email: string, senha: string) {
  const response = await api.post('/signup', { email, senha });
  return response.data;
}
