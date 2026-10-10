# Automation Platform Starter

A simple starter app for an automation platform featuring:
- Next.js frontend
- Framer Motion animations
- Chatwoot widget support
- WhatsApp and automation workflow UI
- Ready for extension into a SaaS dashboard

## Features
- Modern landing page and dashboard shell
- Smooth motion effects using Framer Motion
- Chatwoot widget integration via environment variable
- Responsive layout for desktop and mobile
- Easy to extend with real APIs and business flows

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your local environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Add your Chatwoot website token in `.env.local` if you want the widget enabled.

4. Run the app:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Environment variables

```bash
NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your_chatwoot_website_token
NEXT_PUBLIC_APP_NAME=Automation Platform
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Notes

This starter is intentionally simple and can be expanded into:
- WhatsApp automation flows
- form-based lead collection
- CRM and workflow integrations
- AI-powered response routing
- SaaS analytics dashboard

## Deployment

This is ready to be deployed to Vercel.
