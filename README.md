## Dear Future Client Portal

Brand-aligned Next.js application with Supabase connectivity and Docker support for both local development and production deployments.

### Tech stack
- Next.js 16 (App Router, TypeScript, Tailwind v4)
- Supabase client SDK (`@supabase/supabase-js`)
- Docker (multi-stage production image + dev-compose setup)
- Vercel-ready configuration with `output: "standalone"`

---

### 1. Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

#### Environment variables
Duplicate `.env.example` to `.env.local` and populate with Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# optional: SUPABASE_SERVICE_ROLE_KEY=server-side only key (never expose to the browser)
```

> Use Supabase's project dashboard to generate keys. The anon key is safe for the browser; the service role key is only for secure server-side usage (add it to Vercel as an encrypted environment variable if required later).

---

### 2. Supabase integration checklist
- Create a new Supabase project → copy the URL and anon key into `.env.local`.
- (Optional) Initialize database tables via SQL scripts or Supabase Studio as your data model forms.
- For authenticated client spaces, consider adding [`@supabase/auth-helpers-nextjs`](https://supabase.com/docs/guides/auth/server-side/nextjs) in a follow-up iteration.
- When deploying, add the same environment variables to Vercel → Project Settings → Environment Variables.

---

### 3. Docker workflows

**Development (hot reload + mounted code)**

```bash
docker compose up --build
```

The compose file mounts the local filesystem and forwards env vars so you can keep using `.env.local`.

**Production build**

```bash
docker build -t dear-future-app:prod .
docker run -p 3000:3000 --env-file .env.local dear-future-app:prod
```

The production image ships the standalone Next.js build (`.next/standalone`) for minimal footprint.

---

### 4. GitHub + Vercel deployment
1. Initialize a GitHub repository (if not already) and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial Dear Future client portal scaffold"
   git branch -M main
   git remote add origin git@github.com:your-org/dear-future-app.git
   git push -u origin main
   ```
2. In Vercel, select **New Project** → import the GitHub repo.
3. Add the Supabase environment variables in Vercel’s project settings.
4. Deploy. Vercel will use the standalone output (matching the Docker production build). Subsequent pushes to `main` will trigger new deployments automatically.

---

### 5. Branding updates
- Primary colors and typography are defined in `src/app/globals.css`. Adjust hex values as the brand kit evolves.
- To swap in the licensed **PP Neue Corp** font, add the files to `public/fonts/` and replace the `Public_Sans` import in `src/app/layout.tsx` with a `next/font/local` configuration.
- Global layout and marketing sections live in `src/app/page.tsx`. Extend or break these into reusable components under `src/components/` as the app grows.

---

### 6. Useful scripts
- `npm run dev` – local development server
- `npm run build` – production build (used by Docker/Vercel)
- `npm run start` – serve built app
- `npm run lint` – run ESLint

---

### Next steps
- Define Supabase schema (e.g., `clients`, `projects`, `workshops`) and generate typed clients.
- Add authentication/authorization and protect client-specific routes.
- Integrate real Supabase data sources into dashboard sections.
