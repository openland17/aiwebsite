# Deploy to GitHub and Vercel

Your project is committed locally. Follow these steps to push to GitHub and deploy on Vercel.

---

## 1. Push to GitHub

### Option A: Create repo on GitHub.com (recommended)

1. Go to **https://github.com/new**
2. Repository name: `aiwebsite` (or e.g. `zephyr-systems-website`)
3. Choose **Public**, leave "Add a README" **unchecked**
4. Click **Create repository**
5. Run these commands in your project folder (replace `YOUR_USERNAME` with your GitHub username):

```powershell
cd d:\Projects\aiwebsite
git remote add origin https://github.com/YOUR_USERNAME/aiwebsite.git
git branch -M main
git push -u origin main
```

If you use SSH:

```powershell
git remote add origin git@github.com:YOUR_USERNAME/aiwebsite.git
git branch -M main
git push -u origin main
```

### Option B: Install GitHub CLI and create from terminal

```powershell
winget install GitHub.cli
# Restart terminal, then:
cd d:\Projects\aiwebsite
gh auth login
gh repo create aiwebsite --public --source=. --remote=origin --push
```

---

## 2. Deploy to Vercel

### Option A: Deploy from GitHub (best for ongoing deploys)

1. Go to **https://vercel.com** and sign in (use GitHub if you can)
2. Click **Add New…** → **Project**
3. **Import** your `aiwebsite` (or repo name) from GitHub
4. Leave **Framework Preset: Next.js** and **Build Command: next build** as-is
5. Click **Deploy**
6. Every push to `main` will auto-deploy

### Option B: Deploy from your machine (one-off)

```powershell
cd d:\Projects\aiwebsite
npx vercel
```

Follow the prompts (login if needed, link to a Vercel project or create one).  
To deploy to production:

```powershell
npx vercel --prod
```

---

## 3. Optional: Custom domain

In the Vercel project: **Settings** → **Domains** → add `mjsmith.tech` (or your domain) and follow the DNS instructions.
