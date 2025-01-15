import { expect, test } from 'vitest';
import { detectMessagingApps } from '../messagingUtils';

test('detectMessagingApps identifies valid phone numbers', () => {
  const validNumber = '+1234567890';
  const result = detectMessagingApps(validNumber);
  
  expect(result.whatsapp).toBe(true);
  expect(result.signal).toBe(true);
});

test('detectMessagingApps rejects invalid phone numbers', () => {
  const invalidNumber = '123';
  const result = detectMessagingApps(invalidNumber);
  
  expect(result.whatsapp).toBe(false);
  expect(result.signal).toBe(false);
});