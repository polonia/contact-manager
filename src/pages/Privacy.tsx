import React from 'react';
import { LegalLayout } from '../components/layout/LegalLayout';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p>This Privacy Policy explains how we collect, use, and protect your personal information when you use our Contact Manager application.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Data Collection</h2>
        <p>We collect information that you provide directly to us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information from your Google and LinkedIn accounts</li>
          <li>Authentication data</li>
          <li>Usage data and preferences</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Data Processing</h2>
        <p>Your data is processed in accordance with the Belgian Data Protection Act and the GDPR. We process your data to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide contact management services</li>
          <li>Send birthday notifications</li>
          <li>Improve our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
        <p>Under Belgian law and GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Contact</h2>
        <p>For privacy-related inquiries, contact our Data Protection Officer at:</p>
        <p>Email: dpo@contactmanager.com</p>
        <p>Address: [Your Belgian Address]</p>
      </section>
    </LegalLayout>
  );
}