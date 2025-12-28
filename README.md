# NFTree - NFT Marketplace

A modern, responsive NFT marketplace landing page built with React, Node.js, and MongoDB. This project demonstrates pixel-perfect UI implementation, strong responsiveness across all devices, and clean full-stack architecture.

## 🎯 Project Overview

This is a UI Engineering assignment that showcases:
- **Pixel-perfect UI replication** from Figma design
- **Strong responsiveness** across Desktop, Tablet, and Mobile
- **Clean frontend architecture** with reusable components
- **Lightweight backend integration** with Express.js and MongoDB
- **Professional decision-making** in design system extension

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **CSS3** - Styling (no framework, pure CSS for maximum control)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (via Mongoose)
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
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
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nft-marketplace
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nft-marketplace
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`

**Backend:**
The backend runs directly with Node.js. For production, consider using PM2 or similar process managers.

## 📱 Responsive Strategy

### Breakpoints

The responsive design uses three main breakpoints:

1. **Desktop**: `> 968px` (default)
   - Full layout with side-by-side sections
   - Maximum content width of 1200px
   - Multi-column grids (3-4 columns)

2. **Tablet**: `768px - 968px`
   - Reduced column counts (2 columns for grids)
   - Adjusted spacing and font sizes
   - Maintained visual hierarchy

3. **Mobile**: `< 768px`
   - Single column layouts
   - Stacked sections
   - Optimized touch targets
   - Reduced font sizes (but maintained readability)
   - Hidden non-essential navigation items

### Key Responsive Decisions

1. **Typography Scaling**
   - Desktop: Large headings (3.5rem - 4rem)
   - Tablet: Medium headings (2rem - 2.5rem)
   - Mobile: Smaller but readable (1.75rem - 2rem)

2. **Grid Layouts**
   - Desktop: 3-4 column grids
   - Tablet: 2 column grids
   - Mobile: Single column (stacked)

3. **Spacing**
   - Desktop: Generous padding (2rem - 5rem)
   - Tablet: Moderate padding (1.5rem - 3rem)
   - Mobile: Compact padding (1rem - 2rem)

4. **Navigation**
   - Desktop: Full horizontal navigation
   - Mobile: Simplified navigation (hamburger menu ready)

5. **Images & Artwork**
   - Responsive aspect ratios maintained
   - Max-width constraints for mobile
   - Optimized for different screen sizes

6. **Forms**
   - Full-width inputs on mobile
   - Proper spacing for touch interaction
   - Accessible form labels

### Mobile-First Considerations

While the design was desktop-first (matching Figma), the implementation ensures:
- Touch-friendly button sizes (minimum 44x44px)
- Readable font sizes (minimum 16px for body text)
- Proper spacing between interactive elements
- No horizontal scrolling
- Optimized images and gradients

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#8B5CF6`
- **Primary Blue**: `#3B82F6`
- **Dark Background**: `#0A0A0A`
- **Dark Surface**: `#1A1A1A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A0A0A0`

### Typography
- **Headings**: Bold, large sizes (2rem - 4rem)
- **Body**: Regular weight, readable sizes (1rem - 1.25rem)
- **Font Stack**: System fonts for performance

### Components
- **Buttons**: Gradient backgrounds, rounded corners, hover effects
- **Cards**: Subtle backgrounds, borders, hover animations
- **Forms**: Dark inputs with purple accent borders
- **Navigation**: Fixed header with backdrop blur

## 📄 Pages

### 1. Landing Page (Home)
- Hero section with gradient background
- Featured NFT showcase
- Trending NFTs grid
- Popular Artists section
- Call-to-action banner

### 2. About Page
- Mission statement
- Statistics showcase
- Core values
- Consistent design system

### 3. Contact Page
- Contact information
- Contact form with backend integration
- Form validation and error handling
- Success/error messages

## 🔌 API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Submit contact form data
  - Body: `{ name, email, subject, message }`
  - Returns: Success message with contact ID

- **GET** `/api/contact`
  - Retrieve recent contact submissions (for admin/testing)
  - Returns: Array of contact entries

### Health Check
- **GET** `/api/health`
  - Server status check
  - Returns: `{ status: 'ok', message: 'Server is running' }`

## 🚢 Deployment

### Frontend (Vercel/Netlify)

1. **Vercel:**
   - Connect GitHub repository
   - Set build command: `cd frontend && npm install && npm run build`
   - Set output directory: `frontend/dist`
   - Add environment variables if needed

2. **Netlify:**
   - Connect GitHub repository
   - Set build command: `cd frontend && npm install && npm run build`
   - Set publish directory: `frontend/dist`

### Backend (Render/Railway)

1. **Render:**
   - Create new Web Service
   - Connect GitHub repository
   - Set root directory: `backend`
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables (PORT, MONGODB_URI)

2. **Railway:**
   - Connect GitHub repository
   - Set root directory: `backend`
   - Add environment variables
   - Deploy

### MongoDB

- Use **MongoDB Atlas** for cloud database
- Create a free cluster
- Get connection string
- Add to backend environment variables

## 📸 Screenshots

### Desktop View
- Full-width layout with all sections visible
- Multi-column grids
- Large typography and spacing

### Tablet View
- 2-column grids
- Adjusted spacing
- Maintained visual hierarchy

### Mobile View
- Single column layout
- Stacked sections
- Optimized for touch interaction

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Responsive design works on:
  - [ ] Desktop (1920px, 1440px, 1280px)
  - [ ] Tablet (768px, 1024px)
  - [ ] Mobile (375px, 414px, 320px)
- [ ] All links and buttons are functional
- [ ] Forms validate correctly
- [ ] Error handling works

## 🎯 Key Features

✅ Pixel-perfect UI matching Figma design
✅ Fully responsive (Desktop, Tablet, Mobile)
✅ Clean component architecture
✅ Reusable design system
✅ Backend API integration
✅ MongoDB database
✅ Form validation
✅ Error handling
✅ Professional code structure
✅ Comprehensive documentation

## 📝 Notes

- **No Mobile Design Provided**: Responsive breakpoints and mobile layouts were designed based on best practices and design system consistency.
- **Removed Elements**: Store, Games, and Connect Wallet sections were removed as per requirements.
- **Backend is Minimal**: Focused on essential functionality (contact form) without over-engineering.
- **No Authentication**: As per requirements, authentication was not implemented.

## 🤝 Contributing

This is an assignment project. For questions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is created for educational/assignment purposes.

---

**Built with ❤️ using React, Node.js, and MongoDB**

#   U I - E n g i n e e r i n g  
 