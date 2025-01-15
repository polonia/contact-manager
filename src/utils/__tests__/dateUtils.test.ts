import { expect, test, beforeEach } from 'vitest';
import { isThisWeek, getContactsWithBirthdaysThisWeek } from '../dateUtils';
import { Contact } from '../../types/contact';

beforeEach(() => {
  // Mock current date to 2024-03-15 (a Friday)
  const mockDate = new Date(2024, 2, 15);
  vi.useFakeTimers();
  vi.setSystemTime(mockDate);
});

test('isThisWeek correctly identifies dates in current week', () => {
  const sunday = new Date(2024, 2, 10);
  const wednesday = new Date(2024, 2, 13);
  const saturday = new Date(2024, 2, 16);
  const nextMonday = new Date(2024, 2, 18);
  
  expect(isThisWeek(sunday)).toBe(true);
  expect(isThisWeek(wednesday)).toBe(true);
  expect(isThisWeek(saturday)).toBe(true);
  expect(isThisWeek(nextMonday)).toBe(false);
});

test('getContactsWithBirthdaysThisWeek filters contacts correctly', () => {
  const contacts: Contact[] = [
    {
      names: [{ displayName: 'This Week' }],
      birthdays: [{ date: '2000-03-13' }] // Wednesday this week
    },
    {
      names: [{ displayName: 'Next Week' }],
      birthdays: [{ date: '2000-03-20' }] // Next week
    },
    {
      names: [{ displayName: 'No Birthday' }]
    }
  ];
  
  const result = getContactsWithBirthdaysThisWeek(contacts);
  
  expect(result).toHaveLength(1);
  expect(result[0].names?.[0].displayName).toBe('This Week');
});