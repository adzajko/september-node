import axios from 'axios';
import { apiUrl } from '../constants';
import { decodeToken } from 'react-jwt';

export const logIn = async (username, password) => {
  try {
    const rawResponse = await axios.post(`${apiUrl}/login`, {
      username,
      password
    });
    return {
      token: rawResponse.data,
      user: decodeToken(rawResponse.data)
    };
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  sessionStorage.clear();
};

export const registerNewUser = async (username, password) => {
  const res = await axios.post(`${apiUrl}/register`, { username, password });
  return res.data;
}