# Akshat Bhatnagar Portfolio

A Next.js App Router portfolio with a responsive 3D hero, interactive technology orbit, scroll-driven experience timeline, project showcases, and contact form.

## Stack

- Next.js App Router, React, and JavaScript
- Three.js, React Three Fiber, and Drei
- GSAP ScrollTrigger and Framer Motion
- Tailwind CSS v4 and Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
npm start
```

The hero and skills canvases load client-side and use reduced-motion preferences. Project demo and repository links are omitted until real URLs are available. The included resume download is a text document containing only the supplied profile details.

To enable contact-form mail drafts, set `NEXT_PUBLIC_CONTACT_EMAIL` to Akshat's real email address in a local `.env.local` file. Until configured, the form explains that delivery is unavailable and directs visitors to LinkedIn.
