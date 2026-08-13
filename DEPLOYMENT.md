# Deployment Guide - Anjali Science Publication

## Frontend Deployment (Netlify)

### Prerequisites
- GitHub account
- Netlify account
- Frontend repository pushed to GitHub

### Steps to Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production ready build"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Set build settings:
     - Base directory: `client`
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Configure Environment Variables**
   - In Netlify Site Settings → Build & Deploy → Environment
   - Add `VITE_API_URL` pointing to your Render backend URL
   - Example: `https://anjali-science-api.onrender.com/api/v1`

4. **Deploy**
   - Netlify will automatically deploy on push to main branch

### Access Frontend
- Your site will be available at: `https://your-site.netlify.app`

---

## Backend Deployment (Render)

### Prerequisites
- Render account
- GitHub repository pushed
- MongoDB Atlas cluster (or MongoDB connection string)
- Environment variables ready

### Steps to Deploy

1. **Connect Repository to Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect GitHub account
   - Select repository

2. **Configure Web Service**
   - Name: `anjali-science-api`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Instance Type: Free tier (or paid for production)

3. **Add Environment Variables**
   In Render dashboard, add these environment variables:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `JWT_EXPIRE`: `7d`
   - `CORS_ORIGIN`: Your Netlify frontend URL (e.g., `https://your-site.netlify.app`)
   - `CLOUDINARY_NAME`: Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret

4. **Deploy**
   - Render will automatically deploy on push to main branch
   - Monitor deployment in the Render dashboard

### Access Backend
- Your API will be available at: `https://anjali-science-api.onrender.com/api/v1`

---

## Mobile Testing

### Local Testing
1. **Find your local IP address:**
   ```bash
   ipconfig getifaddr en0  # macOS
   ipconfig               # Windows
   ```

2. **Update frontend API URL:**
   - Edit `client/src/main.tsx` or create `.env.local` in client:
   ```
   VITE_API_URL=http://YOUR_LOCAL_IP:5000/api/v1
   ```

3. **Run both servers:**
   ```bash
   npm run dev  # Runs both client and server concurrently
   ```

4. **Access on mobile:**
   - Open browser on your mobile device
   - Navigate to: `http://YOUR_LOCAL_IP:5173`

### Cloud Testing (Recommended)
- Once deployed to Netlify and Render, access directly from mobile:
  - Frontend: `https://your-site.netlify.app`
  - Ensure backend is configured with correct CORS_ORIGIN

---

## Important Checklist

- [ ] GitHub repository created and pushed
- [ ] `.env.example` files committed (but not `.env`)
- [ ] `.gitignore` configured properly
- [ ] `netlify.toml` in client directory
- [ ] `render.yaml` in server directory
- [ ] All environment variables documented
- [ ] MongoDB Atlas cluster created
- [ ] Cloudinary account configured (optional, for image uploads)
- [ ] JWT secret generated and secured
- [ ] CORS settings configured for both frontend and backend
- [ ] Frontend build completes without errors: `npm run build --prefix client`
- [ ] Backend build completes without errors: `npm run build --prefix server`

---

## Troubleshooting

### Frontend Issues
- **Build fails**: Check `npm run build --prefix client` locally
- **CORS errors**: Verify `VITE_API_URL` matches Render backend URL
- **Netlify redirects**: `netlify.toml` should handle SPA routing

### Backend Issues
- **Port issues**: Ensure Render uses `PORT` from environment
- **Database connection**: Verify `MONGODB_URI` is correct
- **CORS errors**: Check `CORS_ORIGIN` environment variable

---

## Next Steps

1. Push code to GitHub
2. Connect Netlify to GitHub for frontend
3. Connect Render to GitHub for backend
4. Test on mobile device
5. Monitor performance and logs on both platforms
