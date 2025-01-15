import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const CLIENT_URL = process.env.NODE_ENV === 'production' 
  ? 'https://radiant-elf-cd347f.netlify.app'
  : 'http://localhost:3000';

export const googleStrategy = new GoogleStrategy({
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
);