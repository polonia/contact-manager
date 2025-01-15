import React from 'react';
import { Mail } from 'lucide-react';
import { useQuery, useMutation } from 'react-query';
import { fetchContacts } from '../utils/api';
import { getContactsWithBirthdaysThisWeek } from '../utils/dateUtils';
import { sendBirthdayNotificationEmail } from '../utils/emailService';

export function BirthdayNotification() {
  const { data: contacts = [] } = useQuery('contacts', fetchContacts);
  const birthdayContacts = getContactsWithBirthdaysThisWeek(contacts);
  
  const mutation = useMutation(sendBirthdayNotificationEmail, {
    onSuccess: () => {
      alert('Birthday notification email sent successfully!');
    },
    onError: () => {
      alert('Failed to send birthday notification email');
    }
  });

  if (birthdayContacts.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => mutation.mutate(birthdayContacts)}
        disabled={mutation.isLoading}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Mail className="h-5 w-5" />
        <span>Send Birthday Notifications ({birthdayContacts.length})</span>
      </button>
    </div>
  );
}

export default BirthdayNotification;