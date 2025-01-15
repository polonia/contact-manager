import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Users, Calendar, UserMinus } from 'lucide-react';
import { fetchContacts } from '../utils/api';
import { MetricCard } from '../components/MetricCard';

export function Dashboard() {
  const { data: contacts = [], isLoading, error } = useQuery('contacts', fetchContacts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading contacts</div>;

  const totalContacts = contacts.length;
  const contactsWithBirthdays = contacts.filter(contact => contact.birthdays?.length > 0).length;
  const contactsWithoutBirthdays = totalContacts - contactsWithBirthdays;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/contacts/all">
            <MetricCard
              title="Total Contacts"
              value={totalContacts}
              icon={Users}
              color="bg-indigo-600"
            />
          </Link>
          
          <Link to="/contacts/with-birthdays">
            <MetricCard
              title="Contacts with Birthdays"
              value={contactsWithBirthdays}
              icon={Calendar}
              color="bg-green-600"
            />
          </Link>
          
          <Link to="/contacts/without-birthdays">
            <MetricCard
              title="Contacts without Birthdays"
              value={contactsWithoutBirthdays}
              icon={UserMinus}
              color="bg-yellow-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;