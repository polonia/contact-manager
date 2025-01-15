import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Listbox } from '@headlessui/react';
import { fetchContacts } from '../utils/api';
import { ContactCard } from '../components/ContactCard';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function ContactList() {
  const { type } = useParams();
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const { data: contacts = [], isLoading } = useQuery('contacts', fetchContacts);

  if (isLoading) return <div>Loading...</div>;

  const filteredContacts = contacts.filter(contact => {
    if (type === 'with-birthdays') {
      return contact.birthdays?.length > 0 && 
        (selectedMonths.length === 0 || selectedMonths.includes(new Date(contact.birthdays[0].date).getMonth()));
    }
    if (type === 'without-birthdays') {
      return !contact.birthdays?.length;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {type === 'with-birthdays' ? 'Contacts with Birthdays' :
           type === 'without-birthdays' ? 'Contacts without Birthdays' :
           'All Contacts'}
        </h1>

        {type === 'with-birthdays' && (
          <div className="mb-6">
            <Listbox value={selectedMonths} onChange={setSelectedMonths} multiple>
              <Listbox.Button className="bg-white border border-gray-300 rounded-md px-4 py-2">
                {selectedMonths.length === 0 ? 'Filter by month' : 
                 `${selectedMonths.length} month(s) selected`}
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 bg-white shadow-lg rounded-md py-1">
                {months.map((month, index) => (
                  <Listbox.Option
                    key={month}
                    value={index}
                    className={({ active }) =>
                      `${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}
                       cursor-pointer select-none relative py-2 pl-10 pr-4`
                    }
                  >
                    {month}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map(contact => (
            <ContactCard key={contact.resourceName} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactList;