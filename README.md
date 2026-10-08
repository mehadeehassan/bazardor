# বাজার দর (BazarDor)

প্রয়োজনীয় পণ্যের আজকের দাম এক নজরে। চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার বাজারভিত্তিক দাম, সর্বনিম্ন-সর্বাধিক-গড় এবং আগের দিনের তুলনায় পরিবর্তন এক জায়গায় দেখা যায়।

## Technologies

- Next.js (App Router) and JavaScript
- Tailwind CSS 4 with daisyUI
- BetterAuth (email/password, Google, GitHub) with MongoDB
- react-hot-toast
- Hind Siliguri font (via Fontsource)

## Features

1. Home page with hero, top 6 price risers, top 6 fallers and the full product grid
2. Infinite scrolling price ticker and category navigation with an active state
3. Category pages with a sort control (default, low to high, high to low) and skeleton loading
4. Product details page (sign in required) with min / max / average price and a market-wise price table
5. Email/password, Google and GitHub authentication with toast messages
6. Profile page where the signed in user can update their name
7. Responsive on mobile, tablet and desktop, with a friendly 404 page

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

OAuth callback URLs: `<your-url>/api/auth/callback/google` and `<your-url>/api/auth/callback/github`.

## Deployment

Deploy on Vercel and add every variable from `.env.example` in the project settings. Set `BETTER_AUTH_URL` to the deployed URL.
