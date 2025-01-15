import React from 'react';
import { LegalLayout } from '../components/layout/LegalLayout';

export function Terms() {
  return (
    <LegalLayout title="Terms and Conditions">
      <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p>By accessing our Contact Manager application, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with Belgian law. Any disputes shall be subject to the exclusive jurisdiction of the Belgian courts.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. User Obligations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Use the service in compliance with applicable laws</li>
          <li>Respect intellectual property rights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Service Modifications</h2>
        <p>We reserve the right to modify or discontinue the service at any time, with or without notice.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p>To the extent permitted by Belgian law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Contact Information</h2>
        <p>For legal inquiries:</p>
        <p>Email: legal@contactmanager.com</p>
        <p>Address: [Your Belgian Address]</p>
      </section>
    </LegalLayout>
  );
}