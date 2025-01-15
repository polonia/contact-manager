import axios from 'axios';
import { Contact } from '../types/contact';

export const sendMessage = async (
  content: string,
  channel: string,
  contact: Contact
) => {
  const endpoint = `/api/messages/${channel}`;
  const response = await axios.post(endpoint, {
    content,
    contact
  });
  return response.data;
};