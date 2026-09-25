# Karam Engineering Website

A complete Next.js App Router website prepared for Vercel.

## Edit the business information
Open `app/content.ts`. This file contains the company name, email, phone, location, services and portfolio categories.

## Replace the RK mark with the final logo
Put the logo file in `public/logo.png`, then replace the `<span className="mark">RK</span>` elements in `components/Header.tsx` and `app/page.tsx` with a Next.js `<Image>` component.

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Deploy with GitHub and Vercel
1. Create a private GitHub repository.
2. Upload every file in this folder to the repository root.
3. In Vercel, select Add New Project and import the repository.
4. Vercel detects Next.js automatically. Select Deploy.
5. In Project Settings > Domains, attach `karamengineering.com` and `www.karamengineering.com`.

## Contact form
The initial form opens the visitor's email application and does not store data. For server-side delivery, connect a transactional email service later and add a Route Handler.

## Engineering calculations
`components/Calculator.tsx` is a demonstration only. Put proprietary production calculations in server-only modules or Route Handlers, validate all inputs, authenticate protected tools, and have calculations independently verified before release.
