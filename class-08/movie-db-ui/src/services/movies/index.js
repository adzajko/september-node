import axios from 'axios';
import { apiUrl, headers } from '../constants';

export const getAllMovies = async () => {
  try {
    const movies = await axios.get(`${apiUrl}/movies`, { headers });
    return movies.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
