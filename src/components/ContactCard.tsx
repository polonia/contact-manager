import React from 'react';
import { User, Calendar } from 'lucide-react';

interface ContactCardProps {
  contact: any; // Type should be more specific based on API response
}

export function ContactCard({ contact }: ContactCardProps) {
  const name = contact.names?.[0]?.displayName || 'Unknown';
  const birthday = contact.birthdays?.[0]?.date;
  const email = contact.emailAddresses?.[0]?.value;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 p-3 rounded-full">
          <User className="h-6 w-6 text-gray-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          {email && <p className="text-sm text-gray-500">{email}</p>}
        </div>
      </div>
      
      {birthday && (
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            {new Date(birthday).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      )}
    </div>
  );
}

export default ContactCard;