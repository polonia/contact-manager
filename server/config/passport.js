import passport from 'passport';
import { googleStrategy } from './strategies/google.strategy.js';
import { linkedinStrategy } from './strategies/linkedin.strategy.js';

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Register strategies
passport.use(googleStrategy);
passport.use(linkedinStrategy);

export default passport;