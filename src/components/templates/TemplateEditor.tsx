import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { MessageTemplate, TEMPLATE_VARIABLES } from '../../types/template';

interface Props {
  template: MessageTemplate;
  onSave: (template: MessageTemplate) => void;
}

function TemplateEditor({ template, onSave }: Props) {
  const [content, setContent] = useState(template.content);
  const [name, setName] = useState(template.name);
  const [channels, setChannels] = useState(template.channels);

  const handleSave = () => {
    onSave({ ...template, content, name, channels });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Template Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Available Variables</label>
        <div className="mt-1 flex flex-wrap gap-2">
          {TEMPLATE_VARIABLES.map((variable) => (
            <button
              key={variable.key}
              onClick={() => setContent(content + `{${variable.key}}`)}
              className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
            >
              {variable.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Channels</label>
        <div className="mt-1 flex flex-wrap gap-2">
          {['email', 'linkedin', 'whatsapp', 'signal'].map((channel) => (
            <label key={channel} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={channels.includes(channel)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setChannels([...channels, channel]);
                  } else {
                    setChannels(channels.filter(c => c !== channel));
                  }
                }}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600 capitalize">{channel}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <Save className="h-4 w-4 mr-2" />
        Save Template
      </button>
    </div>
  );
}