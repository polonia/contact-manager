import { Contact } from '../types/contact';

export const isThisWeek = (date: Date): boolean => {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  const endOfWeek = new Date(now.setDate(now.getDate() + 6));
  
  return date >= startOfWeek && date <= endOfWeek;
};

export const getContactsWithBirthdaysThisWeek = (contacts: Contact[]): Contact[] => {
  return contacts.filter(contact => {
    const birthday = contact.birthdays?.[0]?.date;
    if (!birthday) return false;
    
    const birthdayDate = new Date(birthday);
    return isThisWeek(birthdayDate);
  });
};