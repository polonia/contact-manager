import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TemplatePreview from '../TemplatePreview';

const mockTemplate = {
  id: 'test',
  name: 'Test Template',
  content: 'Hello {firstName}, your birthday is {birthday}!',
  channels: ['email']
};

const mockContact = {
  names: [{ displayName: 'John Doe' }],
  birthdays: [{ date: '1990-03-15' }]
};

test('renders preview with parsed template', () => {
  render(<TemplatePreview template={mockTemplate} contact={mockContact} />);
  
  expect(screen.getByText('Hello John, your birthday is March 15!')).toBeInTheDocument();
});

test('uses default contact when none provided', () => {
  render(<TemplatePreview template={mockTemplate} />);
  
  const previewText = screen.getByText(/Hello John/);
  expect(previewText).toBeInTheDocument();
});