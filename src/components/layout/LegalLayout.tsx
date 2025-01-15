import React from 'react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            ← Back to Home
          </Link>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="prose prose-indigo max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}