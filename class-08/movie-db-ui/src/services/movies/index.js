import axios from 'axios';
import { apiUrl } from '../constants';

export const getAllMovies = async () => {
  try {
    const movies = await axios.get(`${apiUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    return movies.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
