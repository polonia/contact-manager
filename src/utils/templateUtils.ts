import { Contact } from '../types/contact';
import { MessageTemplate } from '../types/template';

export const parseTemplate = (template: string, contact: Contact): string => {
  const firstName = contact.names?.[0]?.displayName?.split(' ')[0] || '';
  const lastName = contact.names?.[0]?.displayName?.split(' ').slice(1).join(' ') || '';
  const birthday = contact.birthdays?.[0]?.date 
    ? new Date(contact.birthdays[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    : '';
  const email = contact.emailAddresses?.[0]?.value || '';

  return template
    .replace(/\{firstName\}/g, firstName)
    .replace(/\{lastName\}/g, lastName)
    .replace(/\{birthday\}/g, birthday)
    .replace(/\{email\}/g, email);
};