import axios from 'axios';
import { Contact } from '../types/contact';
import { detectMessagingApps } from './messagingUtils';

export const sendBirthdayNotificationEmail = async (contacts: Contact[]) => {
  try {
    const response = await axios.post('/api/email/birthday-notification', {
      contacts: contacts.map(contact => ({
        ...contact,
        messaging: contact.phoneNumbers?.map(phone => ({
          number: phone.value,
          apps: detectMessagingApps(phone.value)
        }))
      }))
    });
    return response.data;
  } catch (error) {
    console.error('Failed to send birthday notification email:', error);
    throw error;
  }
};