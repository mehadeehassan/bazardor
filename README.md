<div align="center">

# 🛒 বাজার দর · BazarDor

**প্রয়োজনীয় পণ্যের আজকের দাম এক নজরে।**

</div>

## About

BazarDor is a grocery price tracker for Bangladesh. It shows today's price of everyday items such as rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices, how each price changed since yesterday, and the lowest, highest and average price across different markets.

## Technologies

| Purpose | Tool |
| --- | --- |
| Framework | Next.js 16 (App Router), JavaScript / JSX |
| Styling | Tailwind CSS 4, daisyUI |
| Authentication | BetterAuth (email and password, Google, GitHub) |
| Database | MongoDB (used by BetterAuth for users and sessions) |
| Notifications | react-hot-toast |
| Font | Hind Siliguri (Fontsource) |

## Features

1. **Live price ticker**: an endless scrolling strip with every product, its price and daily change.
2. **Home page**: hero section, top 6 price risers, top 6 fallers and the full product grid.
3. **Category pages**: sort by default, price low to high or high to low (sorted by number, not text), with skeleton loading and an empty state.
4. **Product details**: minimum, maximum and average price plus a market-wise price table. Available after sign in only.
5. **Authentication**: email/password, Google and GitHub sign in, with toast messages for success, errors and protected-route redirects.
6. **Profile**: view account information, update your name and sign out.
7. **Responsive design**: works on mobile, tablet and desktop, with a friendly 404 page for unknown routes.

## Project structure

```
src/
├── app/            Pages and routes (home, category, product, signin, signup, profile, api/auth)
├── components/     UI split by area: layout, home, products, product-details, auth, ui
├── lib/            API client, auth setup, formatting and product helpers, validation
└── proxy.js        Redirects signed-out visitors away from protected pages
public/             Hero image
```

## Run locally

```bash
npm install
cp .env.example .env.local
# fill in the values in .env.local (see below)
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Name | What it is |
| --- | --- |
| `BETTER_AUTH_URL` | Public URL of the app (`http://localhost:3000` locally) |
| `BETTER_AUTH_SECRET` | Random string, at least 32 characters |
| `MONGODB_URI` | MongoDB connection string |
| `MONGODB_DB_NAME` | Database name, `bazardor` |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Google OAuth credentials |
| `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | GitHub OAuth credentials |
| `NEXT_PUBLIC_API_BASE_URL` | Product data API |

## License

Made for a learning assignment.
