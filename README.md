# Husain Baghwala — Portfolio

Personal portfolio site: dark lime theme, terminal-style hero, live project previews, and verifiable AI certifications.

**Live:** https://husain-bw.vercel.app

Built with Vite + React + TypeScript and Tailwind. All content is data-driven — the sections render from a single JSON document, so copy changes don't touch component code.

## Stack

| | |
| --- | --- |
| Build | Vite 5, `@vitejs/plugin-react-swc` |
| UI | React 18, TypeScript |
| Styling | Tailwind CSS + design tokens in [src/index.css](src/index.css); components are hand-rolled with inline styles, no component library |
| Routing | react-router-dom (`/` and a catch-all 404) |
| Head tags | react-helmet-async, driven by `meta` in the portfolio JSON |
| Fonts | Space Grotesk (display), JetBrains Mono (mono) |

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build with development mode settings |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | ESLint over the repo |

## Where the content lives

Content comes from **two sources that get merged**, in [src/context/PortfolioContext.tsx](src/context/PortfolioContext.tsx):

1. **[src/data/portfolio.json](src/data/portfolio.json)** — bundled with the build, renders instantly on first paint.
2. **`https://flow.sokt.io/func/scrifmnYUDgV`** — fetched on mount, so content can be edited without a redeploy.

The merge is **shallow, per top-level key**: `{ ...bundledJSON, ...remoteResponse }`. Two consequences worth remembering:

- If the endpoint returns a key, **the endpoint wins for that whole key** — editing e.g. `meta` in the bundled file has no effect on the live page.
- If the endpoint *omits* a key, the bundled file supplies it. This is how `certifications` currently reaches the page.

So: to change content that the endpoint already serves, edit the endpoint. Keep the bundled file in sync anyway — it's the first paint and the fallback when the fetch fails.

Shapes for both live in [src/types.ts](src/types.ts).

## Sections

Each component reads one key from the JSON:

| Component | JSON key |
| --- | --- |
| [Hero](src/components/Hero.tsx), [Marquee](src/components/Marquee.tsx) | `personal`, `stats` |
| [Skills](src/components/Skills.tsx) — `// 01` | `about.skills` |
| [Projects](src/components/Projects.tsx) — `// 02` | `projects` |
| [Experience](src/components/Experience.tsx) — `// 03` | `experience`, `achievements` |
| [Certifications](src/components/Certifications.tsx) — `// 04` | `certifications` |
| [CodingProfiles](src/components/CodingProfiles.tsx) — `// 05` | `coding_profiles` |
| [Contact](src/components/Contact.tsx) | `contact`, `personal.socials` |

## Adding a certification

Append to `certifications`:

```json
{
  "title": "Building with the Claude API",
  "issuer": "Anthropic",
  "issued": "Jul 2026",
  "expires": "Does not expire",
  "url": "https://verify.skilljar.com/c/tx86zsmur7we",
  "image": "/certificates/claude-api.jpg",
  "topics": ["Claude API", "Tool Use", "Prompt Engineering"]
}
```

`image` is optional — without it the card falls back to a panel with the issuer's logo and wordmark, using the `ISSUERS` map in [Certifications.tsx](src/components/Certifications.tsx). Add an entry there for a new issuer.

**Getting the certificate scan.** Both issuers expose it publicly on the verify page, but the URLs are signed and expire, so the image has to be downloaded and committed to `public/certificates/`:

```bash
curl -sL "https://verify.skilljar.com/c/<CERT_ID>" | grep -o 'https://cc\.sj-cdn\.net/certificate/[^"]*\.jpg[^"]*' | head -1 | sed 's/&amp;/\&/g'
```

OpenAI Academy exposes it the same way, via `og:image` on `https://academy.openai.com/home/certificate/<CERT_ID>`. Download the result and resize before committing — the originals are 3300px wide:

```bash
sips -Z 1200 -s formatOptions 72 public/certificates/*.jpg
```

## Adding a project

Append to `projects`. Card previews resolve in this order, in [Projects.tsx](src/components/Projects.tsx):

1. `image` — a path under `public/`
2. a bundled screenshot matched by the hostname of `link` (`STATIC_PREVIEWS`)
3. the GitHub social card for `github`, via `opengraph.githubassets.com`

Set `"flagship": true` to render the wide stats card at the top of the section instead of a grid card.

## Deploying

### Vercel (primary)

Deploys are pushed from the CLI and are **not** connected to this Git repo, so a `git push` alone won't update the site:

```bash
npx vercel@latest --prod --yes
```

To get push-to-deploy instead, import the repo once at vercel.com → Add New → Project.

### GitHub Pages

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to `main` and publishes `dist/` to the `gh-pages` branch. For this to serve, **Settings → Pages → Source must point at the `gh-pages` branch**. Pointing it at `main` serves the unbuilt `index.html`, which references `/src/main.tsx` and renders a blank page.

## Known loose ends

- `framer-motion` and `lucide-react` are in `package.json` but nothing imports them.
- `components.json` is a leftover shadcn/ui config; the UI components it points at were removed.
- `meta.canonical_url` and the canonical tag in `index.html` point at `husainbaghwala.dev`, which does not currently resolve.
