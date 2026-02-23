# Deploy to Vercel

## Prerequisites
- Node.js 18+
- Git repo (optional; Vercel CLI can deploy without it)

## Commands to deploy from terminal

### Option A: Deploy with Vercel CLI (recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **From the project root** (`d:\Projects\aiwebsite`):
   ```bash
   cd d:\Projects\aiwebsite
   npm run build
   vercel
   ```
   - First run: log in and link the project when prompted.
   - Use `vercel --prod` to deploy to production.

### Option B: Deploy via Git (GitHub/GitLab/Bitbucket)

1. Push the project to a Git remote.
2. Go to [vercel.com](https://vercel.com) → Add New Project → Import the repo.
3. Vercel will detect Next.js; keep default build command `next build` and output.
4. Deploy. Future pushes to the main branch will trigger production deploys.

### Build verification (run before deploying)
```bash
npm run build
```
Expect: **zero errors**. Output should show "Compiled successfully" and static routes for `/` and `/_not-found`.
