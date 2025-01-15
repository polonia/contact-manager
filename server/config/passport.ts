import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import dotenv from 'dotenv';

dotenv.config();

const CLIENT_URL = process.env.NODE_ENV === 'production' 
  ? 'https://radiant-elf-cd347f.netlify.app'
  : 'http://localhost:5173';

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
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: `${CLIENT_URL}/auth/google/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    // Pass the tokens along with the profile
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
    clientID: process.env.LINKEDIN_CLIENT_ID!,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
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