NFT Marketplace

A modern, responsive NFT Marketplace Landing Page built with React, Node.js, and MongoDB.
This project demonstrates pixel-perfect UI implementation, strong responsiveness, and a clean full-stack architecture.

🎯 Project Overview

This UI Engineering assignment showcases:

🎨 Pixel-perfect UI replication from Figma

📱 Fully responsive design (Desktop, Tablet, Mobile)

🧩 Clean frontend architecture with reusable components

🔌 Lightweight backend integration using Express & MongoDB

🧠 Professional design system and layout decisions

🛠️ Tech Stack
Frontend

React 18

Vite

React Router

CSS3 (Pure CSS – no framework)

Backend

Node.js

Express.js

MongoDB (Mongoose)

CORS

📁 Project Structure
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── sections/
│   │   │       ├── Hero.jsx
│   │   │       ├── FeaturedNFT.jsx
│   │   │       ├── TrendingSection.jsx
│   │   │       ├── PopularArtists.jsx
│   │   │       └── CTABanner.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── layouts/
│   │   │   └── Layout.jsx
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── components/
│   │   │   └── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   └── package.json
└── README.md

🚀 Setup Instructions
Prerequisites

Node.js v18+

MongoDB (Local or Atlas)

npm / yarn

Frontend Setup
cd frontend
npm install
npm run dev


📍 Frontend runs at:
http://localhost:3000

Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/nft-marketplace


For MongoDB Atlas:

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nft-marketplace


Start backend:

npm start


or (dev mode)

npm run dev


📍 Backend runs at:
http://localhost:5000

🏗️ Build for Production
Frontend
cd frontend
npm run build


Build output:
frontend/dist/

Backend

Run directly with Node.js or use PM2 for production.

📱 Responsive Design Strategy
Breakpoints

Desktop: > 968px

Tablet: 768px – 968px

Mobile: < 768px

Key Decisions

Responsive grids (4 → 2 → 1 columns)

Touch-friendly buttons (44px minimum)

No horizontal scrolling

Scalable typography

Mobile-optimized navigation

🎨 Design System
Colors

Primary Purple: #8B5CF6

Primary Blue: #3B82F6

Dark Background: #0A0A0A

Surface: #1A1A1A

Text Primary: #FFFFFF

Text Secondary: #A0A0A0

Typography

Headings: 2rem – 4rem

Body: 1rem – 1.25rem

System font stack for performance

📄 Pages
Home

Hero Section

Featured NFTs

Trending NFTs

Popular Artists

CTA Banner

About

Mission

Statistics

Core values

Contact

Contact details

Backend-connected form

Validation & error handling

🔌 API Endpoints
Contact

POST /api/contact

{
  "name": "John",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Test message"
}


GET /api/contact
Returns all submissions (testing/admin)

Health Check

GET /api/health

{
  "status": "ok",
  "message": "Server is running"
}

🧪 Testing Checklist

✅ Navigation works

✅ Contact form submits

✅ Responsive on all devices

✅ No UI overflow

✅ Error handling works

📝 Notes

Mobile layout designed using best practices

Wallet/Auth features intentionally excluded

Backend kept minimal as per requirements

No authentication implemented

📄 License

This project is created for educational / assignment purposes only.

❤️ Built with React, Node.js & MongoDB
✅ Ab kya karna hai?

Is poore content ko copy karo

README.md me paste karo

GitHub pe push karo

Agar chaho to main:

🔥 GitHub profile-ready README

💼 Resume-friendly project description

🌐 Live demo section
