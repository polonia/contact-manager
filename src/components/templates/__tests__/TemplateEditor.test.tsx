import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TemplateEditor from '../TemplateEditor';

const mockTemplate = {
  id: 'test',
  name: 'Test Template',
  content: 'Hello {firstName}',
  channels: ['email']
};

test('renders template editor with initial values', () => {
  const onSave = vi.fn();
  render(<TemplateEditor template={mockTemplate} onSave={onSave} />);
  
  expect(screen.getByDisplayValue('Test Template')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Hello {firstName}')).toBeInTheDocument();
});

test('updates template name', async () => {
  const onSave = vi.fn();
  render(<TemplateEditor template={mockTemplate} onSave={onSave} />);
  
  const nameInput = screen.getByDisplayValue('Test Template');
  await userEvent.clear(nameInput);
  await userEvent.type(nameInput, 'New Name');
  
  const saveButton = screen.getByText('Save Template');
  await userEvent.click(saveButton);
  
  expect(onSave).toHaveBeenCalledWith(expect.objectContaining({
    name: 'New Name'
  }));
});

test('toggles communication channels', async () => {
  const onSave = vi.fn();
  render(<TemplateEditor template={mockTemplate} onSave={onSave} />);
  
  const whatsappCheckbox = screen.getByLabelText('whatsapp');
  await userEvent.click(whatsappCheckbox);
  
  const saveButton = screen.getByText('Save Template');
  await userEvent.click(saveButton);
  
  expect(onSave).toHaveBeenCalledWith(expect.objectContaining({
    channels: ['email', 'whatsapp']
  }));
});