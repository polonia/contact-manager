import express from 'express';
import passport from 'passport';

const router = express.Router();

const CLIENT_URL = process.env.NODE_ENV === 'production'
  ? 'https://radiant-elf-cd347f.netlify.app'
  : 'http://localhost:5173';

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/contacts.readonly'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: `${CLIENT_URL}/login` }),
  (req, res) => res.redirect(`${CLIENT_URL}/dashboard`)
);

router.get('/linkedin',
  passport.authenticate('linkedin')
);

router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: `${CLIENT_URL}/login` }),
  (req, res) => res.redirect(`${CLIENT_URL}/dashboard`)
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

export const authRoutes = router;