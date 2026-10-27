# Automyra SI website

The Automyra SI website: the original Flowcraft template design and animations, with Automyra SI content.

## How it works

- `_original/` is an untouched copy of the original template export. Never edit it.
- `content.mjs` lists every text change as `[find, replace]` rules.
- `node apply.mjs` rebuilds the site pages and the `_app/` scripts from `_original/` + `content.mjs`.
  It prints any rule that no longer matches anything.
- `node serve.mjs` serves the site at http://localhost:4321 (clean URLs like `/services`).
- `assets/` holds the initials avatars used for the team and reviews.
- `brand/` holds the logo, favicon, app icons and the social share image.

To change text: edit `content.mjs`, run `node apply.mjs`, refresh the browser.

## Deploying

Upload everything **except** `_original/`, `content.mjs`, `apply.mjs`, `serve.mjs` and this README.
The host must serve `/services` from `services.html` (on Vercel, set `"cleanUrls": true` in `vercel.json`).

## Estimated numbers to confirm before publishing

Case studies (`/work/...`):
- AI Call Desk: "0 missed calls after hours", "4 weeks" timeline; the client name "AI Call Desk" is a placeholder.
- Rabbit Funding: "< 5 min new lead to score", "6 h saved per rep weekly", "5 weeks".
- Hostyo: "24/7 owner self-service" (portal built in ~4 weeks, Mar–Apr 2026).
- Signal Law Group: "10 min per filing", "6 h saved per filing", "6 weeks".
- Centris Model: "< 2 min listing to model", "100s of listings per run", "3 weeks".
- Journal post "How we score every new lead…" describes the Rabbit Funding build in general terms.

Review and quote attribution (real Upwork review text, but which client wrote which is a guess):
- "He exceeded expectations…" is shown for Rabbit Funding.
- "Always a pleasure to work with…" is shown for Centris Model.
- The 503-hour "AI Agent Developer" review is shown for Signal Law Group.

Other:
- Team roles for Mishaal A. and Asma A. ("Automation Engineer") and the bios.
- Office hours "Mon–Sat 10:00–22:00 PKT" (drives the online/offline light on Contact).

Screenshots (`assets/work/`, mapped in `SHOTS` in `content.mjs`) and the text written from them:
- Each case study's "What we built" ends with a description of its screenshot. The AI Call Desk (Zapier call follow-up)
  and Rabbit Funding (n8n LinkedIn outreach) screenshots may be from other builds: confirm they belong to those cases.
- Home impact numbers come from the screenshots: 33 Hostyo properties, 48 GuardXFlow invoices, 15 gym plans, 6 gyms.
- About: the photo is the gym platform's super-admin, described in the story's last paragraph.
- Each journal post ends with an "About the cover" section.
- Screenshots show real client names, emails and amounts; blur them before publishing if needed.
