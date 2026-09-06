# Sarah Ahmed — Math Courses Landing Page

A bilingual (Arabic/English) course landing page built with Next.js. Public
facing, no login, no database — students/parents browse courses and reach out
directly on WhatsApp.

## What's inside

- **Next.js 14 (App Router)** + TypeScript, plain CSS (no UI framework).
- **Pages**
  - `/` — nav, hero, instructor section, course cards.
  - `/courses/[id]` — full details for one course, with a back link to `/`.
- **Bilingual toggle** (Arabic ⇄ English) in the nav. Flips the whole page's
  text direction (RTL/LTR) and language. Arabic is the default.
- **Fonts**: IBM Plex Sans Arabic (Arabic) and Inter (English), loaded via
  `next/font/google`.
- **Course data**: `data/courses.ts` — a typed, structured list. Add or edit a
  course there and the cards + details page update automatically; nothing is
  hardcoded into the components.
- **Instructor info**: `data/instructor.ts`.
- **UI text (buttons, labels)**: `data/translations.ts`.
- **WhatsApp**: `lib/whatsapp.ts` builds a `wa.me` link with a pre-filled
  message. The number is set once in that file.

## Running it locally

You need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

Other useful commands:

```bash
npm run build   # production build (also good for catching type errors)
npm run start   # run the production build locally
```

## Editing content

- **Add/edit a course** → open `data/courses.ts` and add an object to the
  `courses` array. Every field (objectives, curriculum, schedule, etc.) has
  both an `ar` and `en` version. The `id` becomes the URL: a course with
  `id: 'grade-12-math'` will live at `/courses/grade-12-math`.
- **Edit the instructor's name/bio** → `data/instructor.ts`.
- **Add a real instructor photo** → replace the placeholder `<div>` in
  `components/InstructorSection.tsx` with a `next/image` `<Image>` pointing at
  a photo placed in `/public`.
- **Change the WhatsApp number** → `lib/whatsapp.ts`.
- **Edit button/label text** (e.g. "Apply Now", "Back to Courses") →
  `data/translations.ts`.

## Deploying to Vercel (free)

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is
   easiest).
3. Click **"Add New" → "Project"**, then select the repository.
4. Vercel auto-detects Next.js — leave the default settings and click
   **Deploy**.
5. After a minute you'll get a live URL like
   `https://your-project-name.vercel.app`.

No environment variables or backend setup are needed — this project has no
database, auth, or API routes.

### Alternative: deploy without GitHub

```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

## Notes

- All course content currently in `data/courses.ts` is **mock/placeholder
  data** — swap in the real course details whenever the instructor provides
  them.
- No fake statistics, testimonials, or reviews are included anywhere, per the
  project requirements.
