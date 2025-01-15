import React from 'react';
import { Users } from 'lucide-react';

const API_URL = import.meta.env.PROD 
  ? 'https://contact-manager-backend.onrender.com' // Render.com backend URL
  : 'http://localhost:3000';

export function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Contact Manager</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to manage your contacts</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <a
            href={`${API_URL}/auth/google`}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign in with Google
          </a>
          
          <a
            href={`${API_URL}/auth/linkedin`}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in with LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;