# Deployment Guide

This guide covers deploying the NFT Marketplace to production.

## Frontend Deployment (Vercel)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? nft-marketplace-frontend
# - Directory? ./
# - Override settings? No
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables (if needed)
6. Click "Deploy"

### Vercel Configuration

Create `vercel.json` in project root (optional):

```json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/dist",
  "devCommand": "cd frontend && npm run dev",
  "installCommand": "cd frontend && npm install"
}
```

## Frontend Deployment (Netlify)

### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Navigate to frontend
cd frontend

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `frontend/dist`
5. Click "Deploy site"

### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  base = "frontend"
  command = "npm install && npm run build"
  publish = "frontend/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Backend Deployment (Render)

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Name**: nft-marketplace-backend
   - **Environment**: Node
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `PORT`: 5000 (or leave default)
   - `MONGODB_URI`: Your MongoDB connection string
6. Click "Create Web Service"

## Backend Deployment (Railway)

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add Service:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `PORT`: 5000
   - `MONGODB_URI`: Your MongoDB connection string
6. Deploy

## MongoDB Setup (Atlas)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for all IPs, or specific IPs)
5. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Replace `<dbname>` with `nft-marketplace`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/nft-marketplace?retryWrites=true&w=majority
```

## Environment Variables

### Frontend (if needed)
- `VITE_API_URL`: Backend API URL (e.g., `https://your-backend.onrender.com`)

### Backend
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: `production` (optional)

## Update Frontend API URL

After deploying backend, update frontend to use production API:

**Option 1: Environment Variable**

Create `frontend/.env.production`:
```env
VITE_API_URL=https://your-backend.onrender.com
```

Update `frontend/vite.config.js`:
```js
server: {
  proxy: {
    '/api': {
      target: import.meta.env.VITE_API_URL || 'http://localhost:5000',
      changeOrigin: true
    }
  }
}
```

**Option 2: Direct API Calls**

Update `frontend/src/pages/Contact.jsx`:
```js
const response = await fetch('https://your-backend.onrender.com/api/contact', {
  // ...
})
```

## Post-Deployment Checklist

- [ ] Frontend is accessible
- [ ] Backend API is responding (`/api/health`)
- [ ] Contact form submits successfully
- [ ] MongoDB connection is working
- [ ] All pages load correctly
- [ ] Responsive design works on mobile
- [ ] CORS is configured correctly
- [ ] Environment variables are set

## Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Monitoring

### Backend Health Check
```bash
curl https://your-backend.onrender.com/api/health
```

### Frontend
- Check browser console for errors
- Test all functionality
- Verify responsive design

## Troubleshooting

### CORS Errors
- Ensure backend CORS middleware allows frontend domain
- Check `Access-Control-Allow-Origin` headers

### MongoDB Connection
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check build logs for specific errors

## Cost Estimates

### Free Tier Limits
- **Vercel**: 100GB bandwidth/month
- **Netlify**: 100GB bandwidth/month
- **Render**: 750 hours/month (free tier)
- **Railway**: $5 credit/month (free tier)
- **MongoDB Atlas**: 512MB storage (free tier)

All services offer free tiers suitable for this project.

