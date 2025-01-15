import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

export const linkedinStrategy = new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
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
);