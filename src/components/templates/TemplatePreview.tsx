import React from 'react';
import { Eye } from 'lucide-react';
import { Contact } from '../../types/contact';
import { MessageTemplate } from '../../types/template';
import { parseTemplate } from '../../utils/templateUtils';

interface Props {
  template: MessageTemplate;
  contact?: Contact;
}

function TemplatePreview({ template, contact }: Props) {
  const previewContact: Contact = contact || {
    names: [{ displayName: 'John Doe' }],
    birthdays: [{ date: '1990-03-15' }],
    emailAddresses: [{ value: 'john@example.com' }],
    phoneNumbers: [{ value: '+1234567890' }]
  };

  const parsedContent = parseTemplate(template.content, previewContact);

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex items-center gap-2 mb-4">
        <Eye className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-medium text-gray-900">Preview</h3>
      </div>
      <div className="whitespace-pre-wrap text-gray-700">{parsedContent}</div>
    </div>
  );
}