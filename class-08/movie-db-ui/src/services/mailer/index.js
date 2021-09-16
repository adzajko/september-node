import axios from 'axios';
import { apiUrl } from '../constants';

export const sendMail = async mailData => {
  try {
    await axios.post(`${apiUrl}/mail`, mailData);
  } catch (error) {
    throw error;
  }
};
