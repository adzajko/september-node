export const apiUrl = 'http://localhost:8080/movie-api/v1';

export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${sessionStorage.getItem('token')}`
};
