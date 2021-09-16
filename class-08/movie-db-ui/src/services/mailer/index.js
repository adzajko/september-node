import axios from 'axios';
import { apiUrl } from '../constants';

export const sendMail = async mailData => {
  try {
    const res = await axios.post(`${apiUrl}/mail`, mailData);
    return res.data;
  } catch (error) {
    throw error;
  }
};
