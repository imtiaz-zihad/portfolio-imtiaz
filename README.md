# Imtiaz Hossen — Portfolio

Personal portfolio of **Imtiaz Hossen**, a Full Stack Developer and Software Engineering student at Daffodil International University, Dhaka, Bangladesh.

**Live:** [imtiaz.swe.bd](https://imtiaz.swe.bd)

## Sections

Hero, About (with experience and research), Skills, Competitive Programming, Featured Projects, Education and a Contact form.

## Featured projects

| Project | Stack | Links |
| --- | --- | --- |
| IdeaPilot AI | Next.js, TypeScript, Node.js, Express, MongoDB, Gemini | [Live](https://idea-pilot-one.vercel.app) · [Code](https://github.com/imtiaz-zihad/IdeaPilot) |
| HireZen | Next.js, TypeScript, Prisma, PostgreSQL, NextAuth, Gemini | [Live](https://www.hirezen.site) · [Code](https://github.com/imtiaz-zihad/HireZen) |
| Kickwear | Next.js, Node.js, Express, MongoDB, Cloudinary | [Live](https://kickwear.shop) |
| SkillSwap | Next.js, TypeScript, Node.js, Express, PostgreSQL | [Live](https://skill-swap-ten-pearl.vercel.app) |
| CareSync | React, Firebase, Tailwind | [Live](https://medical-manager-8561e.web.app) · [Code](https://github.com/imtiaz-zihad/CareSync-Client) |

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Resend (contact form).

## Getting started

```bash
git clone https://github.com/imtiaz-zihad/portfolio-imtiaz.git
cd portfolio-imtiaz
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_MAILER_KEY` | Yes | Resend API key used by `/api/contact` |
| `CONTACT_TO_EMAIL` | No | Inbox that receives messages |
| `CONTACT_FROM_EMAIL` | No | Verified sender, e.g. `Portfolio <contact@imtiaz.swe.bd>` |

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Deployment

Deployed on Vercel. Add the environment variables above in the Vercel project settings.

## Contact

[LinkedIn](https://www.linkedin.com/in/imtiaz-hossen) · [GitHub](https://github.com/imtiaz-zihad) · mdimtiazzihad@gmail.com