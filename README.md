# Contact Manager

A full-stack application that integrates with Google and LinkedIn APIs to manage and analyze your contacts.

## Features

- 🔐 OAuth2 authentication with Google and LinkedIn
- 📊 Contact analytics dashboard
- 🎂 Birthday tracking and filtering
- 📱 Responsive design
- ⚡ Real-time data fetching

## Tech Stack

### Frontend
- React + TypeScript
- React Query
- React Router
- Tailwind CSS
- Headless UI
- Lucide React icons

### Backend
- Express.js
- Passport.js
- Google People API
- LinkedIn API

## Project Structure

```
├── server/
│   ├── routes/
│   │   ├── auth.js        # Authentication routes
│   │   └── contacts.js    # Contact API routes
│   └── index.js          # Express server setup
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route components
│   ├── utils/           # Helper functions
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your API credentials:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   LINKEDIN_CLIENT_ID=your_linkedin_client_id
   LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
   SESSION_SECRET=your_session_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Configuration

### Google Setup
1. Go to Google Cloud Console
2. Create a new project
3. Enable People API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/auth/google/callback`

### LinkedIn Setup
1. Go to LinkedIn Developer Portal
2. Create a new app
3. Request API access
4. Add authorized redirect URI: `http://localhost:3000/auth/linkedin/callback`

## Available Deployment
1. Backend at https://contact-manager-rdj4.onrender.com
2. Frontend at https://radiant-elf-cd347f.netlify.app/

## Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the [MIT License](./LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)