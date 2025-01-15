import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const formatContactList = (contacts) => {
  return contacts.map(contact => {
    const name = contact.names?.[0]?.displayName || 'Unknown';
    const birthday = contact.birthdays?.[0]?.date;
    const messaging = contact.messaging?.map(m => 
      `${m.number} (${[
        m.apps.whatsapp ? 'WhatsApp' : '',
        m.apps.signal ? 'Signal' : ''
      ].filter(Boolean).join(', ')})`
    ).join(', ');

    return `
      - ${name}
      ${birthday ? `  Birthday: ${new Date(birthday).toLocaleDateString()}` : ''}
      ${messaging ? `  Messaging: ${messaging}` : ''}
    `;
  }).join('\n');
};

router.post('/birthday-notification', async (req, res) => {
  const { contacts } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: req.user.emails[0].value,
      subject: 'Contacts with Birthdays This Week',
      text: `
Here are your contacts with birthdays this week:

${formatContactList(contacts)}

Best regards,
Contact Manager
      `
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export const emailRoutes = router;