# Quick Setup Guide

## Prerequisites
- Node.js v18+ installed
- MongoDB installed locally OR MongoDB Atlas account

## Step-by-Step Setup

### 1. Clone/Download the Project
```bash
# If using git
git clone <repository-url>
cd "Task 2"
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the content below into a new file named .env
```

**Create `backend/.env` file:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nft-marketplace
```

**For MongoDB Atlas (cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nft-marketplace
```

**Start backend:**
```bash
npm start
# or for development with auto-reload
npm run dev
```

Backend should be running on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend should be running on `http://localhost:3000`

### 4. Verify Setup

1. Open browser to `http://localhost:3000`
2. You should see the NFT marketplace landing page
3. Navigate to Contact page
4. Fill out the contact form and submit
5. Check backend console for successful submission

## Troubleshooting

### MongoDB Connection Issues

**Local MongoDB:**
- Ensure MongoDB service is running
- Check if MongoDB is on default port 27017
- Try: `mongod` in terminal to start MongoDB

**MongoDB Atlas:**
- Ensure your IP is whitelisted in Atlas
- Check connection string is correct
- Verify username/password are correct

### Port Already in Use

**Backend (5000):**
```bash
# Change PORT in backend/.env
PORT=5001
```

**Frontend (3000):**
```bash
# Edit frontend/vite.config.js
server: {
  port: 3001,
  ...
}
```

### CORS Issues

If you see CORS errors, ensure:
- Backend is running
- Frontend proxy is configured (already done in vite.config.js)
- Backend CORS middleware is enabled (already done)

## Production Build

### Frontend
```bash
cd frontend
npm run build
```
Output: `frontend/dist/`

### Backend
```bash
cd backend
npm start
```
Or use PM2:
```bash
npm install -g pm2
pm2 start server.js
```

## Next Steps

1. Review the README.md for detailed documentation
2. Test all pages and responsive breakpoints
3. Deploy to Vercel/Netlify (frontend) and Render/Railway (backend)
4. Update MongoDB URI for production

