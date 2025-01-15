import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { ContactList } from './pages/ContactList';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { BirthdayNotification } from './components/BirthdayNotification';
import { Footer } from './components/layout/Footer';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contacts/:type" element={<ContactList />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
            <BirthdayNotification />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}