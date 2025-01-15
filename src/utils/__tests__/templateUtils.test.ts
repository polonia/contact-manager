import { expect, test } from 'vitest';
import { parseTemplate } from '../templateUtils';
import { Contact } from '../../types/contact';

const mockContact: Contact = {
  names: [{ displayName: 'John Doe' }],
  birthdays: [{ date: '1990-03-15' }],
  emailAddresses: [{ value: 'john@example.com' }],
  phoneNumbers: [{ value: '+1234567890' }]
};

test('parseTemplate replaces all variables correctly', () => {
  const template = 'Hello {firstName} {lastName}! Your email is {email} and birthday is {birthday}.';
  const result = parseTemplate(template, mockContact);
  
  expect(result).toBe('Hello John Doe! Your email is john@example.com and birthday is March 15.');
});

test('parseTemplate handles missing data gracefully', () => {
  const incompleteContact: Contact = {
    names: [{ displayName: 'John' }]
  };
  
  const template = 'Hello {firstName}! Your email is {email}.';
  const result = parseTemplate(template, incompleteContact);
  
  expect(result).toBe('Hello John! Your email is .');
});

test('parseTemplate preserves text without variables', () => {
  const template = 'This is a plain text message.';
  const result = parseTemplate(template, mockContact);
  
  expect(result).toBe('This is a plain text message.');
});