import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Contact } from '../../types/contact';
import { MessageTemplate } from '../../types/template';
import { parseTemplate } from '../../utils/templateUtils';
import { sendMessage } from '../../utils/messageService';

interface Props {
  template: MessageTemplate;
  contact: Contact;
}

function TemplateSender({ template, contact }: Props) {
  const [sending, setSending] = useState(false);

  const handleSend = async (channel: string) => {
    setSending(true);
    try {
      const content = parseTemplate(template.content, contact);
      await sendMessage(content, channel, contact);
      alert(`Message sent via ${channel}`);
    } catch (error) {
      alert(`Failed to send message via ${channel}`);
    }
    setSending(false);
  };

  return (
    <div className="flex gap-2">
      {template.channels.map(channel => (
        <button
          key={channel}
          onClick={() => handleSend(channel)}
          disabled={sending}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
        >
          <Send className="h-4 w-4 mr-2" />
          Send via {channel}
        </button>
      ))}
    </div>
  );
}