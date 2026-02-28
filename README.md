# Callout

One place to manage all your time off. Write once, sync everywhere.

[![MIT License](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

## The Problem

When taking time off, developers must manually update 5+ platforms:
- Slack status + out-of-office channel
- Google Calendar OOO event
- GitHub profile status
- Microsoft Teams presence
- Gmail vacation responder

This is tedious, easy to forget, and leads to miscommunication.

## The Solution

Callout is an open-source tool where you declare time off **once** and it automatically syncs across all connected platforms via hooks.

## Features

- **One-click time off** - Schedule vacation, sick days, or personal time
- **Multi-platform sync** - Slack, Google Calendar, GitHub, Teams, Gmail
- **Custom webhooks** - Connect any tool with webhook support
- **Self-hostable** - Run on your own infrastructure
- **Open source** - MIT licensed, no vendor lock-in

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL (Neon) |
| ORM | Drizzle ORM |
| Auth | Google OAuth (custom) |

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (we recommend [Neon](https://neon.tech))
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/whoisarjen/callout.git
cd callout

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Push database schema
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

Create a `.env` file with these variables:

```env
DATABASE_URL="postgresql://..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GOOGLE_REDIRECT_URI="http://localhost:3000/api/auth/google/callback"
```

See `.env.example` for the full list.

## Project Structure

```
callout/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── login/             # Login page
├── components/            # React components
│   ├── landing/          # Landing page sections
│   └── layout/           # Layout components
├── lib/                   # Shared utilities
│   ├── auth/             # Authentication
│   ├── db/               # Database schema & queries
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Made with love by [whoisarjen](https://github.com/whoisarjen)
