# Quick Deployment Setup

## ✅ Frontend Ready for Netlify

**Status:** ✓ Production build successful (2.99s)
- Build output: `client/dist/`
- Configuration: `client/netlify.toml` created
- Environment template: `client/.env.example`

**Frontend Deployment Checklist:**
1. Push to GitHub
2. Connect Netlify → authorize GitHub → select repo
3. Set build settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variable:
   - `VITE_API_URL` = `https://anjali-science-api.onrender.com/api/v1`
5. Deploy!

**Netlify Deployment Link:**
```
https://app.netlify.com/sites/new
```

---

## ✅ Backend Ready for Render

**Status:** ✓ Production build successful
- Build output: `server/dist/`
- Configuration: `server/render.yaml` created
- Environment template: `server/.env.example`

**Backend Deployment Checklist:**
1. Push to GitHub
2. Connect Render → authorize GitHub → select repo
3. Create Web Service with settings:
   - Name: `anjali-science-api`
   - Environment: Node
   - Build: `npm install && npm run build`
   - Start: `npm start`
4. Add environment variables (from `.env.example`)
5. Deploy!

**Render Deployment Link:**
```
https://dashboard.render.com/select-repo
```

---

## 📱 Mobile Testing

### Option 1: Test Locally (Fastest)
```bash
# Get your local IP
ipconfig   # Windows
ipconfig getifaddr en0  # macOS

# Create client/.env.local
VITE_API_URL=http://YOUR_LOCAL_IP:5000/api/v1

# Run dev server
npm run dev

# On mobile browser
http://YOUR_LOCAL_IP:5173
```

### Option 2: Test Cloud Deployment (Best)
- Once deployed:
  - Frontend: `https://your-site.netlify.app`
  - Backend: `https://anjali-science-api.onrender.com`
- Open frontend URL on mobile browser
- Everything should work!

---

## 📋 Environment Variables Needed

### Frontend (.env or .env.local in client/)
```
VITE_API_URL=https://anjali-science-api.onrender.com/api/v1
```

### Backend (.env in server/)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=https://your-site.netlify.app
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 🚀 One-Time Setup

1. **Create GitHub repo** (if not done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - production ready"
   git branch -M main
   git remote add origin https://github.com/yourusername/anjali-science.git
   git push -u origin main
   ```

2. **Create MongoDB Atlas account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Add to Render environment variables

3. **Create Render account & connect**
   - Go to https://render.com
   - Connect GitHub
   - Deploy backend
   - Copy backend URL for frontend

4. **Create Netlify account & connect**
   - Go to https://netlify.com
   - Connect GitHub
   - Deploy frontend
   - Add backend URL as environment variable

---

## ✨ Your Production URLs (After Deployment)

- **Frontend:** `https://your-site.netlify.app`
- **Backend API:** `https://anjali-science-api.onrender.com/api/v1`
- **Mobile access:** Use frontend URL on any device with browser

---

## 📞 Support & Docs

- Netlify Docs: https://docs.netlify.com
- Render Docs: https://render.com/docs
- Deployment Guide: See `DEPLOYMENT.md` for detailed steps

**All configuration files are ready. Push to GitHub and deploy! 🚀**
