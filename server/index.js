import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import passport from './config/passport.js';
import { authRoutes } from './routes/auth.js';
import { contactRoutes } from './routes/contacts.js';
import { emailRoutes } from './routes/email.js';

// Load environment variables before any other code
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const app = express();

const CLIENT_URL = process.env.NODE_ENV === 'production'
  ? 'https://radiant-elf-cd347f.netlify.app'
  : 'http://localhost:5173';

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Client URL:', CLIENT_URL);
});