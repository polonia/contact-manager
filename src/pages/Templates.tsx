import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MessageTemplate } from '../types/template';
import TemplateEditor from '../components/templates/TemplateEditor';
import TemplatePreview from '../components/templates/TemplatePreview';
import TemplateSender from '../components/templates/TemplateSender';

const DEFAULT_TEMPLATE: MessageTemplate = {
  id: 'new',
  name: 'New Template',
  content: 'Hi {firstName},\n\nHope you're having a great day!\n\nBest regards',
  channels: ['email']
};

function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
  const { data: contacts = [] } = useQuery('contacts', () => []);

  const handleSave = (template: MessageTemplate) => {
    // Save template logic here
    console.log('Saving template:', template);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Message Templates</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <TemplateEditor
              template={selectedTemplate}
              onSave={handleSave}
            />
          </div>
          
          <div className="space-y-6">
            <TemplatePreview template={selectedTemplate} />
            
            {contacts.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Send to Contact</h3>
                <TemplateSender
                  template={selectedTemplate}
                  contact={contacts[0]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Templates;