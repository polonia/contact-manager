import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Not authenticated' });
};

router.get('/google', isAuthenticated, async (req, res) => {
  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: req.user.accessToken
    });

    const people = google.people({ version: 'v1', auth: oauth2Client });
    const response = await people.people.connections.list({
      resourceName: 'people/me',
      pageSize: 1000,
      personFields: 'names,birthdays,emailAddresses'
    });

    const contacts = response.data.connections || [];
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching Google contacts:', error);
    res.status(500).json({ error: 'Failed to fetch Google contacts' });
  }
});

router.get('/linkedin', isAuthenticated, async (req, res) => {
  // LinkedIn API implementation would go here
  // Currently returning mock data as LinkedIn's API has limited access
  res.json([]);
});

export const contactRoutes = router;