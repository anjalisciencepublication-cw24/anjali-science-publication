# GitHub Setup Instructions

## Initial Repository Setup

### 1. Create a new GitHub repository
- Go to https://github.com/new
- Repository name: `anjali-science-publication`
- Add description: "Premium educational science books ecommerce platform"
- Choose: Public (for easier Netlify/Render integration)
- Do NOT initialize with README (we already have one)
- Click "Create repository"

### 2. Initialize and push your local repository

```bash
# Navigate to project root
cd "d:\Desktop\asp"

# Initialize git
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Anjali Science Publication

- Premium editorial design system
- React + TypeScript frontend with Vite
- Express backend with MongoDB
- Responsive UI for mobile testing
- Production-ready for Netlify and Render deployment"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/anjali-science-publication.git

# Push to GitHub
git push -u origin main
```

### 3. Verify on GitHub
- Visit: https://github.com/YOUR_USERNAME/anjali-science-publication
- Confirm all files are there
- Check that `.env` files are in `.gitignore` (they should be)

---

## .gitignore Verification

The project includes `.gitignore` with:
- ✓ `node_modules/`
- ✓ `.env` files (secrets are safe)
- ✓ Build outputs
- ✓ IDE configs
- ✓ OS files

Your sensitive data is protected!

---

## Deploying to Netlify (Frontend)

### Step 1: Connect Netlify
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Choose GitHub as your git provider
4. Authorize Netlify to access GitHub
5. Select `anjali-science-publication` repository
6. Confirm your account

### Step 2: Configure Build Settings
When Netlify shows build settings:
- **Base directory:** `client`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Click "Deploy site"

### Step 3: Add Environment Variables
After site is created:
1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add new variable:
   - Key: `VITE_API_URL`
   - Value: `https://anjali-science-api.onrender.com/api/v1`
4. Save and redeploy

Your frontend will be live at: **https://your-site-name.netlify.app**

---

## Deploying to Render (Backend)

### Step 1: Connect Render
1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Click "Connect Repository"
4. Authorize Render to access GitHub
5. Select `anjali-science-publication` repository

### Step 2: Configure Web Service
- **Name:** `anjali-science-api`
- **Runtime:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Instance Type:** Free (or upgrade as needed)
- Click "Create Web Service"

### Step 3: Add Environment Variables
In the Render dashboard for your service:

```
PORT = 5000
NODE_ENV = production
MONGODB_URI = [your MongoDB Atlas connection string]
JWT_SECRET = [generate a strong random string]
JWT_EXPIRE = 7d
CORS_ORIGIN = https://your-site-name.netlify.app
CLOUDINARY_NAME = [optional - for image uploads]
CLOUDINARY_API_KEY = [optional]
CLOUDINARY_API_SECRET = [optional]
```

Your backend will be live at: **https://anjali-science-api.onrender.com**

---

## Getting Required Credentials

### MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a cluster (free tier available)
4. Click "Connect"
5. Choose "Drivers" option
6. Copy connection string
7. Replace `<password>` with your DB password
8. Use full connection string as `MONGODB_URI`

### Cloudinary (Optional - for image uploads)
1. Go to https://cloudinary.com
2. Sign up for free account
3. Go to Dashboard
4. Find your credentials (Cloud Name, API Key, API Secret)
5. Use these for the environment variables

---

## Testing Mobile Access

### After Deployment is Live

1. **On Mobile Device:**
   - Open browser
   - Visit: `https://your-site-name.netlify.app`
   - Test all features:
     - Browse books
     - Search functionality
     - Add to cart
     - Login/Register
     - Contact form
     - Mobile responsiveness

2. **Check Console for Errors:**
   - Right-click → Inspect → Console tab
   - Should be no red errors
   - CORS errors indicate backend URL issue

3. **Test Backend Connectivity:**
   - Open DevTools Network tab
   - Perform action (e.g., login)
   - Check requests to backend API
   - Should show successful requests to `https://anjali-science-api.onrender.com/api/v1/...`

---

## Automatic Deployments

After initial setup, deployments are automatic!

- **Frontend (Netlify):** Auto-deploys when you push to `main` branch
- **Backend (Render):** Auto-deploys when you push to `main` branch

### To update production:
```bash
# Make changes locally
# Test with: npm run dev

# Commit changes
git add .
git commit -m "Update: [description of changes]"
git push origin main

# Wait 1-2 minutes for auto-deployment
# Check Netlify & Render dashboards for deployment status
```

---

## Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Render Docs:** https://render.com/docs
- **GitHub Help:** https://docs.github.com
- **React Docs:** https://react.dev
- **Express Docs:** https://expressjs.com
- **MongoDB Docs:** https://docs.mongodb.com

---

## Troubleshooting Common Issues

### Frontend not loading
- Check Netlify deployment logs
- Verify `VITE_API_URL` environment variable is set
- Clear browser cache

### Backend not responding
- Check Render deployment logs
- Verify MongoDB connection string is correct
- Ensure CORS_ORIGIN matches frontend URL
- Check environment variables in Render dashboard

### Mobile not connecting
- Use full HTTPS URLs (not HTTP)
- Check network tab in DevTools
- Verify backend is deployed and running

---

## Summary

✅ All code is ready for GitHub  
✅ Frontend configured for Netlify  
✅ Backend configured for Render  
✅ Environment variables documented  
✅ Mobile testing ready  

**Next step:** Push to GitHub and deploy! 🚀
