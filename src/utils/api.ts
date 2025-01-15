import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
});

export const fetchContacts = async () => {
  const [googleResponse, linkedinResponse] = await Promise.all([
    api.get('/contacts/google').catch(() => ({ data: [] })),
    api.get('/contacts/linkedin').catch(() => ({ data: [] }))
  ]);

  return [...googleResponse.data, ...linkedinResponse.data];
};