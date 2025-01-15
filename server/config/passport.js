import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(dirname(__dirname), '.env') });

const CLIENT_URL = process.env.NODE_ENV === 'production'
  ? 'https://contact-manager-backend.onrender.com'
  : 'http://localhost:3000';

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Configure Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${CLIENT_URL}/auth/google/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    const user = {
      ...profile,
      accessToken,
      refreshToken
    };
    return done(null, user);
  }
));

// Configure LinkedIn Strategy
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: `${CLIENT_URL}/auth/linkedin/callback`,
    scope: ['r_emailaddress', 'r_liteprofile']
  },
  (accessToken, refreshToken, profile, done) => {
    const user = {
      ...profile,
      accessToken,
      refreshToken
    };
    return done(null, user);
  }
));

export default passport;