// Content changes applied on top of the original Framer template.
// Each rule is [find, replace], applied in order to every page (.html) and Framer module (_framer/*.mjs).
// Rules in `html` only touch .html files (for markup the template renders word by word).
// Run `node apply.mjs` after editing.

const words = (list, start, step = 70) =>
  list
    .map((w, i) => {
      const d = start + i * step;
      const acc = w.startsWith("*") && w.endsWith("*");
      const text = acc ? w.slice(1, -1) : w;
      return acc
        ? `<span class="fc-hd-w is-accw"><span class="fc-hd-i is-acc" style="transition-delay:${d}ms;--pd:${d + 500}ms"><span class="fc-it">${text}<svg class="fc-spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z"/></svg></span></span> </span>`
        : `<span class="fc-hd-w"><span class="fc-hd-i" style="transition-delay:${d}ms;--pd:${d + 500}ms">${text}</span> </span>`;
    })
    .join("");

// Template files left out of the site: the Framer badge and the template's owner guide
export const skip = [
  "_framer/PX9hIOIVM.DMy55LIA.mjs",
  "_framer/6H26Prrb4o9YLlvJ19pFbm6dirpK58LxZsXp2aIr1_o.C0STWohU.mjs",
  "_framer/TegEJwv_9QP-xncCqyn1YiXZRjiOpfJb5rK3ryDoN4w.C2O1eTM2.mjs",
];

export const booking = "https://calendly.com/hamzaabialal/free-ai-automation-discovery-call";
const CALENDLY = booking;

// A full CMS / prop value: replaced in JS (`v`), page data and attributes ("v") and rendered text (>v<).
const cms = (from, to) => [
  ["`" + from + "`", "`" + to + "`", from],
  ['"' + from + '"', '"' + to + '"', from],
  ...(JSON.stringify(from) !== '"' + from + '"' ? [[JSON.stringify(from), JSON.stringify(to), from]] : []),
  [">" + from + "<", ">" + to + "<", from],
];
// Same, but only in JS (for short values that also appear elsewhere in the HTML).
const js = (from, to) => [["`" + from + "`", "`" + to + "`", from]];

// One CMS entry: { old: new } for each field.
const entry = (fields) => Object.entries(fields).flatMap(([from, to]) => cms(from, to));

const services = [
  // 01 Voice agents
  entry({
    "Voice agents": "AI voice agents",
    "AI receptionists that answer every call, book appointments and qualify leads in a natural voice, day and night.":
      "Phone agents that answer, qualify and book in a natural voice, inbound and outbound, day and night.",
    "0 missed": "5.0★",
    "calls after hours": "Upwork rating on our voice-agent build",
    "Twilio, Vapi, Google Calendar, HubSpot": "Vapi, Retell, Twilio, ElevenLabs",
    "Trained on your prices, policies and calendar. Hands over to a person the moment a caller asks.":
      "Built on your scripts, prices and calendar. Hands over to a person the moment a caller asks.",
    "Listen to 50 real calls and map what callers ask;Write the voice, rules and hand-over triggers;Connect your calendar, CRM and phone line;Run it live beside your team for a week":
      "Map what callers ask and what the agent may do;Write the voice, prompts and hand-over rules;Connect your phone line, calendar and CRM;Test on real calls, then go live",
    "Natural voice in your brand's tone;Books, moves and confirms appointments;Answers prices, hours and policies;Transfers to a person on request;Call recordings and summaries in your CRM":
      "Natural ElevenLabs voices in your brand's tone;Inbound answering and outbound calling;Books and confirms appointments;Transfers to a person on request;Call summaries pushed to your CRM",
    "$8,500": "$15/hr",
  }),
  // 02 Workflow automation
  entry({
    "Workflow automation": "n8n & CRM automation",
    "The copy-paste between your tools, done by agents: invoices booked, CRM updated, reports sent.":
      "The copy-paste between your tools, done by workflows: invoices synced, CRMs updated, reminders sent.",
    "31 h": "19",
    "saved per person each month": "n8n workflows shipped",
    "Make, n8n, Zapier, Xero, Slack": "n8n, Make, Zapier, Zoho, Close CRM",
    "Shadow the process and time every step;Decide what the agent does and what a person approves;Build the workflow with logging and alerts;Hand over with a runbook and training":
      "Walk through the process and the tools involved;Decide what's automated and what a person approves;Build the workflow with logging and error alerts;Hand over with documentation and support",
    "Reads emails, PDFs and forms;Moves data between your tools;Approvals where a person should decide;Alerts in Slack when something breaks;Monthly report of hours saved":
      "Reads emails, PDFs, forms and SFTP files;Syncs Zoho, Close, Kommo, Frappe and QuickBooks;Lead scoring and smart reminders;Alerts in Slack when something breaks;Custom Python code where no-code stops",
    "$6,500": "$15/hr",
  }),
  // 03 Support agents -> Outreach & reply agents
  entry({
    "Support agents": "Outreach & reply agents",
    "Chat and email agents that answer from your docs and order data, and close the ticket when they can.":
      "LinkedIn systems that find your ICP, send connection requests, follow up and draft a reply to every DM.",
    "68%": "6",
    "tickets solved without a human": "outreach systems shipped",
    "Zendesk, Intercom, Shopify, Gorgias": "Unipile, LinkedIn, OpenAI, n8n",
    "Every answer cites the page it came from. Anything unsure goes to your team with a draft reply.":
      "Every message sounds like you. Anything the agent isn't sure about goes to your team as a draft.",
    "Read 500 past tickets and group them by intent;Connect your help desk, store and docs;Write answers and escalation rules;Launch on one channel, then add the rest":
      "Define your ICP and the signals that matter;Scrape and enrich the lead list;Write the sequences and reply rules;Launch, review replies, then scale",
    "Chat and email in your help desk;Order lookup, returns and tracking;Cited answers from your docs;Drafted replies for anything it escalates;Weekly accuracy review":
      "ICP connection requests on autopilot;DMs and follow-ups on a schedule;AI-drafted replies to every message;Lead data enriched from the web and filings;Every conversation logged in your CRM",
    "$9,500": "$15/hr",
  }),
  // 04 AI knowledge base -> AI document processing
  entry({
    "AI knowledge base": "AI document processing",
    "One search box over your drive, wiki and inbox that answers in plain words, with sources.":
      "PDFs, invoices, contracts and filings read by AI and turned into clean data in your sheets and tools.",
    "9 s": "5",
    "to find any answer": "document & PDF pipelines",
    "Notion, Google Drive, Confluence, Slack": "OpenAI, Google Drive, Slack, QuickBooks",
    "Private to your company, permission-aware, and it keeps itself up to date as your files change.":
      "Every extracted value links back to its source document, so your team can check it in one click.",
    "List the sources and who may see what;Index drives, wiki and inbox with permissions;Test answers against 100 real questions;Roll out in Slack or Teams":
      "Collect sample documents and the fields you need;Design the extraction and validation rules;Connect the inbox, drive or Slack it reads from;Test on real documents, then run it daily",
    "Search over drive, wiki and email;Answers with the source and page;Respects existing permissions;Stays in sync as files change;Usage and gap reports":
      "Invoices, statements, contracts and filings;Structured data in Sheets, CRM or QuickBooks;Financial models generated from PDFs;Source links for every value;Exceptions flagged for a person",
    "$7,500": "$15/hr",
  }),
  // 05 Custom AI apps
  entry({
    "Custom AI apps": "Custom AI apps & SaaS",
    "Internal tools built around a model: proposal writers, quote builders, lead scorers.":
      "Web apps, portals, SaaS products and mobile apps built around a model: dashboards, scorers, extractors.",
    "4 wks": "12",
    "from idea to live tool": "apps & SaaS products shipped",
    "OpenAI, Anthropic, Supabase, Retool": "React, Python, OpenAI, Vercel",
    "Small, sharp tools your team opens every day, with the guardrails and logging an operations lead expects.":
      "Real products your team or customers open every day, with the logins, roles and logging they need.",
    "Pick the one task worth a tool;Prototype it with your team in a week;Build with guardrails and logging;Ship, train and measure":
      "Pick the one workflow worth a product;Prototype it with you in the first week;Build, test and deploy;Ship, train and keep improving",
    "A focused internal tool;Built on the best model for the task;Access control and audit log;Hosted and maintained by us;Iterations every month":
      "React web apps and client portals;iOS and Android apps;Python / Django backends with OpenAI;Hosting on Vercel with your domain;Ongoing fixes and new features",
    "$12,000": "$15/hr",
  }),
].flat();

// Animated demos inside each service panel.
const serviceDemos = [
  // workflow
  ...cms("Book in Xero", "Sync to QuickBooks"),
  // chat -> LinkedIn conversation
  ...cms("Hi! Where is my order #4471? 📦", "Hi, saw your post about MCA funding. Do you work with trucking companies?"),
  ...cms(
    "It shipped this morning with DHL and arrives Thursday before noon. Here is your tracking link.",
    "We do! We fund trucking businesses from $10k to $500k. Want me to book a 15-min call with our team?"
  ),
  ...cms("Can I change the address?", "Sure, Thursday works."),
  ...cms("Sources · Shopify order · Shipping policy", "Logged · Close CRM · ICP list"),
  // AI search -> document answer
  ...cms("What is our refund window for annual plans?", "What net revenue did the Q3 statement report?"),
  ...cms("Annual plans can be refunded in full within ", "Net revenue for Q3 was "),
  ...js("30 days", "$1.42M"),
  ...cms(" of purchase, then pro-rated for the remaining months.", ", up 12% on Q2, per the income statement."),
  ...cms("Billing policy.pdf · p.4", "Q3_statement.pdf · p.4"),
  ...cms("Notion · Refunds", "Google Drive · Financials"),
  // app screen -> funding offer
  ...js("Client", "Merchant"),
  ...cms("Summit Freight", "Acme Trucking"),
  ...js("Service", "Requested"),
  ...cms("40 trucks · monthly", "$120k · MCA"),
  ...js("Margin", "Lead score"),
  ...js("22%", "87/100"),
  ...cms("Quote drafted by AI", "Offer drafted by AI"),
  ...cms("$48,200", "$120k"),
];

const processSteps = [
  ["Audit", "Discovery call", "Week 1", "Day 1",
    "We sit with your team for two days, map the work that repeats and rank what to automate by hours saved.",
    "We learn how the work is done today, which tools you use and where the hours go.",
    "Process map, ROI list, fixed quote", "Process map, tool list, free call"],
  ["Design", "Scope & quote", "Week 2", "Week 1",
    "We design the agent: what it reads, what it does, where it hands over to a person, and how you will measure it.",
    "A written scope, a timeline and a fixed price or an hourly estimate. No surprises.",
    "Agent spec, guardrails, test plan", "Scope doc, timeline, quote"],
  ["Build", "Build & test", "Weeks 3–4", "Weeks 2–3",
    "We build, connect your tools and test on real cases with your team watching every step.",
    "We build in your accounts, connect your tools and test on real cases with you watching every step.",
    "Working agent, integrations, logs", "Working system, integrations, logs"],
  ["Launch", "Launch & support", "Week 5 →", "Week 4 →",
    "The agent goes live with a person reviewing, then runs on its own. We tune it every month.",
    "We go live, hand over documentation and stay on to fix, tune and extend.",
    "Live agent, training, monthly report", "Live system, docs, ongoing support"],
];
const processRules = [
  [
    processSteps.map(([t, , w, , d, , g]) => [t, w, d, g].join("|")).join(";"),
    processSteps.map(([, t, , w, , d, , g]) => [t, w, d, g].join("|")).join(";"),
  ],
  ...processSteps.map(([, , , , d, nd]) => [d, nd]),
  ["From audit to|*autopilot* in five weeks.", "From first call to|*autopilot* in weeks."],
];

// ---------- Case studies (Work collection) ----------
// Numbers marked "est." in the README are rough estimates to confirm with the client.
// Slots keep the template photo; old slug -> new slug.
export const slugs = {
  "northwind-dental": "ai-voice-agent",
  ledgerly: "rabbit-funding",
  "oakline-home": "hostyo",
  "vantage-legal": "signal-law-group",
  "brightpath-realty": "centris",
  "voice-agents-for-clinics": "lead-scoring-with-n8n", // journal post
};

const IMG = "https://framerusercontent.com/images/";
const WHATSAPP = "https://wa.me/923047670164";
const UPWORK = "https://www.upwork.com/agencies/2001333416097289203/";
const EMAIL2 = "sirajsoban1@gmail.com";
// Contact form messages go to this inbox via FormSubmit (the first message sends an activation email there)
const CONTACT_INBOX = "hamzaabialal@gmail.com";
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_INBOX;
// Logo mark (24x24): the "A" in mint with the template's spark inside, which takes the text colour
const SPARK = "M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z";
const LOGO_MARK =
  '<path d="M4 20.5 12 3.5 20 20.5" fill="none" stroke="#19d98b" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>' +
  `<path d="${SPARK}" fill="currentColor" transform="translate(12 15.3) scale(.3) translate(-12 -12)"/>`;
const logoSvgJs = (size) =>
  "x(`svg`,{viewBox:`0 0 24 24`,width:" + size + ",height:" + size + ",style:{animation:`none`,fill:`none`,flex:`none`},\"aria-hidden\":!0,dangerouslySetInnerHTML:{__html:`" + LOGO_MARK + "`}})";
const logoSvgHtml = (size) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" style="animation:none;fill:none;flex:none" aria-hidden="true">${LOGO_MARK}</svg>`;
const VIDEO = "Mj_4v-9_014";
// Logo text in the header, phone menu and footer ("Automyra SI" + a small "Services")
const LOGO_NAME = "Automyra SI";
const LOGO_SUB_STYLE = "font-size:.55em;font-weight:500;letter-spacing:0;opacity:.7";
const LOGO_SUB_JS = "x(`small`,{style:{fontSize:`.55em`,fontWeight:500,letterSpacing:`0`,opacity:.7},children:`Services`})";
const LOGO_SUB_HTML = `<small style="${LOGO_SUB_STYLE}">Services</small>`;
const VIDEO_CSS = [
  ".fcr-vid{position:relative;display:grid;grid-template-columns:1fr 1.45fr;gap:clamp(28px,4vw,72px);align-items:center;margin-top:clamp(80px,9vw,140px);padding-top:clamp(40px,5vw,72px);border-top:1px solid color-mix(in srgb,var(--fc-cloud) 12%,transparent)}",
  ".fcr-veb{margin:0;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--fc-brass)}",
  ".fcr-vtx h3{margin:16px 0 0;font-size:clamp(34px,3.6vw,60px);line-height:1;letter-spacing:-.04em;font-weight:500;color:var(--fc-cloud)}",
  ".fcr-vtx h3 em{font-style:normal;background:linear-gradient(90deg,var(--fc-brass),color-mix(in srgb,var(--fc-brass) 55%,#fff));-webkit-background-clip:text;background-clip:text;color:transparent}",
  ".fcr-vp{margin:18px 0 0;max-width:420px;font-size:17px;line-height:1.6;color:color-mix(in srgb,var(--fc-cloud) 70%,transparent)}",
  ".fcr-vlink{display:inline-block;margin-top:26px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--fc-cloud);text-decoration:none;border-bottom:1px solid var(--fc-brass);padding-bottom:4px}",
  ".fcr-frame{position:relative;aspect-ratio:16/9;border-radius:24px;overflow:hidden;background:#000;box-shadow:0 0 0 1px color-mix(in srgb,var(--fc-cloud) 12%,transparent),0 40px 80px -30px rgba(0,0,0,.6)}",
  ".fcr-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}",
  ".fcr.is-ph .fcr-vid{grid-template-columns:1fr}",
].join("");

// ---------- Everything else (applied first, so it matches the original text) ----------
// Template stock photo id -> screenshot of our own build
const SHOTS = {
  // Case studies
  OPO7hpxO5fFgicqBiebGwosE: "/assets/work/ai-call-desk.jpg",
  xC399cfk7wneLE2CiZd0LCKY70: "/assets/work/rabbit-funding.png",
  A1LSpWqZartLRT6sPWVxN0Ijbo: "/assets/work/hostyo.png",
  hPOHK0EMfYfzD6Gkwr40RfxeeRk: "/assets/work/signal-law-group.png",
  t7VGq6b8rzt8deI2pJExlQ61qzM: "/assets/work/centris.jpg",
  // Journal covers
  VDw9kSAfKcII06HWmBCzlXra2w: "/assets/work/journal-where-to-start.png",
  "4Qy54YZKQfoqydh1duQiAZSMhBo": "/assets/work/journal-lead-scoring.jpg",
  "24R6jbtpYqHNUCW6JkLpsEM4xr0": "/assets/work/journal-guardrails.png",
  // Home: manifesto and impact-number photos
  RQGrwUJccNUEUkzCxfYpHAsGBQw: "/assets/work/hostyo-finances.png",
  ItanYfMXnkmn097dzhrIDLjQO5o: "/assets/work/guardxflow-history.png",
  "2PmHWb54zFBlIcxhPzsEwd9E": "/assets/work/gym-plans.png",
  zsA0OT2vZXb2Xy0iwnrRHTfWFKE: "/assets/work/gym-members.png",
  // About page photo
  O5reRIOLgNKSa6GakqcLWgTT8o: "/assets/work/gym-super-admin.png",
};

// About page story, one paragraph each; the last one describes the photo beside it
// About story photo: clicking it steps through these screenshots [src, alt, caption]
const ABOUT_GALLERY = [
  ["/assets/work/gym-super-admin.png", "Super-admin of the multi-gym platform we built", "Spark gym platform · super-admin"],
  ["/assets/work/gym-members.png", "Members page of a gym on our platform", "Spark · gym members"],
  ["/assets/work/gym-plans.png", "Membership plans on our gym platform", "Spark · membership plans"],
  ["/assets/work/hostyo-finances.png", "Hostyo owner portal finances", "Hostyo owner finances"],
  ["/assets/work/guardxflow-history.png", "GuardXFlow invoice history", "GuardXFlow invoice history"],
  ["/assets/work/closing-date-watcher.jpg", "Closing Date Watcher n8n workflow", "n8n Closing Date Watcher"],
  ["/assets/work/centris.jpg", "n8n flow that builds each Centris financial model", "n8n financial model flow"],
];
const aboutCaption = (i) => i + 1 + " / " + ABOUT_GALLERY.length + " · " + ABOUT_GALLERY[i][2] + " · click for next";
const ABOUT_GALLERY_NEXT =
  "e=>{let p=e.currentTarget,m=p.querySelector(`img`),c=p.querySelector(`.fcab-cap`),L=" + JSON.stringify(ABOUT_GALLERY.map((g, i) => [g[0], g[1], aboutCaption(i)])) +
  ",n=((+p.dataset.n||0)+1)%L.length;p.dataset.n=n;m.style.opacity=0;setTimeout(()=>{m.onload=()=>{m.style.opacity=1};m.src=L[n][0];m.alt=L[n][1];c.textContent=L[n][2]},200)}";
const ABOUT_STORY = [
  "Automyra AI started in 2025 in Karachi, when a small team of developers who had been building AI agents and n8n workflows for clients on Upwork decided to work as one studio.",
  "We start with the work, not the model: we learn how your team does it today, find the hours, then build the agents, workflows and apps that take them back — with the logs and hand-over rules an operations lead would demand.",
  "In the photos (click to see the next one): screens from systems we built and still run. First up is Spark, our multi-tenant gym platform. Its super-admin shows every gym, its owners, Stripe account and status in one place, and each gym gets its own panel for members, plans, classes, programming and magic links.",
  "Spark is white-label and runs six CrossFit gyms from a single codebase, live on web, iOS and Android (React, TypeScript, Supabase, Capacitor and Stripe). Each gym has its own branding, members, pricing and programming, and row-level security in Postgres keeps every gym’s data apart at the database level, not in app code.",
  "Members book classes with waitlists and follow their personal records and leaderboards in the app. Coaches import the Word or PDF workouts they already write, run private coaching with intake forms and check-ins, and send push notifications. Billing runs on Stripe subscriptions with accounting exports, in English and French. Behind it: 103 database tables, 147 migrations, 27 edge functions and 187 React components.",
];

// Journal posts: an "About the cover" section after the body's last line, describing the screenshot used as the cover.
// The body appears as JS, a data attribute, page JSON and rendered HTML, so each form gets a rule.
const H2 = `<h2 style="font-family:var(--fc-font-d, 'Geist'), Inter, -apple-system, Arial, sans-serif;font-weight:var(--fc-font-dw, 500);font-style:normal">`;
// `more` adds further sections after it: [heading, [paragraph, ...]]
const aboutCover = (last, text, more = []) => {
  const sections = [["About the cover", [text]], ...more];
  const md = sections.map(([h, ps]) => "\n\n## " + h + "\n\n" + ps.join("\n\n")).join("");
  const htm = sections.map(([h, ps]) => H2 + h + "</h2>" + ps.map((p) => "<p>" + p + "</p>").join("")).join("");
  return [
    [last + "`,f6:", last + md + "`,f6:", last],
    [last + '" data-f6', last + md + '" data-f6', last],
    [last + '",{"type":6', last + JSON.stringify(md).slice(1, -1) + '",{"type":6', last],
    [last + "</p>", last + "</p>" + htm, last],
  ];
};
const COVERS = [
  ...aboutCover("Trust comes from the logs, not the demo.",
    "The cover shows one of those quiet first wins: an n8n workflow that turns incoming tasks into calendar events on its own, with a branch for each type of task, so nobody copies them across by hand."),
  ...aboutCover("reps start the day with the best leads at the top.",
    "The cover shows a sister build in Zapier for project leads: each new lead in Google Sheets is validated, sorted by contact (no email, first or second contact, or early days), emailed through Gmail, analysed with AI by Zapier, logged in Zoho CRM and moved to the archive sheet."),
  ...aboutCover("Agents that people trust enough to stop checking.",
    "The cover is GuardXFlow, an invoice tool we built around this idea. AI reads every invoice, whether a PDF, a Word file or a phone photo, and fills in the supplier, number, date, subtotal and taxes. Nothing reaches the books until a person ticks the box to confirm they have verified the extracted information.", [
    ["What GuardXFlow does for the client", [
      "GuardXFlow is accounts-payable automation for a Québec business, built with React 19, TanStack Start and Supabase and connected to QuickBooks, Xero and Sage. Supplier invoices arrive in a mailbox, as phone photos of handwritten bills and as PDFs in cloud storage. GuardXFlow collects all of it in one queue, reads each document and files it to the accounting software once a person has approved it.",
      "Nothing gets typed twice. Invoices are read out of the email or the photo (supplier, number, dates, totals, tax lines, line items) and arrive ready to check.",
      "Duplicate payments are caught before approval, on graded evidence rather than a guess: an identical file, the same number and amount, or the same supplier and amount on the same day. When a supplier prints the customer’s account number where the invoice number belongs, that counts as evidence against a duplicate, because flagging those was burying real bills.",
      "Two-person control where it matters: each company can require a second approval above an amount it sets. Several companies share one queue, each with its own fiscal year, currency and approval rules.",
      "Bilingual and Québec-first: Quebecois French throughout, GST/QST, and figures read from the books rather than recalculated.",
      "An assistant that cannot act on its own. Nicol answers in plain language, by voice or text, across every module and the connected ledger. It can offer to approve an invoice, but the offer counts only when the person presses a server-side confirmation card. Saying ‘yes’ in the chat confirms nothing.",
      "The books stay the source of truth. The money logic lives in pure, tested modules (400+ assertions), and the AI never does the arithmetic.",
    ]],
  ]),
];

// Service slug -> its case study slug
const SERVICE_CASE = '{"voice-agents":"ai-voice-agent","workflow-automation":"centris","support-agents":"rabbit-funding","knowledge-base":"signal-law-group","custom-ai-apps":"hostyo"}';
// Services menu cards that are not case studies: AI document processing shows GuardXFlow (written up in the guardrails post),
// workflow automation shows the Closing Date Watcher n8n workflow
const MENU_CARDS =
  '{"knowledge-base":{slug:"guardxflow",href:"/journal/agents-need-guardrails",f1:"GuardXFlow",f4:"51",f3:"Invoices read by AI, approved by a person",img:"/assets/work/guardxflow-inbox.png"},"workflow-automation":{slug:"closing-date-watcher",href:"/services/workflow-automation",f1:"Closing Date Watcher",f4:"24/7",f3:"n8n checks every project closing date, updates the tasks and emails the team",img:"/assets/work/closing-date-watcher.jpg"}}';

const sitewide = [
  // Service pages: show the matching case study (the template falls back to the first case)
  [
    "F=E.find(e=>String(e.f7||``).toLowerCase()===String(T.f1||``).toLowerCase())||E[0]",
    "F=E.find(e=>e.slug===" + SERVICE_CASE + "[T.slug])||E[0]",
  ],
  // Services menu: the featured case follows the hovered service (the template picks by position)
  [
    "P=ae[ne%Math.max(1,ae.length)]||ae[0]",
    "P=" + MENU_CARDS + "[(ie[ne]||{}).slug]||ae.find(e=>e.slug===" + SERVICE_CASE + "[(ie[ne]||{}).slug])||ae[ne%Math.max(1,ae.length)]||ae[0]",
  ],
  // Services menu: a card can link somewhere other than a case page
  ["className:`fchd-feat`,href:`/work/${P.slug}`", "className:`fchd-feat`,href:P.href||`/work/${P.slug}`"],
  // Services menu: a fresh, eagerly loaded image per card, so the last card's image never lingers while the next loads
  ["x(`img`,{src:me.src,srcSet:me.srcSet,sizes:`360px`,alt:``,loading:`lazy`,", "x(`img`,{key:me.src,src:me.src,srcSet:me.srcSet,sizes:`360px`,alt:``,loading:`eager`,"],
  // Services menu card: show the whole screenshot in a frame above the text instead of cropping it behind the text
  [".fchd-feat{position:relative;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;min-height:280px;padding:20px;", ".fchd-feat{position:relative;display:flex;flex-direction:column;justify-content:flex-start;gap:6px;min-height:280px;padding:0 0 22px;background:color-mix(in srgb,var(--fc-cloud) 5%,transparent);"],
  [".fchd-fph{position:absolute;inset:0;z-index:-1}", ".fchd-fph{position:relative;aspect-ratio:16/10;margin-bottom:12px;overflow:hidden;background:#0b0f0e}.fchd-feat>:not(.fchd-fph){padding-inline:20px}"],
  [".fchd-fph img{width:100%;height:100%;object-fit:cover;", ".fchd-fph img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 0;"],
  [".fchd-feat:hover .fchd-fph img{scale:1.06}", ".fchd-feat:hover .fchd-fph img{scale:1.05}"],
  [".fchd-fph::after{content:\"\";", ".fchd-fph::after{display:none;content:\"\";"],
  [".fchd-feat b{font-size:46px;", ".fchd-feat b{font-size:38px;"],
  // About story: the gym super-admin screenshot is wide, so the frame takes its shape and shows all of it
  [".fcab-ph{position:relative;aspect-ratio:4/5;", ".fcab-ph{position:relative;align-self:center;aspect-ratio:1875/885;"],
  [".fcab-ph{aspect-ratio:4/3.6}", ".fcab-ph{aspect-ratio:1875/885}"],
  [".fcab-ph{clip-path:inset(0 0 0 0 round 36px);border-radius:36px}", ".fcab-ph{clip-path:inset(0 0 0 0 round 18px);border-radius:18px}"],
  [".fcab-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;scale:1.2;transition:", ".fcab-ph{cursor:pointer;background:#14181f}.fcab-cap{position:absolute;right:12px;bottom:12px;z-index:1;padding:6px 12px;border-radius:999px;background:rgba(10,14,13,.78);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#f2f1ec;font-size:12px;letter-spacing:.02em;pointer-events:none}.fcab-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;scale:1;transition:opacity .2s,"],
  // Home impact slides: a plain rounded frame shaped like the screenshots, so each one shows in full
  [".fci-cut{position:relative;aspect-ratio:4/4.4;max-height:72vh;margin-left:auto;", ".fci-cut{position:relative;aspect-ratio:2.15/1;max-height:72vh;margin-left:auto;clip-path:inset(0 round 20px)!important;-webkit-clip-path:inset(0 round 20px)!important;overflow:hidden;background:transparent!important;"],
  [".fci-tag{position:absolute;z-index:3;left:-18px;top:14%;", ".fci-tag{position:absolute;z-index:3;left:-88px;top:0;"],
  [".fci-cut{aspect-ratio:16/11;max-height:34vh;width:100%}", ".fci-cut{aspect-ratio:2.15/1;max-height:none;width:100%}"],
  [".fci-cut img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;clip-path:inset(100% 0 0 0);scale:1.2;", ".fci-cut img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;clip-path:inset(100% 0 0 0);scale:1;"],
  // Work cards: show the screenshots straight, in colour and uncropped by zoom
  ["object-fit:cover;scale:1.15;filter:grayscale(.55);", "object-fit:cover;object-position:50% 0;scale:1;filter:none;"],
  [".fcwl-card:hover .fcwl-ph img{scale:1.08;", ".fcwl-card:hover .fcwl-ph img{scale:1.03;"],
  [".fcwl-ph{position:relative;display:block;aspect-ratio:4/3.2;", ".fcwl-ph{position:relative;display:block;aspect-ratio:16/10;"],
  // Service pages: keep the "Other services" cards clear of the curved section below
  [".fcsv-others{margin-top:clamp(70px,8vw,120px)}", ".fcsv-others{margin-top:clamp(70px,8vw,120px);padding-bottom:clamp(60px,9vw,140px)}"],
  // FAQ: more room below the chat panel so the curved CTA never covers it
  [".fcf{position:relative;background:var(--fc-bone);color:var(--fc-ink);padding:clamp(60px,6vw,100px) 0 clamp(100px,11vw,170px)}",
    ".fcf{position:relative;background:var(--fc-bone);color:var(--fc-ink);padding:clamp(60px,6vw,100px) 0 calc(8vw + clamp(60px,6vw,110px))}"],
  // Second contact email (footer + contact page)
  [
    "x(`a`,{className:`fco-mail`,href:`mailto:${g.email}`,style:u,children:g.email}),",
    "x(`a`,{className:`fco-mail`,href:`mailto:${g.email}`,style:u,children:g.email}),x(`a`,{className:`fco-mail`,href:`mailto:" + EMAIL2 + "`,style:{...u,display:`table`,marginTop:8},children:`" + EMAIL2 + "`}),",
  ],
  [
    "d(`a`,{href:`mailto:${C.email}`,style:b,children:C.email})",
    "d(`a`,{href:`mailto:${C.email}`,style:b,children:C.email}),d(`a`,{href:`mailto:" + EMAIL2 + "`,style:{...b,fontSize:`clamp(26px,2.4vw,40px)`,fontWeight:500,letterSpacing:`-.04em`,width:`max-content`},children:`" + EMAIL2 + "`})",
  ],
  // Hostyo video testimonial, added at the end of the "What clients say" section
  [
    "String(w).padStart(2,`0`)]})]})]})]})]});return n?d(Tr,{on:!0,layer:r,children:P}):P}",
    "String(w).padStart(2,`0`)]})]})]})]}),u(`div`,{className:`fc-wrap fcr-vid`,children:[u(`div`,{className:`fcr-vtx`,children:[d(`p`,{className:`fcr-veb`,style:m,children:`Client story · Video`}),u(`h3`,{style:f,children:[`Why Hostyo chose `,d(`em`,{children:`Automyra AI.`})]}),d(`p`,{className:`fcr-vp`,children:`Andreas from Hostyo on working with our team. We built Hostyo's owner portal on React, Notion and Vercel.`}),d(`a`,{className:`fcr-vlink`,href:`/work/hostyo`,style:m,children:`Read the Hostyo case →`})]}),d(`div`,{className:`fcr-frame`,children:d(`iframe`,{src:`https://www.youtube-nocookie.com/embed/" + VIDEO + "?rel=0`,title:`Why Andreas/Hostyo Chose Automyra AI`,loading:`lazy`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,referrerPolicy:`strict-origin-when-cross-origin`,allowFullScreen:!0})})]})]});return n?d(Tr,{on:!0,layer:r,children:P}):P}",
  ],
  [
    "__html:Gr+Yr+ni}}),d(`span`,{className:`fcr-q`",
    "__html:Gr+Yr+ni+`" + VIDEO_CSS + "`}}),d(`span`,{className:`fcr-q`",
  ],
  // No "Made in Framer" badge rendered by the runtime
  ["(function(){Yf&&a(()=>{ee(document.getElementById(`__framer-badge-container`),m(g,{},m(h(()=>import(`./PX9hIOIVM.DMy55LIA.mjs`)))))})})()", "void 0"],
  // Footer copyright
  ["`© 2026 `,g.name||`Flowcraft`,`. `,a]", "`© 2026 `,g.name||`Flowcraft`,`. All rights reserved. `,a]"],
  // The template's owner guide (/start-here) is removed; that address shows the 404 page
  ["import(`./6H26Prrb4o9YLlvJ19pFbm6dirpK58LxZsXp2aIr1_o.C0STWohU.mjs`)),path:`/start-here`",
    "import(`./5akXRPcSCb2Rk8rXP7L7NwEaqhqBtWDR4GhPImfzy14.JT7mbZR2.mjs`)),path:`/start-here`"],
  // Script folder and runtime file without the Framer name
  ["/_framer/", "/_app/"],
  ["framer.0pITv1M6.mjs", "runtime.0pITv1M6.mjs"],
  // Logo: header and footer use the Automyra AI mark
  ["fe=({s:e=18})=>x(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,\"aria-hidden\":!0,children:x(`path`,{d:`" + SPARK + "`})})",
    "fe=({s:e=22})=>" + logoSvgJs("e")],
  ["children:[x(ee,{}),g.name||`Flowcraft`]", "children:[" + logoSvgJs(30) + ",`" + LOGO_NAME + "`," + LOGO_SUB_JS + "]"],
  ["children:[x(fe,{}),se]", "children:[x(fe,{}),`" + LOGO_NAME + "`," + LOGO_SUB_JS + "]"],
  // Site settings
  ...cms(
    "An AI agency that builds the agents and automations your team runs every day: support, sales ops and back office, live in weeks.",
    "An AI automation agency that builds the agents, n8n workflows and apps your team runs every day: lead gen, sales ops and back office."
  ),
  ...cms("X:https://x.com, LinkedIn:https://linkedin.com, YouTube:https://youtube.com",
    `Upwork:${UPWORK}, YouTube:https://www.youtube.com/@msobansiraj1, WhatsApp:${WHATSAPP}`),
  ["Mon–Fri 09:00–18:00 ET", "Mon–Sat 10:00–22:00 PKT"],
  ...cms("1-5 09:00-18:00", "1-6 10:00-22:00"),
  [
    "Services|Voice agents:/services/voice-agents, Workflow automation:/services/workflow-automation, Support agents:/services/support-agents, AI knowledge base:/services/knowledge-base, Custom AI apps:/services/custom-ai-apps;Studio|Work:/work, Process:/process, Pricing:/pricing, About:/about, Journal:/journal;Start|Book a call:/book, Free audit:/book?plan=audit, Contact:/contact, Privacy:/legal",
    `Services|AI voice agents:/services/voice-agents, n8n & CRM automation:/services/workflow-automation, Outreach & reply agents:/services/support-agents, AI document processing:/services/knowledge-base, Custom AI apps & SaaS:/services/custom-ai-apps;Studio|Work:/work, Process:/process, Pricing:/pricing, About:/about, Journal:/journal;Start|Book a call:${CALENDLY}, WhatsApp:${WHATSAPP}, Upwork:${UPWORK}, Contact:/contact, Privacy:/legal`,
  ],
  ["Services:/services, Work:/work, Pricing:/pricing, Book a call:/book", `Services:/services, Work:/work, Pricing:/pricing, Book a call:${CALENDLY}`],
  ["`Voice agent, Workflow, Knowledge base`", "`AI agent, n8n workflow, Lead scoring`"],

  // Impact numbers, each read from the dashboard in its screenshot (see SHOTS)
  ["12,000+|tasks our agents run every day|", "33|properties run on the Hostyo owner portal|"],
  ["94%|of conversations solved without a person|", "51|invoices processed in GuardXFlow's AI inbox|"],
  ["31 h|given back to each person, every month|", "15|membership plans live on our gym platform|"],
  ["3 weeks|from the audit to a live agent|", "6|gyms run from one super-admin we built|"],
  ["Numbers from agents in *production.*", "Numbers from systems in *production.*"],
  ["Averages across 60+ live agents, measured in the client's own tools.", "Read straight from the dashboards of systems we built and still run."],

  // Agent orbit
  [
    "Receptionist|Clinics|+38% bookings;Invoice clerk|Finance|1,900 invoices / week;Lead responder|Real estate|40 s first reply;Support desk|E-commerce|71% tickets solved;Knowledge search|Legal|9 s to any answer;Proposal writer|Agencies|3x faster proposals;Onboarding agent|SaaS|+22% activation;Recruiting screener|HR|12 h saved per role;Report writer|Operations|0 manual steps;Collections agent|Finance|-41% overdue",
    "Lead scorer|Finance|Every lead scored in Close;Invoice extractor|Finance|Invoices to QuickBooks;Contract filer|Banking|Zoho Sign to Sheets;Outreach agent|Sales|ICP connects + follow-ups;Reply bot|Sales|AI-drafted LinkedIn replies;Competitor monitor|Finance|Daily multi-agent watch;Voice agent|Services|Calls answered 24/7;Proxy analyst|Legal|Ballot items from SEC 14A;Reminder agent|Sales|15 & 2-min call nudges;Price tracker|E-commerce|Prices scraped + analysed",
  ],
  [
    "Every agent runs on the same core: your data, your rules, one console. Hover any of them to see what it did for a client.",
    "Every agent runs on the same core: your data, your rules, your tools. Hover any of them to see what it does for a client.",
  ],

  // Reviews (real Upwork reviews; photos replaced with initials)
  ...entry({
    "The voice agent took over our phones in three weeks. Patients can't tell, and our front desk finally has time for the people in the room.":
      "Working with Mohammed Soban was a great experience. He developed a custom AI solution for my business that streamlined several manual processes and delivered exactly what we were looking for.",
    "Dr. Sarah Kim": "Upwork client",
    "Clinical Director": "Voice agent build · 5.0★",
    "They didn't sell us AI. They sat with our team for two days, found the nine hours a week we were wasting, and automated them.":
      "He exceeded expectations with his dedication and attention to detail. The project was completed flawlessly.",
    "Marcus Webb": "Upwork client",
    "Head of Finance": "Sales automation · 5.0★",
    "71% of our tickets now close without a person, and our CSAT went up. I did not expect both.":
      "Perfect work, highly recommended for custom coding solutions!",
    "Priya Nair": "Andreas",
    "Head of CX": "Client portal build · 5.0★",
    "Fast, careful and honest about what AI should not do. The audit alone paid for itself.":
      "Always a pleasure to work with and will do it again in the future!",
    "Daniel Ortiz": "Upwork client",
    COO: "Ongoing automation · 5.0★",
    "Our associates search 14 years of work in seconds. It is the tool they open first every morning.":
      "Mohammed demonstrated strong technical expertise in AI and software development, was responsive to feedback, and consistently found practical solutions to challenges as they arose.",
    "Helen Park": "Upwork client",
    "Managing Partner": "AI agent platform · 5.0★",
  }),
  [IMG + "nav4BNW1QDy7Unw8X6zyM8Kfc.webp", "/assets/review-1.svg"],
  [IMG + "Krqms3NaMy8nEwjrtqUIO3c.webp", "/assets/review-2.svg"],
  [IMG + "SI7SREshQvn5x8FfyPCRtuRGW40.webp", "/assets/review-3.svg"],
  [IMG + "LJ6VyYaPa73NdCNpktKXjIwd4.webp", "/assets/review-4.svg"],
  [IMG + "mxSZ7D3i0xytLsGiCkGbSf1Z9rc.webp", "/assets/review-5.svg"],

  // Team (also the journal authors)
  ...entry({
    "Nadia Rahman": "Muhammad Soban",
    "Head of Automation": "Business Manager · Lead AI Engineer",
    "Ran operations at two scale-ups before building the agents she wished she had.":
      "Builds the AI agents, voice agents and n8n systems behind most of our projects. Top Rated, 100% Job Success.",
    "Kofi Mensah": "Hamza B.",
    "Lead AI Engineer": "Business Manager",
    "Builds voice and workflow agents; obsessed with logs and hand-over rules.":
      "Runs client projects from the first call to launch and keeps every build on scope. Top Rated, 100% Job Success.",
    "Ingrid Solberg": "Mishaal A.",
    "Solutions Designer": "Automation Engineer",
    "Maps processes with clients and turns them into agent specs.":
      "Builds n8n workflows and CRM automations across Zoho, Close and Kommo. Top Rated, 100% Job Success.",
    "Mateo Alvarez": "Asma A.",
    "Integrations Engineer": "Automation Engineer",
    "Connects agents to CRMs, help desks and finance tools without breaking them.":
      "Connects APIs, scrapers and data pipelines, and keeps them running. Top Rated on Upwork.",
  }),
  [IMG + "msSr3aFiYWr5AeW5HFJveqW8Ikw.webp", "/assets/team-soban.svg"],
  [IMG + "KlxBQZf0VdDz9LZ380WbtBGW4.webp", "/assets/team-hamza.svg"],
  [IMG + "EafIAfdeuX4HicNn6hoUEhhCOs.webp", "/assets/team-mishaal.svg"],
  [IMG + "ofk1TJhVoioTNZgTMDue4RB7sQQ.webp", "/assets/team-asma.svg"],

  // Stock photos replaced with screenshots of our own builds (see SHOTS)
  ...Object.entries(SHOTS).map(([id, to]) => [IMG + id + ".webp", to]),

  // About page
  ["Operations people|who *build* agents.", "AI builders|who *ship* automations."],
  [
    "We ran operations teams before we built agents for them. That is why we start with the work, not the model.",
    "We build AI agents, n8n workflows and apps for founders and operations teams. We start with the work, not the model.",
  ],
  ["2021|founded;60+|agents live;12|builders", "2025|founded;37+|systems shipped;5|builders"],
  ["We build the agents we|wished we *had.*", "Build it once,|so it *runs* on its own."],
  [
    "Flowcraft started in 2021 when our founders, both operations leads, spent a year automating their own teams' busywork. The tools were powerful but the projects kept failing for the same reason: nobody had mapped the work first.;So we built a studio that does it the other way round. We sit with your team, find the hours, then design, build and run the agents that take them back — with the logs and hand-over rules an operations lead would demand.",
    ABOUT_STORY.join(";"),
  ],
  [
    "Start with the work|We map the process before we touch a model. Most wins come from the boring middle of a workflow.;Keep a person in the loop|Every agent knows when to hand over, with a draft, and every action is logged.;Measure in hours|We report hours saved and errors caught, every month, in your own tools.",
    "Start with the work|We map the process before we touch a model. Most wins come from the boring middle of a workflow.;Keep a person in the loop|Every automation knows when to hand over, and every run is logged.;Build it once|We build it properly the first time, document it, and stay on to support it.",
  ],
  ["2021|founded in New York;60+|agents in production;31 h|saved per person, monthly;12|people, all builders",
    "2025|founded in Karachi;37+|systems shipped;1,595 h|delivered on Upwork;5|people, all builders"],
  ["The Flowcraft team at work", "Super-admin of the multi-gym platform we built"],
  // Story photo: a click (or Enter) shows the next screenshot of our builds
  [
    "d(`div`,{className:`fcab-ph`,children:d(`img`,{src:k.src,srcSet:k.srcSet,sizes:x?`90vw`:`45vw`,alt:`Super-admin of the multi-gym platform we built`,loading:`lazy`,decoding:`async`})})",
    "u(`div`,{className:`fcab-ph`,role:`button`,tabIndex:0,title:`Click for the next screenshot`,onClick:" + ABOUT_GALLERY_NEXT + ",onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.click()},children:[d(`img`,{src:k.src,sizes:x?`90vw`:`45vw`,alt:`Super-admin of the multi-gym platform we built`,loading:`lazy`,decoding:`async`}),d(`span`,{className:`fcab-cap`,children:`" + aboutCaption(0) + "`})]})",
  ],
  [/(<div class="fcab-ph")(><img [^>]*>)(<\/div>)/g, '$1 role="button" tabindex="0" title="Click for the next screenshot"$2<span class="fcab-cap">' + aboutCaption(0) + "</span>$3"],

  // Services page
  ["60+|agents live;94%|solved without a person;3 wks|to launch", "37+|systems shipped;100%|Job Success;1–4 wks|to launch"],

  // Work page
  ["Real builds with real numbers, measured in our clients' own tools.", "Real builds for real clients: the problem, what we shipped and what changed."],
  ["+38%|appointments;2 days|month-end close;71%|tickets by AI;9 s|to any answer", "24/7|calls answered;100%|leads scored;4 wks|portal live;< 2 min|listing to model"],

  // Process page
  ["Five weeks from|audit to *autopilot.*", "Weeks, not months,|to *autopilot.*"],
  [
    "A clear path with a fixed price at every step, and a person from your team in the loop from day one.",
    "A clear path with a written scope and price before we start, and you in the loop from day one.",
  ],
  ["2 days|audit;1 week|design;2 weeks|build;30 days|tuning", "Day 1|discovery;Week 1|scope;2–3 wks|build;Ongoing|support"],

  // Pricing (page + home section)
  ["Start with a fixed-fee audit. If we build, its fee comes off the first project.", "Start with a free call. Then pay by the hour or agree a fixed price for the project."],
  ["Start with the audit. If we build, its fee comes off the first project.", "Start with a free call. Pay by the hour or a fixed project price."],
  ["$1,500|audit;from $6,500|per agent;$3,900|per month", "Free|discovery call;$15–35|per hour;Fixed|project quotes"],
  ["Prices in USD, excluding your own tool subscriptions. Every build includes 30 days of tuning.", "Prices in USD, excluding your own tool subscriptions. Hire us directly or through Upwork."],
  ...entry({
    "Automation Audit": "Discovery Call",
    "$1,500": "Free",
    "one-off": "30 minutes",
    "Find the hours worth automating": "Find what's worth automating",
    "Two-day process review with your team;Ranked list of automations with ROI;Architecture and tool plan;Fixed quote for the build":
      "Walk through your process and tools;Automation ideas ranked by impact;Rough timeline and cost;No obligation",
    "Book the audit": "Book a free call",
    "Agent Build": "Project Build",
    "$6,500": "$15/hr",
    "from, per agent": "starting rate",
    "One agent or workflow, live in weeks": "One workflow, agent or app, built end to end",
    "Everything in the audit;Design, build and testing;Integrations with your tools;Team training and handover;30 days of tuning after launch":
      "Scope, build and testing;Integrations with your tools;Documentation and handover;Fixes after launch;Hire direct or via Upwork",
    "Start a build": "Start a project",
    "AI Partner": "Automation Partner",
    "$3,900": "$15/hr",
    "per month": "ongoing, weekly hours",
    "An AI team on call, every month": "Your AI & automation team, month to month",
    "New automations every month;Monitoring and monthly reports;Priority support in Slack;Quarterly strategy session":
      "New automations every month;Monitoring and fixes;Priority support on WhatsApp;One team that knows your stack",
  }),

  // FAQ
  ...entry({
    "What does an AI automation agency actually do?": "What does Automyra AI actually do?",
    "We find the work your team repeats, then design, build and run AI agents and workflows that do it: answering calls and chats, moving data between tools, writing first drafts and reports.":
      "We find the work your team repeats, then build the AI agents, n8n workflows and integrations that do it: scoring leads, extracting documents, syncing CRMs, answering calls and drafting replies.",
    "How long until an agent is live?": "How long until it's live?",
    "Most builds go live in three to five weeks: one week to map the process, two to three to build and test, and a week of supervised running before we hand over.":
      "Most automations go live in one to four weeks. Smaller n8n workflows often take days; apps and multi-agent systems take a few weeks.",
    "Almost always. We connect to your CRM, inbox, calendar, help desk, accounting and drive through their APIs or tools like Make and n8n. No rip-and-replace.":
      "Almost always. We've connected Close, Zoho, Kommo, Frappe, QuickBooks, Google Workspace, Slack, Outlook and LinkedIn through their APIs, n8n, Make or Zapier. No rip-and-replace.",
    "Your data stays in your accounts. We use enterprise model APIs that do not train on your data, keep permissions in place and log every action an agent takes.":
      "We build inside your own accounts wherever possible, use model APIs that don't train on your data, and only ask for the access the project needs.",
    "What if the agent gets something wrong?": "What if the automation gets something wrong?",
    "Every agent has guardrails and a hand-over rule: when it is unsure it passes the task to a person with a draft. We review the logs weekly in the first month.":
      "Every system has error alerts and a hand-over rule: when it's unsure, it passes the task to a person. We stay on after launch to fix and tune.",
    "No. We build, host and maintain everything, and train the people who will use it. You need someone who knows the process and can give us an hour a week.":
      "No. We build, document and support everything. You need someone who knows the process and can answer our questions.",
    "The audit is a fixed fee. Builds are quoted per agent after the audit, and the monthly partnership covers new automations, monitoring and support.":
      "We work at $15–35 per hour depending on the work, or a fixed price for a clearly scoped project. You can hire us directly or through Upwork.",
    "Yes, and we recommend it. Most clients start with one agent on one process, see the hours come back, then add the next.":
      "Yes, and we recommend it. Most clients start with one workflow, see the hours come back, then add the next.",
  }),

  // CTA band
  ["Free automation audit", "Free discovery call"],
  [
    "Tell us where the hours go. In 20 minutes we will show you the three automations worth building first, and what they would save.",
    "Tell us where the hours go. In 30 minutes we'll show you the automations worth building first, and what they would cost.",
  ],
  ["No slides. No obligation. Replies within 2 hours.", "No slides. No obligation. Replies within a few hours."],

  // Contact page: the form opens WhatsApp with the message (there is no form endpoint)
  [
    "Tell us what your team repeats every week. A person from our team replies within two working hours, not a bot.",
    "Tell us what your team repeats every week. A person from our team replies within a few hours, not a bot.",
  ],
  ["We will reply within two working hours. Your reference is", "Thanks! Your message is in our inbox, and a person will reply by email within a few hours. Reference"],
  // Contact form: the message is emailed to CONTACT_INBOX through FormSubmit. FormSubmit takes 20–30 s to answer, so the
  // form shows "sent" at once and the request finishes in the background (keepalive survives leaving the page).
  // A failed send is retried once; if that fails too, WhatsApp opens with the message (the browser may block that pop-up).
  [
    "try{_&&await fetch(_,{method:`POST`,headers:{\"Content-Type\":`application/json`,Accept:`application/json`},body:JSON.stringify({...F,topic:M[N]?M[N].t:``,ref:n})})}catch{}",
    "{let fb=JSON.stringify({name:F.name,email:F.email,company:F.company,topic:M[N]?M[N].t:``,message:F.msg,ref:n,_subject:`Website message from ${F.name} (${n})`,_replyto:F.email,_template:`table`})," +
      "fs=()=>fetch(_||`" + CONTACT_ENDPOINT + "`,{method:`POST`,keepalive:!0,headers:{\"Content-Type\":`application/json`,Accept:`application/json`},body:fb}).then(r=>{if(!r.ok)throw 0});" +
      `fs().catch(fs).catch(()=>{window.open("${WHATSAPP}?text="+encodeURIComponent("Hi Automyra AI, I'm "+F.name+(F.company?" from "+F.company:"")+" ("+F.email+").\\nTopic: "+(M[N]?M[N].t:"")+"\\n\\n"+F.msg),"_blank")})}`,
    "contact form",
  ],

  // Journal
  ["Here is how we pick it in an audit.", "Here is how we pick it on a discovery call."],
  ...entry({
    "What a voice agent changed at six dental clinics": "How we score every new lead in Close CRM with n8n",
    "Zero missed calls after hours, 38% more appointments and a front desk that finally looks up.":
      "Enrichment, industry and revenue classification, and a score on every lead before a rep calls.",
    "## The problem was the phone\n\nA third of calls rang out at lunch and after five.\n\n## What we built\n\nA voice agent that books, moves and confirms appointments in the practice software, in the clinic's own tone.\n\n## What happened\n\nBookings rose 38% in two months, and the front desk got eleven hours a week back.":
      "## The problem was the order\n\nReps called leads in the order they arrived, so the best merchants waited while time went to poor fits.\n\n## What we built\n\nAn n8n workflow that enriches each new lead, classifies its industry and revenue with AI, writes a score into Close CRM and sets 15- and 2-minute call reminders.\n\n## What changed\n\nEvery lead now has a score within minutes, and reps start the day with the best leads at the top.",
  }),
  ...COVERS,

  // Legal
  ["Last updated 1 September 2026", "Last updated 27 October 2026"],
  ["To run your audit, build and operate your agents, and support your team.", "To scope, build and support your automations, and to reply to you."],
  ["privacy@flowcraftagents.ai", "hamzaabialal@gmail.com"],
  ["Each project runs on a written scope with a fixed price, agreed before we start.", "Each project runs on a written scope with an hourly rate or a fixed price, agreed before we start."],
  [
    "The audit is paid up front. Builds are billed 50% at kick-off and 50% at launch. Monthly plans bill in advance and can be cancelled with 30 days' notice.",
    "Hourly work is billed weekly. Fixed-price builds are billed 50% at kick-off and 50% at launch. Projects hired through Upwork follow Upwork's payment terms.",
  ],

  // Page titles and descriptions
  ["Voice agents, workflow automation, support agents, AI knowledge bases and custom AI apps — designed, built and run by Flowcraft.",
    "AI voice agents, n8n & CRM automation, LinkedIn outreach, AI document processing and custom AI apps — built by Automyra AI."],
  ["AI Automation Services — Voice, Support & Workflow Agents | Flowcraft", "AI Automation Services — AI Agents, n8n & CRM Automation | Automyra AI"],
  ["Book a Free Automation Audit | Flowcraft", "Book a Free Discovery Call | Automyra AI"],
  ["Twenty minutes with the person who would lead your build. Leave with the three automations worth doing first.",
    "Thirty minutes with the person who would lead your build. Leave with the automations worth doing first."],
  ["From a free automation audit to a live, monitored AI agent in weeks: the Flowcraft process step by step.",
    "From a free discovery call to a live, monitored automation in weeks: the Automyra AI process step by step."],
  ["How We Work — Audit, Build, Run | Flowcraft", "How We Work — Discover, Build, Support | Automyra AI"],
  ["Clear pricing for AI automation: a fixed-price audit, agent builds and a monthly partner plan.",
    "Clear pricing for AI automation: a free discovery call, $15–35/hr builds or fixed project quotes."],
  ["Pricing — AI Automation Audit, Build & Partner Plans | Flowcraft", "Pricing — $15–35/hr AI Automation & Fixed-Price Projects | Automyra AI"],
];

const cases = [
  // Clinic photo -> AI voice agent
  entry({
    "Northwind Dental": "AI Call Desk",
    Healthcare: "Small business",
    "A voice agent that books 38% more appointments": "Every call answered, day and night",
    "+38%": "24/7",
    "appointments booked": "calls answered",
    "Six clinics, one phone line that never rings out. The agent books, moves and confirms visits in the practice software.":
      "A voice agent on Vapi, Retell and Twilio that answers, qualifies callers and books them in, with summaries sent to the CRM.",
    "Voice agent": "AI voice agent",
    "Six clinics shared one phone line. After 5 pm and at lunch, a third of calls rang out, and every missed call was a lost appointment.":
      "Calls after hours and in busy periods went to voicemail, and most of those callers never called back.",
    "A voice agent that answers in the clinic's own tone, books, moves and confirms appointments in the practice software, and hands anything clinical to a nurse.":
      "A voice agent built on Vapi, Retell and Twilio with a natural ElevenLabs voice. It answers every call, qualifies the caller, books appointments and hands anything unusual to a person. In the screenshot is the Zapier follow-up behind the calls: each new row in Google Sheets is filtered and sorted by call outcome (already completed, ready to award, interested or not ready yet), gets the matching Gmail follow-up, is logged in Zoho CRM and then moves to the year's archive sheet.",
    "+38%|appointments booked;0|missed calls after hours;4.8/5|caller rating;11 h|front-desk time back per week":
      "24/7|calls answered;0|missed calls after hours;361 h|engineering on Upwork;5.0★|client rating",
    "Patients can't tell it's an agent, and our front desk finally has time for the people in the room.":
      "He developed a custom AI solution for my business that streamlined several manual processes and delivered exactly what we were looking for.",
    "Dr. Sarah Kim, Clinical Director": "Upwork client · 5.0★ review",
    "Vapi, Twilio, Dentrix, HubSpot": "Vapi, Retell, Twilio, ElevenLabs",
  }),
  // Finance photo -> Rabbit Funding
  entry({
    Ledgerly: "Rabbit Funding",
    Accounting: "Finance · MCA",
    "Month-end close in 2 days instead of 9": "Every lead scored before a rep picks up the phone",
    "2 days": "100%",
    "month-end close": "of new leads scored automatically",
    "Invoices, receipts and bank lines matched by an agent, with a person approving the exceptions.":
      "New leads in Close CRM are enriched, classified by industry and revenue, and scored within minutes.",
    "Month-end took nine days: some 8,000 invoices, receipts and bank lines a month, matched by hand across three tools.":
      "Reps worked leads in the order they arrived, so the best merchants waited while time went to poor fits.",
    "An invoice agent that reads every document, matches it to purchase orders and bank lines, books it in Xero and sends only the exceptions to a person.":
      "An n8n system that enriches every new lead, classifies it by industry and revenue, writes a score into Close CRM and sets 15- and 2-minute call reminders. In the screenshot is the LinkedIn side of the outreach: on a schedule, n8n collects everyone who liked or commented on recent posts, checks a Google Sheet for earlier contact, has Groq write the right message (a first DM, a deepen, a convert or a follow-up), sends it and logs the date back to the sheet.",
    "2 days|month-end close;1,900|invoices a week;97%|matched without a person;9 h|saved per week":
      "100%|leads scored;< 5 min|new lead to score;6 h|saved per rep weekly;24/7|running",
    "They found the nine hours a week we were wasting and automated them.":
      "He exceeded expectations with his dedication and attention to detail. The project was completed flawlessly.",
    "Marcus Webb, Head of Finance": "Upwork client · 5.0★ review",
    "n8n, Xero, Google Drive, Slack": "n8n, Close CRM, OpenAI, Google Sheets",
  }),
  // E-commerce photo -> Hostyo
  entry({
    "Oakline Home": "Hostyo",
    "E-commerce": "Property management",
    "7 in 10 support tickets closed by AI": "One portal for every property owner",
    "71%": "4 wks",
    "tickets resolved by AI": "from kickoff to live portal",
    "Order questions, returns and delivery changes answered in seconds from Shopify data.":
      "Owners see their properties, bookings and statements in one place instead of asking the team by email.",
    "Support agent": "Custom AI app",
    "Order questions, returns and delivery changes filled the help desk; replies took six hours at peak.":
      "Owner updates lived in spreadsheets and email threads, and the team spent hours every week answering the same owner questions.",
    "A support agent on chat and email that answers from Shopify and the shipping policy, processes returns and escalates with a drafted reply.":
      "A React owner portal on Vercel, with Notion as the data layer. Each owner sees only their own properties, bookings and statements. In the screenshot is the home dashboard: balance, payouts, expenses, the forecast and next arrivals from Airbnb and Booking.com.",
    "71%|tickets solved by AI;38 s|first reply;+9 pts|CSAT;3x|tickets per person":
      "4 wks|kickoff to live;24/7|owner self-service;1|portal for every owner;5.0★|client rating",
    "71% of our tickets close without a person, and CSAT went up.": "Perfect work, highly recommended for custom coding solutions!",
    "Priya Nair, Head of CX": "Andreas, Hostyo",
    "Gorgias, Shopify, OpenAI, Slack": "React, Notion, Vercel",
  }),
  // Legal photo -> Signal Law Group
  entry({
    "Vantage Legal": "Signal Law Group",
    "Every precedent, found in seconds": "Proxy filings turned into ballot items in minutes",
    "average search": "AI document tools shipped",
    "A private knowledge base over 14 years of matters, permission-aware and cited.":
      "AI tools that read SEC Schedule 14A proxy filings and draft the ballot items, plus a dashboard that drafts investigation material.",
    "Fourteen years of matters sat in folders only the partners knew how to search.":
      "The team read long SEC proxy filings by hand to pull out each ballot item before any analysis could start.",
    "A private, permission-aware knowledge base that answers in plain words and cites the exact document and page.":
      "A React tool that reads Schedule 14A filings with OpenAI and drafts every ballot item, alongside a dashboard that drafts investigation material and HeyGen videos through Make.com. In the screenshot is the Signal Ledger on signallawgroup.com: every recommendation is published within 48 hours of the EDGAR filing, timestamped, given a SHA fingerprint so it cannot be quietly changed, and later checked against the vote result the company reports in its 8-K.",
    "9 s|average search;14 yrs|of matters indexed;100%|answers cited;6 h|saved per associate weekly":
      "10 min|per filing;100%|items linked to the filing;2|AI tools shipped;6 h|saved per filing",
    "It is the tool our associates open first every morning.":
      "He quickly understood the requirements, communicated clearly throughout the project, and delivered a solution that was both reliable and well designed.",
    "Helen Park, Managing Partner": "Upwork client · 5.0★ review",
    "Anthropic, Pinecone, SharePoint, Teams": "OpenAI, Make.com, HeyGen, React",
  }),
  // Real-estate photo -> Centris financial model
  entry({
    "Brightpath Realty": "Centris Model",
    "Leads answered in 40 seconds, 24/7": "Listings to financial model, automatically",
    "40 s": "< 2 min",
    "first reply to a lead": "from listing to model",
    "Every portal enquiry gets a reply, a viewing slot and a CRM record before the agent has read it.":
      "Real-estate listings scraped from Centris and dropped straight into an investment model.",
    "Portal enquiries waited hours for a reply; by then buyers had called three other agents.":
      "Analysts copied listing details into a spreadsheet model one property at a time.",
    "A lead agent that replies within a minute, qualifies the buyer, offers viewing slots and writes the CRM record before a person reads it.":
      "A Python scraper and API pipeline, orchestrated in n8n, that pulls Centris listings, cleans the data and fills the financial model for each property. In the screenshot is the n8n flow that builds each model: it copies the model template in Google Drive, splits the AI output by sheet, appends the general info, financing, residential and commercial rent rolls, capital expenses, costs and qualitative analysis, then posts the finished model to Slack.",
    "40 s|first reply;+27%|viewings booked;100%|leads logged in CRM;24/7|coverage":
      "< 2 min|listing to model;100s|of listings per run;0|manual copy-paste;Daily|automatic refresh",
    "Fast, careful and honest about what AI should not do.": "Always a pleasure to work with and will do it again in the future!",
    "Daniel Ortiz, COO": "Upwork client · 5.0★ review",
    "Make, HubSpot, Google Calendar, WhatsApp": "Python, n8n, API, Google Sheets",
  }),
].flat();

// Case pages: an extra "03" chapter, per case slug [label, text]
const CASE_EXTRA = {
  hostyo: [
    "Hostyo CRM",
    "We also built and maintain a custom CRM for Hostyo, a short-term rental property management company in Cyprus. It brings their entire sales process into one place: Facebook ad leads flow in automatically, agents call owners directly from the CRM, and every call is recorded, transcribed in Greek or English, and summarised by AI. The team can message owners on WhatsApp, book meetings synced with Google Calendar, send contracts for e-signature in English and Greek, and chat internally with mobile notifications. Automated workflows and health alerts keep everything running smoothly, so Hostyo's team spends less time on admin and more time signing new properties.",
  ],
  "rabbit-funding": [
    "Lead generation & sales pipeline",
    "We also automated the rest of Rabbit Funding's sales pipeline, end to end, on n8n with Apify, LinkedIn, OpenAI, Close CRM, Jotform and Zoho Sign. Apify researches prospects on LinkedIn and extracts their data, OpenAI studies each prospect and writes a personal outreach message, and every lead is created and kept in sync in Close CRM. Applications come in through Jotform, and the documents are generated and sent for e-signature in Zoho Sign. APIs and webhooks connect it all, so the path from finding a prospect to a signed document runs without manual work.",
  ],
  "ai-voice-agent": [
    "AI calling & follow-up (Zapier)",
    "We also built a lead generation and calling system on Zapier that puts AI voice agents to work on every new lead. Leads are captured from several sources, synced to the CRM, then qualified and sorted on their own. An AI calling agent phones each new lead, starts the conversation and collects the details that matter. Every outcome is tracked (answered, missed, interested or asked for a callback) and written back to the lead's CRM record with the conversation history. Leads who did not pick up, showed interest or need more time get automatic follow-ups, with rules that stop duplicate calls, and when a person needs to step in, the sales rep gets a notification and a task. The pipeline stays up to date with very little manual work.",
  ],
  centris: [
    "AI document processing",
    "We also built an AI document workflow in n8n that reads email attachments of every kind. It detects each attachment, sorts it by MIME type and sends PDFs, images and Word files down the pipeline that suits them. AI reads each document in context and pulls out the details that matter (key fields, dates, names, amounts and references), and anyone can ask a question about an uploaded document and get the answer from it. Each attachment gets its own Google Sheet with the extracted data, so unstructured attachments become structured, searchable information without manual review or data entry.",
  ],
  "signal-law-group": [
    "Research automation",
    "We also automated the firm's research and publishing on Make.com. A company name goes in, and GPT with live web search researches it, scores the risk and produces a full investigation: article, press release, cover image, PDF and a 60-second AI news-anchor video. Once approved, it is published on WordPress and sent to 226 publisher outlets. Every 12 hours the system checks SEC EDGAR for new proxy statements and drafts a voting recommendation that an analyst reviews within 48 hours. The team now covers far more companies, never misses a filing, and nothing goes public without a person signing off.",
  ],
};
// Server-rendered HTML of the extra chapter, inserted after the case's "What we built" block
const caseExtraHtml = (slug) =>
  '$1<div class="fccs-ch"><p class="fccs-lab" style="' + CASE_LAB_STYLE + '"><em>03</em>' + CASE_EXTRA[slug][0].replace(/&/g, "&amp;") +
  "</p><p class=\"fccs-txt\" style=\"font-family:var(--fc-font-d, 'Geist'), Inter, -apple-system, Arial, sans-serif;font-weight:var(--fc-font-dw, 500);font-style:normal\">" +
  CASE_EXTRA[slug][1].replace(/&/g, "&amp;").replace(/'/g, "&#x27;") + "</p></div>";
const CASE_LAB_STYLE = "font-family:var(--fc-font-m, 'IBM Plex Mono'), ui-monospace, SFMono-Regular, Menlo, monospace;font-weight:var(--fc-font-mw, 400)";

// Workflow automation service page: the construction company build behind the Closing Date Watcher (the Services menu card
// links here), shown before "Other services" [heading, screenshot alt, paragraphs]
const SERVICE_EXTRA = {
  slug: "workflow-automation",
  title: "Also in production: Zoho CRM automation for a construction company",
  img: "/assets/work/closing-date-watcher.jpg",
  alt: "Closing Date Watcher workflow in n8n",
  ps: [
    "The Closing Date Watcher in the screenshot is one part of a larger system we built for a construction company on Zoho CRM, Google Sheets and n8n. Every day it checks each project’s closing date, updates the tasks and emails the team.",
    "Tasks are created and assigned on their own from incoming records, project activity and operational needs. Inventory stays in sync between Zoho CRM and Google Sheets, a daily check finds shortages, and low-stock alerts go out in time to restock before work stops.",
    "Invoices are generated and sent to clients from the related inventory and transactions. Daily and weekly reports cover inventory, operations and business performance, and scheduled workflows watch the system and act on set business rules.",
    "The result: tasks, inventory, client invoicing, stock alerts and recurring reports in one connected system, with far less manual data entry and more accurate data.",
  ],
};
const SERVICE_EXTRA_CSS =
  ".fcsv-x{margin:clamp(60px,7vw,110px) 0 0}.fcsv-x img{display:block;width:100%;height:auto;margin:0 0 28px;border-radius:24px;background:#0b0f0e}" +
  ".fcsv-x p{margin:0 0 18px;max-width:820px;font-size:18px;line-height:1.65;color:var(--fc-mut)}";
const DISPLAY_STYLE = "font-family:var(--fc-font-d, 'Geist'), Inter, -apple-system, Arial, sans-serif;font-weight:var(--fc-font-dw, 500);font-style:normal";
const serviceExtraHtml = () =>
  '<div class="fcsv-x"><h2 class="fcsv-h" style="' + DISPLAY_STYLE + '">' + SERVICE_EXTRA.title + '</h2><img src="' + SERVICE_EXTRA.img +
  '" alt="' + SERVICE_EXTRA.alt + '" loading="lazy" decoding="async">' + SERVICE_EXTRA.ps.map((p) => "<p>" + p + "</p>").join("") + "</div>";

// Tool logos (Simple Icons, brand colours) in assets/tools/<key>.svg. TOOL_KEYS maps a tool name as written on the site to its file
const TOOL_KEYS = {
  n8n: "n8n", make: "make", "make.com": "make", zapier: "zapier", zoho: "zoho", "zoho crm": "zoho", "zoho sign": "zoho",
  openai: "openai", gpt: "openai", anthropic: "anthropic", claude: "anthropic", supabase: "supabase", quickbooks: "quickbooks",
  hubspot: "hubspot", "google sheets": "googlesheets", slack: "slack", stripe: "stripe", airtable: "airtable", notion: "notion",
  python: "python", react: "react", twilio: "twilio", whatsapp: "whatsapp", gmail: "gmail", xero: "xero", sage: "sage",
  "google drive": "googledrive", vercel: "vercel", postgres: "postgresql", postgresql: "postgresql", shopify: "shopify",
};
// Home: the moving strip of tools under the projects carousel [file, name]
const TOOL_STRIP = [
  ["n8n", "n8n"], ["make", "Make"], ["zapier", "Zapier"], ["zoho", "Zoho"], ["openai", "OpenAI"], ["anthropic", "Claude"],
  ["supabase", "Supabase"], ["quickbooks", "QuickBooks"], ["hubspot", "HubSpot"], ["googlesheets", "Google Sheets"],
  ["slack", "Slack"], ["stripe", "Stripe"], ["airtable", "Airtable"], ["notion", "Notion"], ["xero", "Xero"],
  ["twilio", "Twilio"], ["whatsapp", "WhatsApp"], ["shopify", "Shopify"], ["python", "Python"], ["react", "React"],
];
const toolStripHtml = () => {
  const items = TOOL_STRIP.map(([k, n]) => '<span><img src="/assets/tools/' + k + '.svg" alt="" width="24" height="24">' + n + "</span>").join("");
  return '<div class="fctl"><p class="fctl-h">Tools we automate</p><div class="fctl-m" aria-label="Tools we work with"><div class="fctl-t">' +
    items + '<i aria-hidden="true">' + items + "</i></div></div></div>";
};
// u and d are the bundle's names for jsxs (several children) and jsx (one child)
const toolStripJs = (u, d) => {
  const items = (hidden) => TOOL_STRIP.map(([k, n], i) => u + "(`span`,{children:[" + d + "(`img`,{src:`/assets/tools/" + k + ".svg`,alt:``,width:24,height:24})," + JSON.stringify(n) + "]}," + (hidden ? 100 + i : i) + ")").join(",");
  return u + "(`div`,{className:`fctl`,children:[" + d + "(`p`,{className:`fctl-h`,children:`Tools we automate`})," + d + "(`div`,{className:`fctl-m`,\"aria-label\":`Tools we work with`,children:" + u + "(`div`,{className:`fctl-t`,children:[" +
    items(false) + "," + d + "(`i`,{\"aria-hidden\":!0,children:[" + items(true) + "]})]})})]})";
};
// A tool name as a pill with its logo (case pages and service pages); JS form takes the name in e and the key in k
const TOOL_PILL_JS = (list) =>
  list + ".map((e,t)=>{let k=" + JSON.stringify(TOOL_KEYS) + "[String(e).toLowerCase()];return k?u(`span`,{className:`has-ic`,children:[d(`img`,{src:`/assets/tools/${k}.svg`,alt:``,width:16,height:16}),e]},t):d(`span`,{children:e},t)})";
const toolPillHtml = (inner) =>
  inner.replace(/<span>([^<]+)<\/span>/g, (m, n) => {
    const k = TOOL_KEYS[n.toLowerCase()];
    return k ? '<span class="has-ic"><img src="/assets/tools/' + k + '.svg" alt="" width="16" height="16">' + n + "</span>" : m;
  });

// Home: a live workflow demo above the tool strip. Each step lights up in turn (CSS only), then the run starts again.
// [tool logo, step, detail]
const FLOW_STEPS = [
  ["gmail", "Email arrives", "Invoice from a supplier"],
  ["openai", "AI reads it", "Supplier, amount, due date"],
  ["zoho", "CRM updated", "Deal and contact saved"],
  ["googlesheets", "Logged", "Row added to the tracker"],
  ["slack", "Team alerted", "#finance, with a summary"],
];
const FLOW_CYCLE = 8; // seconds per run
// A small element tree rendered both as HTML and as the bundle's jsx calls: [tag, class, children, attributes]
const flowTree = () => {
  const step = ([k, t, s], i) => [
    "div", "amw-n amw-n" + i, [
      ["span", "amw-ic", [["img", "", [], { src: "/assets/tools/" + k + ".svg", alt: "", width: 22, height: 22 }]]],
      ["b", "", [t]],
      ["small", "", [s]],
      ["i", "amw-ok", ["✓"], { "aria-hidden": true }],
    ],
  ];
  const kids = [];
  FLOW_STEPS.forEach((s, i) => {
    if (i) kids.push(["span", "amw-c amw-c" + (i - 1), [["i", "", []]], { "aria-hidden": true }]);
    kids.push(step(s, i));
  });
  return ["div", "amw", [
    ["div", "amw-hd", [
      ["p", "amw-eb", ["Live workflow"]],
      ["h3", "", ["One email in. Everything else runs on its own."]],
      ["p", "amw-run", [["i", "", [], { "aria-hidden": true }], "Every run in about 4 seconds"]],
    ]],
    ["div", "amw-flow", kids, { role: "img", "aria-label": "Workflow: " + FLOW_STEPS.map((s) => s[1]).join(", then ") }],
  ]];
};
const flowHtml = ([tag, cls, kids, attrs = {}] = flowTree()) => {
  const a = (cls ? ' class="' + cls + '"' : "") + Object.entries(attrs).map(([k, v]) => " " + k + '="' + v + '"').join("");
  if (tag === "img") return "<img" + a + ">";
  return "<" + tag + a + ">" + kids.map((c) => (typeof c === "string" ? c : flowHtml(c))).join("") + "</" + tag + ">";
};
const flowJs = (u, d, [tag, cls, kids, attrs = {}] = flowTree()) => {
  const props = (cls ? ["className:`" + cls + "`"] : []).concat(
    Object.entries(attrs).map(([k, v]) => JSON.stringify(k) + ":" + (v === true ? "!0" : JSON.stringify(v))));
  const ch = kids.map((c) => (typeof c === "string" ? JSON.stringify(c) : flowJs(u, d, c)));
  if (ch.length) props.push("children:" + (ch.length > 1 ? "[" + ch.join(",") + "]" : ch[0]));
  return (ch.length > 1 ? u : d) + "(`" + tag + "`,{" + props.join(",") + "})";
};
// Keyframes per step: each one waits, lights up, stays done, and all reset just before the next run
const flowCss = () => {
  const n = FLOW_STEPS.length, at = (i) => 6 + i * 16;
  let css = "";
  for (let i = 0; i < n; i++) {
    const s = at(i);
    css += "@keyframes amw-n" + i + "{0%," + (s - 0.1) + "%,97%,100%{opacity:.42;border-color:var(--amw-line);box-shadow:none;transform:none}" +
      (s + 3) + "%{opacity:1;border-color:var(--fc-brass);box-shadow:0 0 0 1px var(--fc-brass),0 14px 40px -12px var(--fc-brass);transform:translateY(-4px)}" +
      (s + 12) + "%,90%{opacity:1;border-color:color-mix(in srgb,var(--fc-brass) 45%,transparent);box-shadow:none;transform:none}}" +
      "@keyframes amw-ok" + i + "{0%," + (s + 10) + "%,95%,100%{opacity:0;transform:scale(.4)}" + (s + 12) + "%,90%{opacity:1;transform:none}}" +
      ".amw-n" + i + "{animation:amw-n" + i + " " + FLOW_CYCLE + "s infinite}.amw-n" + i + " .amw-ok{animation:amw-ok" + i + " " + FLOW_CYCLE + "s infinite}";
    if (i < n - 1)
      css += "@keyframes amw-c" + i + "{0%," + (s + 9) + "%{left:0;opacity:0}" + (s + 10) + "%{left:0;opacity:1}" + (at(i + 1) - 0.5) + "%{left:100%;opacity:1}" +
        at(i + 1) + "%,100%{left:100%;opacity:0}}.amw-c" + i + " i{animation:amw-c" + i + " " + FLOW_CYCLE + "s infinite}";
  }
  return css +
    ".amw:last-child{margin-bottom:max(0px,calc(10vw - 50px))}.amw{--amw-line:color-mix(in srgb,var(--fc-cloud,#fff) 14%,transparent);grid-column:1/-1;position:relative;z-index:5;margin-top:clamp(56px,7vw,110px)}" +
    ".amw-hd{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:12px 32px;margin-bottom:28px}" +
    ".amw-eb{flex-basis:100%;margin:0;font:500 12px/1 'IBM Plex Mono',ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--fc-brass)}" +
    ".amw-hd h3{margin:0;max-width:640px;font-size:clamp(26px,2.6vw,40px);font-weight:500;letter-spacing:-.04em;line-height:1.08;color:var(--fc-cloud,#fff)}" +
    ".amw-run{display:inline-flex;align-items:center;gap:10px;margin:0;font:500 13px/1 'IBM Plex Mono',ui-monospace,monospace;color:var(--fc-mut)}" +
    ".amw-run i{width:8px;height:8px;border-radius:50%;background:var(--fc-brass);box-shadow:0 0 10px var(--fc-brass);animation:amw-pulse 1.6s ease-in-out infinite}" +
    "@keyframes amw-pulse{50%{opacity:.35}}" +
    ".amw-flow{display:flex;align-items:stretch;padding:28px;border:1px solid var(--amw-line);border-radius:28px;" +
    "background:radial-gradient(color-mix(in srgb,var(--fc-cloud,#fff) 9%,transparent) 1px,transparent 1px) 0 0/22px 22px,color-mix(in srgb,var(--fc-cloud,#fff) 3%,transparent)}" +
    ".amw-n{position:relative;flex:1;display:flex;flex-direction:column;gap:6px;padding:18px 16px;border:1px solid var(--amw-line);border-radius:18px;" +
    "background:color-mix(in srgb,var(--fc-night,#07100c) 82%,var(--fc-cloud,#fff) 4%);color:var(--fc-cloud,#fff)}" +
    ".amw-ic{display:grid;place-items:center;width:42px;height:42px;margin-bottom:8px;border-radius:12px;background:#fff}.amw-ic img{width:22px;height:22px}" +
    ".amw-n b{font-size:16px;font-weight:600;letter-spacing:-.01em}.amw-n small{font-size:13px;line-height:1.4;color:var(--fc-mut)}" +
    ".amw-ok{position:absolute;top:12px;right:12px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--fc-brass);color:#04120c;font-size:12px;font-style:normal;font-weight:700;opacity:0}" +
    ".amw-c{position:relative;flex:0 0 clamp(18px,2.4vw,40px);align-self:center;height:2px;background:var(--amw-line)}" +
    ".amw-c i{position:absolute;top:50%;left:0;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:50%;background:var(--fc-brass);box-shadow:0 0 12px var(--fc-brass);opacity:0}" +
    "@media (max-width:809.98px){.amw-flow{flex-direction:column;padding:14px}.amw-n{display:grid;grid-template-columns:42px 1fr;column-gap:14px;row-gap:2px;align-items:center;padding:12px 14px}.amw-ic{grid-row:span 2;margin:0}.amw-n b{align-self:end}.amw-n small{align-self:start}.amw-c{flex-basis:22px;width:2px;height:auto;align-self:center}.amw-c i{display:none}}" +
    "@media (prefers-reduced-motion:reduce){.amw *{animation:none!important}.amw-n{opacity:1!important}.amw-ok{opacity:1!important}}";
};

// Features, each switched on for the live site or kept for localhost only. ALL_FEATURES=1 node apply.mjs builds them all
// (to preview). strip: moving tool-logo strip on the home page; pills: tool logos in case and service pills;
// flow: live workflow demo on the home page; theme: dark/light button (dark by default when on).
const FEATURES = process.env.ALL_FEATURES ? { strip: true, pills: true, flow: true, theme: true } : { strip: false, pills: false, flow: true, theme: false };

// Styles for the extras, added to every page's <head>
const STRIP_CSS =
  ".fctl{position:relative;z-index:5;grid-column:1/-1;margin-top:clamp(28px,4vw,60px);margin-bottom:max(0px,calc(10vw - 50px))}.fctl-m{padding:6px 0}.fctl-h{margin:0 0 24px;text-align:center;font:500 12px/1 'IBM Plex Mono',ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--fc-mut)}" +
  ".fctl-m{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}" +
  ".fctl-t{display:flex;width:max-content;animation:fctl 45s linear infinite}.fctl-m:hover .fctl-t{animation-play-state:paused}.fctl-t i{display:contents}" +
  ".fctl-t span{display:inline-flex;align-items:center;gap:10px;margin-right:52px;font-size:18px;font-weight:500;letter-spacing:-.01em;white-space:nowrap;color:var(--fc-cloud,#fff);opacity:.7;transition:opacity .3s}" +
  ".fctl-t img{width:24px;height:24px;filter:brightness(0) invert(1);transition:filter .3s}.fctl-t span:hover{opacity:1}.fctl-t span:hover img{filter:none}" +
  "@keyframes fctl{to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.fctl-t{animation:none}}" +
  "html[data-theme=light] .fctl-t img{filter:brightness(0)}";
const PILL_CSS =
  "span.has-ic{display:inline-flex!important;align-items:center;gap:7px}span.has-ic img{width:16px;height:16px;flex:none}";
// Two themes, dark by default. Dark: the light ("bone") sections turn dark by swapping the colour tokens; dark sections keep theirs.
// Light: the dark sections (.fc-dark, and the header) turn light the same way.
const THEME_CSS =
  "html[data-theme=dark] body{--token-0891008a-32ca-47b1-8840-7637f8ffab38:#0E161B;--token-1787f81e-c38e-4944-9e2f-612b26580daf:#E6EDEC;" +
  "--token-1fd6b3cd-b255-4559-8184-bc1950f645f2:#15212A;--token-f437083a-6838-4188-9216-339e3e3987ad:#24333C;--token-f2d690a8-f54f-4bde-87fd-b6557d995849:#8E9DA2;background:#0E161B}" +
  "html[data-theme=dark] :is(.fc-dark,.fchd){--fc-bone:#f1f0eb!important;--fc-ink:#0e0f12!important;--fc-cloud:#fff!important;--fc-fog:#dad8d0!important;--fc-stone:#6b6e6a!important}" +
  "html[data-theme=dark] :is(span.has-ic,.fctl-t span) img[src$='/notion.svg'],html[data-theme=dark] :is(span.has-ic) img[src$='/vercel.svg'],html[data-theme=dark] span.has-ic img[src$='/anthropic.svg']{filter:invert(1)}" +
  "html[data-theme=light] :is(.fc-dark,.fchd){--fc-night:#F1F0EB!important;--fc-pine:#E4E8E6!important;--fc-cloud:#0E0F12!important;--fc-ink:#FFFFFF!important;--fc-fog:#DAD8D0!important}" +
  ".am-theme{position:fixed;left:18px;bottom:18px;z-index:3000;display:grid;place-items:center;width:46px;height:46px;padding:0;border:1px solid rgba(255,255,255,.16);border-radius:50%;" +
  "background:rgba(10,16,20,.82);color:#fff;cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 30px -10px rgba(0,0,0,.6);transition:transform .3s}" +
  ".am-theme:hover{transform:scale(1.08)}.am-theme svg{width:20px;height:20px}";
const EXTRA_HEAD =
  "<style>" + (FEATURES.strip ? STRIP_CSS : "") + (FEATURES.pills ? PILL_CSS : "") + (FEATURES.flow ? flowCss() : "") + (FEATURES.theme ? THEME_CSS : "") + "</style>" +
  (FEATURES.theme ? "<script>try{var t=localStorage.getItem('am-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}</script>" : "");
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M1.5 12H4M20 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>';
const THEME_BUTTON =
  "<script>(function(){var r=document.documentElement,b=document.createElement('button');b.type='button';b.className='am-theme';" +
  "function s(){var d=r.dataset.theme==='dark';b.innerHTML=d?" + JSON.stringify(SUN) + ":" + JSON.stringify(MOON) + ";b.title=b.ariaLabel=d?'Light mode':'Dark mode'}" +
  "b.onclick=function(){var d=r.dataset.theme!=='dark';r.dataset.theme=d?'dark':'light';try{localStorage.setItem('am-theme',d?'dark':'light')}catch(e){}s()};" +
  "s();document.body.appendChild(b)})()</script>";

// Site colours. The template ships emerald (#19d98b) on green-black; each entry swaps those values everywhere
const PALETTES = {
  emerald: { accent: "#19d98b", hi: "#9ff5cf", pine: "#0d1b16", night: "#07100c", rgb: "25,217,139" },
  blue: { accent: "#3B82F6", hi: "#93C5FD", pine: "#0E1729", night: "#060A14", rgb: "59,130,246" },
  amber: { accent: "#FF8A1F", hi: "#FFD08A", pine: "#1C130B", night: "#0D0906", rgb: "255,138,31" },
  lime: { accent: "#C6F432", hi: "#F1FFC2", pine: "#161A0C", night: "#0A0B07", rgb: "198,244,50" },
  teal: { accent: "#14B8A6", hi: "#FCD34D", pine: "#0B1A1C", night: "#061012", rgb: "20,184,166" },
  gold: { accent: "#E7B54A", hi: "#FFF1C7", pine: "#1A160D", night: "#0C0A06", rgb: "231,181,74" },
  rose: { accent: "#F43F5E", hi: "#FDA4AF", pine: "#1D0E13", night: "#0D0709", rgb: "244,63,94" },
  sky: { accent: "#38BDF8", hi: "#E0F2FE", pine: "#0B1822", night: "#060D13", rgb: "56,189,248" },
  coral: { accent: "#FF6B4A", hi: "#FFC2A8", pine: "#1C100D", night: "#0D0807", rgb: "255,107,74" },
  silver: { accent: "#E5E7EB", hi: "#9CA3AF", pine: "#16181C", night: "#0A0B0D", rgb: "229,231,235" },
  indigo: { accent: "#6366F1", hi: "#F472B6", pine: "#12122A", night: "#08081A", rgb: "99,102,241" },
  sunset: { accent: "#FF6A3D", mid: "#FF3D8B", hi: "#FFB86B", pine: "#1E0F14", night: "#0E070A", rgb: "255,106,61" },
  cyber: { accent: "#00E5FF", mid: "#7C5CFF", hi: "#FF2BD6", pine: "#0D1024", night: "#060714", rgb: "0,229,255" },
  mintblue: { accent: "#00F5A0", hi: "#00D9F5", pine: "#0A1A1E", night: "#050E11", rgb: "0,245,160" },
  fire: { accent: "#F7971E", hi: "#FFD200", pine: "#1C140A", night: "#0D0905", rgb: "247,151,30" },
  violetorange: { accent: "#A855F7", mid: "#EC4899", hi: "#F97316", pine: "#170E22", night: "#0B0712", rgb: "168,85,247" },
  aquapink: { accent: "#4FACFE", hi: "#F093FB", pine: "#0E1424", night: "#070A14", rgb: "79,172,254" },
  aurora2: { accent: "#00F5A0", grad: ["#00F5A0", "#00D9F5", "#A855F7"], hi: "#A855F7", pine: "#0A1620", night: "#050C12", rgb: "0,245,160" },
  oceansunset: { accent: "#22D3EE", grad: ["#22D3EE", "#818CF8", "#F472B6", "#FB923C"], hi: "#FB923C", pine: "#0E1222", night: "#070912", rgb: "34,211,238" },
  tropical: { accent: "#4ADE80", grad: ["#FACC15", "#4ADE80", "#22D3EE"], hi: "#22D3EE", pine: "#0B1A14", night: "#060E0B", rgb: "74,222,128" },
  royal: { accent: "#8B5CF6", grad: ["#6366F1", "#A855F7", "#F59E0B"], hi: "#F59E0B", pine: "#140F24", night: "#0A0714", rgb: "139,92,246" },
  candy: { accent: "#C084FC", grad: ["#F472B6", "#C084FC", "#60A5FA"], hi: "#60A5FA", pine: "#160F22", night: "#0B0812", rgb: "192,132,252" },
  lava: { accent: "#F97316", grad: ["#EF4444", "#F97316", "#FACC15"], hi: "#FACC15", pine: "#1C0E0A", night: "#0E0705", rgb: "249,115,22" },
  emeraldgold: { accent: "#10B981", grad: ["#10B981", "#34D399", "#FDE68A"], hi: "#FDE68A", pine: "#0B1A14", night: "#060E0B", rgb: "16,185,129" },
  ice: { accent: "#7DD3FC", grad: ["#E0F2FE", "#7DD3FC", "#6366F1"], hi: "#6366F1", pine: "#0B1424", night: "#060A14", rgb: "125,211,252" },
  rainbow: { accent: "#00D9F5", grad: ["#00F5A0", "#00D9F5", "#7C5CFF", "#FF2BD6"], hi: "#FF2BD6", pine: "#0B1020", night: "#060812", rgb: "0,217,245" },
};
const PAL = PALETTES[process.env.PALETTE || "mintblue"];
// Headline "everything." gradient: the palette's stops spread from 10% to 90%, or accent → (mid →) highlight
const headGradient = (p) => {
  const stops = p.grad || ["var(--fc-brass)", ...(p.mid ? [p.mid] : []), p.hi];
  return "linear-gradient(100deg," + stops.map((c, i) => c + " " + Math.round(10 + (80 * i) / (stops.length - 1)) + "%").join(",") + ")";
};

export const rules = [
  // Home: the workflow demo and the moving tool-logo strip at the end of the projects section (FcLogos names jsxs o and jsx s)
  ...(FEATURES.flow || FEATURES.strip ? [["children:[e.n,`: `,e.r]},t))})]", "children:[e.n,`: `,e.r]},t))})," +
    [FEATURES.flow && flowJs("o", "s"), FEATURES.strip && toolStripJs("o", "s")].filter(Boolean).join(",") + "]", "tool strip js"]] : []),
  // Tool pills with logos: case pages (list ne) and service pages (list P)
  ...(FEATURES.pills ? [
    ["children:ne.map((e,t)=>d(`span`,{children:e},t))", "children:" + TOOL_PILL_JS("ne"), "case tool pills js"],
    ["children:P.map((e,t)=>d(`span`,{children:e},t))", "children:" + TOOL_PILL_JS("P"), "service tool pills js"],
  ] : []),
  // Workflow automation service page: the construction company section from SERVICE_EXTRA (t is the page slug)
  ["L.length>0&&u(`div`,{className:`fcsv-others`",
    "t===`" + SERVICE_EXTRA.slug + "`&&u(`div`,{className:`fcsv-x`,children:[d(`h2`,{className:`fcsv-h`,style:_,children:" + JSON.stringify(SERVICE_EXTRA.title) +
    "}),d(`img`,{src:`" + SERVICE_EXTRA.img + "`,alt:`" + SERVICE_EXTRA.alt + "`,loading:`lazy`,decoding:`async`})," +
    SERVICE_EXTRA.ps.map((p) => "d(`p`,{children:" + JSON.stringify(p) + "})").join(",") + "]}),L.length>0&&u(`div`,{className:`fcsv-others`"],
  [".fcsv-det{margin:0 0 clamp(60px,7vw,110px);", SERVICE_EXTRA_CSS + ".fcsv-det{margin:0 0 clamp(60px,7vw,110px);"],
  // Case pages: render the extra chapter from CASE_EXTRA
  [
    "d(`dd`,{children:d(`span`,{children:E.f13})})]})]})]})]}),",
    "d(`dd`,{children:d(`span`,{children:E.f13})})]})]})]})]})," +
      "(" + JSON.stringify(CASE_EXTRA) + ")[E.slug]&&u(`div`,{className:`fccs-ch`,children:[u(`p`,{className:`fccs-lab`,style:y,children:[d(`em`,{children:`03`}),(" + JSON.stringify(CASE_EXTRA) + ")[E.slug][0]]}),d(`p`,{className:`fccs-txt`,style:_,children:(" + JSON.stringify(CASE_EXTRA) + ")[E.slug][1]})]}),",
  ],
  ...sitewide,

  // ---------- Home: process ----------
  ...processRules,

  // ---------- Home: services ----------
  ...services,
  ...serviceDemos,
  ["Five kinds of agents.|One *standard.*", "Five kinds of systems.|One *standard.*"],
  ["Five kinds of agents", "Five kinds of systems"],
  ["handed over with rules, logs and training.", "handed over with documentation and support."],

  // ---------- Case studies ----------
  ...Object.entries(slugs).map(([from, to]) => [from, to]),
  ...cases,

  // ---------- Global: booking ----------
  // Every booking button opens Calendly (the router's own /book route is kept).
  ["`/book`", "`" + CALENDLY + "`"],
  ["path:`" + CALENDLY + "`", "path:`/book`"],
  ['"/book"', `"${CALENDLY}"`], // site settings in page data
  ["Book a free audit", "Book a free call"],

  // ---------- Home: hero ----------
  [
    "Flowcraft is an AI automation agency. We design, build and run the AI agents that answer your leads, book your invoices and close your tickets — trained on your business, live in weeks.",
    "Automyra AI is an AI automation agency. We build AI agents, n8n workflows and CRM automations that score your leads, extract your invoices and follow up for you — connected to the tools you already use.",
  ],
  ["Now booking Q4 builds · 3 slots left", "Top Rated on Upwork · 100% JSS"],
  [
    "Lead replied|38 s;Invoice booked|Xero · 2 min;Ticket closed|CSAT 5/5",
    "Lead scored|Close CRM;Invoice extracted|QuickBooks;Contract filed|Zoho Sign",
  ],

  // ---------- Home: client carousel ----------
  ["count:n=`60+`", "count:n=`37+`"],
  ["defaultValue:`60+`}", "defaultValue:`37+`}"],
  ["`operations teams run on our agents`", "`systems built for founders & teams`"],
  ["12k+|tasks run by our agents every day;94%|solved without a human;3 weeks|from audit to a live agent",
    "37+|automations & AI systems shipped;1,595 h|delivered for clients on Upwork;100%|Job Success · Top Rated on Upwork"],
  ["count:`60+`", "count:`37+`"],
  [
    "Northwind Dental|Voice agent|+38% appointments booked;Ledgerly|Invoice agent|Month-end close in 2 days;Oakline Home|Support agent|71% of tickets solved by AI;Vantage Legal|Knowledge base|Every precedent in 9 seconds;Brightpath Realty|Lead agent|Every lead answered in 40 s;Halcyon Travel|Voice agent|A 24/7 booking desk;Meridian Health|Voice agent|0 missed calls after hours;Fieldstone|Workflow automation|31 h back per person, every month;Kinetic Labs|Onboarding agent|+22% product activation;Summit Freight|Invoice agent|1,900 invoices a week;Arbor & Co|Proposal writer|Quotes 3x faster;Luma Studio|Custom AI app|Proposals drafted from calls",
    [
      "Hostyo|Owner portal|Property SaaS on React & Notion",
      "Rabbit Funding|Lead scoring|Every lead scored in Close CRM",
      "Rabbit Funding|Multi-agent system|Competitors monitored 24/7",
      "Signal Law Group|AI dashboard|Investigations drafted by AI",
      "Signal Law Group|Proxy intelligence|Ballot items from SEC 14A filings",
      "Actum|Workflow automation|SFTP to Sheets to QuickBooks",
      "GuardXFlow|Invoice extractor|Invoices to QuickBooks from a photo",
      "Techticks|LMS platform|Courses on React + Turso",
      "Spark Fitness|Mobile app|iOS & Android trainer app",
      "Robin|Collections agent|AI debt-collection conversations",
      "Deal Scale|AI SaaS|LLM-powered product in Python",
      "LavanHu|AI web app|React, Turso & OpenAI",
    ].join(";"),
  ],

  // ---------- Home: console demo ----------
  [
    "Every agent we build reports to one console: what it did, when, and what it handed to a person.",
    "What your automations look like when we're done: every run logged, every hand-over visible, inside the tools you already use.",
  ],
  ["Every action logged;Hand-over rules you control;Runs in your own accounts", "Every run logged;Hand-over rules you control;Runs in your own accounts"],
  [
    "Voice agent|Live|Front desk · 214 calls today;Invoice agent|Running|Finance · 1,902 invoices;Support agent|Live|Help desk · 68% solved;Lead agent|Live|Sales · replies in 40 s;Report agent|Scheduled|Ops · Mondays 07:00",
    "Lead scoring agent|Live|Close CRM · every new lead;Invoice extractor|Running|QuickBooks · from email + app;Contract workflow|Live|Zoho Sign → Google Sheets;LinkedIn outreach|Live|Unipile · connects + follow-ups;Competitor monitor|Scheduled|Multi-agent · daily 07:00",
  ],
  [
    "Voice agent booked Emma Rossi for Friday 2:15;Invoice agent matched INV-2291 to PO-884;Support agent answered order #4471 with tracking;Lead agent replied to Priya Shah and booked a call;Voice agent moved Daniel Park to Thursday 10:30;Invoice agent flagged a duplicate from Acme Supply;Support agent processed a return for #4398;Report agent sent the weekly ops summary",
    [
      "Lead agent scored a new lead 87/100 in Close CRM",
      "Invoice extractor sent INV-2291 to QuickBooks",
      "Contract workflow filed a signed MCA agreement",
      "Outreach agent sent 12 connection requests to ICP",
      "Reminder agent texted a rep 15 min before a call",
      "Reply bot drafted a LinkedIn DM response",
      "Competitor monitor flagged a pricing change",
      "Timesheet agent reminded the team in Zoho Projects",
    ].join(";"),
  ],
  ["1,284|hours saved this month;3,912|tasks done today;14|handed to a person", "37+|systems shipped;1,595|hours delivered;100%|Job Success"],

  // ---------- Global: brand & contact ----------
  ["Flowcraft AI Automation Agency", "Automyra AI Automation Agency"],
  ["Flowcraft", "Automyra AI"],
  ["console.flowcraftagents.ai", "console · automyra ai"],
  ["hello@flowcraftagents.ai", "hamzaabialal@gmail.com"],
  ["tel:+16465550187", "tel:+923047670164"],
  ["+1 646 555 0187", "+92 304 7670164"],
  ["54 W 21st St, New York, NY 10010", "Karachi, Pakistan"],
  ["America/New_York", "Asia/Karachi"],
  ["New York", "Karachi"],

  // ---------- Home: hero ----------
  ["`Automate the work`", "`Build once.`"],
  ["`nobody *wants.*`", "`Automate *everything.*`"],

  // Company name: Automyra SI everywhere (last, so it also catches names written by the rules above)
  ["Automyra AI", "Automyra SI"],
  ["automyra ai", "automyra si"],
  // Colour palette (PALETTE below): accent, its highlight, and the two dark backgrounds
  [/#19d98b/gi, PAL.accent, "palette accent"],
  [/#0d1b16/gi, PAL.pine, "palette pine"],
  [/#07100c/gi, PAL.night, "palette night"],
  [/#58d68d|#2fbf71/gi, PAL.hi, "palette dots"],
  [/25,217,139/g, PAL.rgb, "palette globe"],
  ["linear-gradient(100deg,var(--fc-brass) 10%,color-mix(in srgb,var(--fc-brass) 35%,var(--fc-cloud)) 90%)", headGradient(PAL), "palette headline gradient"],
  ["background:linear-gradient(90deg,transparent,var(--fc-brass) 60%,#fff)", "background:linear-gradient(90deg,transparent,var(--fc-brass) 60%," + PAL.hi + ")", "palette flow"],
  // Server-rendered tool strip and tool pills (last, so the tool names are already the site's)
  ...(FEATURES.flow || FEATURES.strip ? [[/(class="fc fcl fc-dark[^"]*"[\s\S]*?<ul class="fc-sr">[\s\S]*?<\/ul>)/g,
    (m) => m + (FEATURES.flow ? flowHtml() : "") + (FEATURES.strip ? toolStripHtml() : ""), "tool strip html"]] : []),
  ...(FEATURES.pills ? [
    [/(>Tools<\/dt><dd>)([\s\S]*?)(<\/dd>)/g, (m, a, b, c) => a + toolPillHtml(b) + c, "case tool pills html"],
    [/(<div class="fcsv-tools"[^>]*>)([\s\S]*?)(<\/div>)/g, (m, a, b, c) => a + toolPillHtml(b) + c, "service tool pills html"],
  ] : []),
];

// ---------- Server-rendered HTML for list-style content (the scripts render the same on load) ----------
const amp = (s) => s.replace(/&/g, "&amp;");
// "<dt>v</dt><dd>label</dd>" stat rows: old/new are "v|label;v|label"
const dl = (from, to) =>
  from.split(";").map((pair, i) => {
    const [v, l] = pair.split("|");
    const [nv, nl] = to.split(";")[i].split("|");
    return [`>${amp(v)}</dt><dd>${amp(l)}</dd>`, `>${amp(nv)}</dt><dd>${amp(nl)}</dd>`, from];
  });
// "<span>A</span><span>B</span>" tool chips: old/new are "A, B, C"
const chips = (from, to) => [
  ["<span>" + from.split(", ").join("</span><span>") + "</span>", "<span>" + to.split(", ").join("</span><span>") + "</span>", from],
];
const carousel = [
  "Hostyo|Owner portal|Property SaaS on React & Notion",
  "Rabbit Funding|Lead scoring|Every lead scored in Close CRM",
  "Rabbit Funding|Multi-agent system|Competitors monitored 24/7",
  "Signal Law Group|AI dashboard|Investigations drafted by AI",
  "Signal Law Group|Proxy intelligence|Ballot items from SEC 14A filings",
  "Actum|Workflow automation|SFTP to Sheets to QuickBooks",
  "GuardXFlow|Invoice extractor|Invoices to QuickBooks from a photo",
  "Techticks|LMS platform|Courses on React + Turso",
  "Spark Fitness|Mobile app|iOS & Android trainer app",
  "Robin|Collections agent|AI debt-collection conversations",
  "Deal Scale|AI SaaS|LLM-powered product in Python",
  "LavanHu|AI web app|React, Turso & OpenAI",
].map((c) => c.split("|"));
let card = 0;
const consoleFeed = [
  ["Voice agent booked Emma Rossi for Friday 2:15", "Lead agent scored a new lead 87/100 in Close CRM"],
  ["Invoice agent matched INV-2291 to PO-884", "Invoice extractor sent INV-2291 to QuickBooks"],
  ["Support agent answered order #4471 with tracking", "Contract workflow filed a signed MCA agreement"],
  ["Lead agent replied to Priya Shah and booked a call", "Outreach agent sent 12 connection requests to ICP"],
  ["Voice agent moved Daniel Park to Thursday 10:30", "Reminder agent texted a rep 15 min before a call"],
  ["Invoice agent flagged a duplicate from Acme Supply", "Reply bot drafted a LinkedIn DM response"],
  ["Support agent processed a return for #4398", "Competitor monitor flagged a pricing change"],
  ["Report agent sent the weekly ops summary", "Timesheet agent reminded the team in Zoho Projects"],
];

const ssr = [
  // Client carousel cards and its screen-reader list
  [/(<div class="fcl-p s\d"[^>]*><b[^>]*>)[^<]*(<\/b><span[^>]*>)[^<]*(<\/span><\/div>)/g,
    (m, a, b, c) => { const [n, t] = carousel[card++ % 12]; return a + amp(n) + b + amp(t) + c; }, "carousel cards"],
  [/<ul class="fc-sr">(?:<li>[^<]*<!-- -->: <!-- -->[^<]*<\/li>){12}<\/ul>/g,
    `<ul class="fc-sr">${carousel.map(([n, , r]) => `<li>${amp(n)}<!-- -->: <!-- -->${amp(r)}</li>`).join("")}</ul>`, "carousel list"],
  [/(<b[^>]*>)60\+(<\/b><span[^>]*>)operations teams run on our agents</g, "$137+$2systems built for founders &amp; teams<", "carousel count"],
  ['aria-label="60+ operations teams run on our agents"', 'aria-label="37+ systems built for founders &amp; teams"'],
  ...dl("2021|founded in New York;60+|agents in production;31 h|saved per person, monthly;12|people, all builders",
    "2025|founded in Karachi;37+|systems shipped;1,595 h|delivered on Upwork;5|people, all builders"),
  // Stat rows on page heroes
  ...dl("60+|agents live;94%|solved without a person;3 wks|to launch", "37+|systems shipped;100%|Job Success;1–4 wks|to launch"),
  ...dl("+38%|appointments;2 days|month-end close;71%|tickets by AI;9 s|to any answer", "24/7|calls answered;100%|leads scored;4 wks|portal live;< 2 min|listing to model"),
  ...dl("2 days|audit;1 week|design;2 weeks|build;30 days|tuning", "Day 1|discovery;Week 1|scope;2–3 wks|build;Ongoing|support"),
  ...dl("$1,500|audit;from $6,500|per agent;$3,900|per month", "Free|discovery call;$15–35|per hour;Fixed|project quotes"),
  ...dl("2021|founded;60+|agents live;12|builders", "2025|founded;37+|systems shipped;5|builders"),
  // Tool chips
  ...chips("Twilio, Vapi, Google Calendar, HubSpot", "Vapi, Retell, Twilio, ElevenLabs"),
  ...chips("Make, n8n, Zapier, Xero, Slack", "n8n, Make, Zapier, Zoho, Close CRM"),
  ...chips("Zendesk, Intercom, Shopify, Gorgias", "Unipile, LinkedIn, OpenAI, n8n"),
  ...chips("Notion, Google Drive, Confluence, Slack", "OpenAI, Google Drive, Slack, QuickBooks"),
  ...chips("OpenAI, Anthropic, Supabase, Retool", "React, Python, OpenAI, Vercel"),
  ...chips("Vapi, Twilio, Dentrix, HubSpot", "Vapi, Retell, Twilio, ElevenLabs"),
  ...chips("n8n, Xero, Google Drive, Slack", "n8n, Close CRM, OpenAI, Google Sheets"),
  ...chips("Gorgias, Shopify, OpenAI, Slack", "React, Notion, Vercel"),
  ...chips("Anthropic, Pinecone, SharePoint, Teams", "OpenAI, Make.com, HeyGen, React"),
  ...chips("Make, HubSpot, Google Calendar, WhatsApp", "Python, n8n, API, Google Sheets"),
  // Console feed
  ...consoleFeed.map(([from, to]) => [`<span>${from}</span>`, `<span>${to}</span>`]),
  // Process step titles
  ['>Audit</h3>', '>Discovery call</h3>'],
  ['>Design</h3>', '>Scope &amp; quote</h3>'],
  ['>Build</h3>', '>Build &amp; test</h3>'],
  ['>Launch</h3>', '>Launch &amp; support</h3>'],
  // Footer "Start" column
  [/<li><a href="[^"]*"[^>]*>Free audit<\/a><\/li>/g,
    `<li><a href="https://wa.me/923047670164" target="_blank" rel="noopener">WhatsApp</a></li><li><a href="https://www.upwork.com/agencies/2001333416097289203/" target="_blank" rel="noopener">Upwork</a></li>`, "footer links"],
  // Team photo alt texts
  [/alt="(?:Nadia Rahman|Kofi Mensah|Ingrid Solberg|Mateo Alvarez), [^"]*"/g, 'alt="Automyra AI team member"', "team alts"],
];

export const html = [
  ...ssr,
  // Styles for the extras on every page, and the theme button when that feature is on
  ["</head>", EXTRA_HEAD + "</head>", "extras head"],
  ...(FEATURES.theme ? [["</body>", THEME_BUTTON + "</body>", "theme button"]] : []),
  // Case pages: the extra chapter in the server-rendered HTML too (matched by each case's original "What we built" text)
  [/(A support agent on chat and email that answers from Shopify[^<]*<\/p>[\s\S]*?<\/dl><\/div><\/div>)/g, caseExtraHtml("hostyo"), "hostyo extra chapter"],
  [/(In production<!-- --> · <!-- -->Ledgerly<\/span>[\s\S]*?<\/a><\/div><\/div>)(?=<div class="fcsv-others">)/g, "$1" + serviceExtraHtml(), "workflow extra section"],
  [/(A voice agent that answers in the clinic[^<]*<\/p>[\s\S]*?<\/dl><\/div><\/div>)/g, caseExtraHtml("ai-voice-agent"), "voice extra chapter"],
  [/(A lead agent that replies within a minute, qualifies the buyer[^<]*<\/p>[\s\S]*?<\/dl><\/div><\/div>)/g, caseExtraHtml("centris"), "centris extra chapter"],
  [/(An invoice agent that reads every document, matches it to purchase orders[^<]*<\/p>[\s\S]*?<\/dl><\/div><\/div>)/g, caseExtraHtml("rabbit-funding"), "rabbit extra chapter"],
  [/(A private, permission-aware knowledge base that answers in plain words[^<]*<\/p>[\s\S]*?<\/dl><\/div><\/div>)/g, caseExtraHtml("signal-law-group"), "signal extra chapter"],
  // Screenshots have one size: no srcset, or the server-rendered one sticks when the image changes (e.g. the Services menu)
  [new RegExp(` srcset="${IMG.replace(/[./]/g, "\\$&")}(?:${Object.keys(SHOTS).join("|")})\\.webp[^"]*"`, "g"), "", "screenshot srcset"],
  // No Framer branding: badge, page comments, generator tag, editor loader, analytics and the template's demo bar
  [/<div id="__framer-badge-container">[\s\S]*?<\/a>(?:<!--\/\$-->)*<\/div>/g, "", "badge html"],
  [/<!-- Made in Framer · framer\.com -->/g, "<!-- Automyra AI · automyra ai agency -->", "made-in comment"],
  [/<!-- Published [^>]*-->/g, "", "published comment"],
  [/(<span>© 2026 <!-- -->[^<]*<!-- -->)\. <\/span>/g, "$1. All rights reserved. </span>", "copyright html"],
  [/\s*<meta name="generator" content="Framer[^"]*">/g, "", "generator meta"],
  [/<script>try\{if\(localStorage\.getItem\("__framer_force_showing_editorbar_since"\)\)[\s\S]*?<\/script>/g, "", "editor bar"],
  [/<script async src="https:\/\/events\.framer\.com\/script[^"]*"[^>]*><\/script>/g, "", "analytics"],
  [/<script>\s*\/\*! SoloFoundry demo bar[\s\S]*?<\/script>/g, "", "demo bar"],

  // Logo in the server-rendered header and footer
  [/(<a class="fchd-logo"[^>]*>)<svg[^>]*><path d="M12 1\.5C[^"]*"\/><\/svg>/g, "$1" + logoSvgHtml(22), "header logo"],
  [/(<a class="fco-logo"[^>]*>)<svg class="fco-sp"[^>]*><path d="M12 1\.5C[^"]*"\/><\/svg>/g, "$1" + logoSvgHtml(30), "footer logo"],
  [/(<a class="(?:fchd|fco)-logo"[^>]*><svg[\s\S]*?<\/svg>)[^<]*<\/a>/g, "$1" + LOGO_NAME + LOGO_SUB_HTML + "</a>", "logo text"],
  // About story as rendered on the page (the script renders ABOUT_STORY the same way)
  [/(<p class="fcab-p" style="[^"]*">)Flowcraft started in 2021[^<]*<\/p><p class="fcab-p" style="([^"]*)">So we built a studio[^<]*<\/p>/g,
    (m, p1, s2) => p1 + ABOUT_STORY[0] + "</p>" + ABOUT_STORY.slice(1).map((p, i) => `<p class="fcab-p" style="${s2.replace(/520ms/g, 520 + 120 * i + "ms")}">${p}</p>`).join(""), "about story"],
  // Lead-scoring post body as rendered on its page
  [">The problem was the phone</h2><p>A third of calls rang out at lunch and after five.</p>",
    ">The problem was the order</h2><p>Reps called leads in the order they arrived, so the best merchants waited while time went to poor fits.</p>"],
  [">What we built</h2><p>A voice agent that books, moves and confirms appointments in the practice software, in the clinic's own tone.</p>",
    ">What we built</h2><p>An n8n workflow that enriches each new lead, classifies its industry and revenue with AI, writes a score into Close CRM and sets 15- and 2-minute call reminders.</p>"],
  [">What happened</h2><p>Bookings rose 38% in two months, and the front desk got eleven hours a week back.</p>",
    ">What changed</h2><p>Every lead now has a score within minutes, and reps start the day with the best leads at the top.</p>"],
  // Favicon, app icon and social share image
  [/<link href="https:\/\/framerusercontent\.com\/images\/[^"]*" rel="icon" media="\(prefers-color-scheme: light\)">/g,
    '<link rel="icon" href="/brand/favicon.svg" type="image/svg+xml"><link rel="icon" href="/brand/favicon-32.png" sizes="32x32" type="image/png">', "favicon"],
  [/<link href="https:\/\/framerusercontent\.com\/images\/[^"]*" rel="icon" media="\(prefers-color-scheme: dark\)">/g, "", "favicon dark"],
  [/<link rel="apple-touch-icon" href="[^"]*">/g, '<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png">', "apple icon"],
  [/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*(">)/g, "$1/brand/og-image.png$2", "share image"],
  // Case-study image alt texts
  ["Northwind Dental — A voice agent that books 38% more appointments", "AI Call Desk — Every call answered, day and night"],
  ["Ledgerly — Month-end close in 2 days instead of 9", "Rabbit Funding — Every lead scored before a rep picks up the phone"],
  ["Oakline Home — 7 in 10 support tickets closed by AI", "Hostyo — One portal for every property owner"],
  ["Vantage Legal — Every precedent, found in seconds", "Signal Law Group — Proxy filings turned into ballot items in minutes"],
  ["Brightpath Realty — Leads answered in 40 seconds, 24/7", "Centris Model — Listings to financial model, automatically"],
  [/alt="[^"]*(?:Sarah Kim|Marcus Webb|Priya Nair|Helen Park|Daniel Ortiz)[^"]*"/g, 'alt="Automyra AI client"'],
  // Booking links -> Calendly
  [/href="(?:\.\.\/)?book[a-z0-9]*\.html(?:\?[^"]*)?"/g, `href="${CALENDLY}" target="_blank" rel="noopener"`],
  // Hero chips
  [/<b>Lead replied<\/b>(<span[^>]*>)38 s</g, "<b>Lead scored</b>$1Close CRM<"],
  [/<b>Invoice booked<\/b>(<span[^>]*>)Xero · 2 min</g, "<b>Invoice extracted</b>$1QuickBooks<"],
  [/<b>Ticket closed<\/b>(<span[^>]*>)CSAT 5\/5</g, "<b>Contract filed</b>$1Zoho Sign<"],
  // Hero headline (rendered word by word)
  ['aria-label="Automate the work nobody wants."', 'aria-label="Build once. Automate everything."'],
  ['aria-label="Automate the work"', 'aria-label="Build once."'],
  ['aria-label="nobody wants."', 'aria-label="Automate everything."'],
  [
    `<span class="fc-hd-w"><span class="fc-hd-i" style="transition-delay:260ms;--pd:760ms">Automate</span> </span><span class="fc-hd-w"><span class="fc-hd-i" style="transition-delay:330ms;--pd:830ms">the</span> </span><span class="fc-hd-w"><span class="fc-hd-i" style="transition-delay:400ms;--pd:900ms">work</span> </span>`,
    words(["Build", "once."], 260),
  ],
  [
    `<span class="fc-hd-w"><span class="fc-hd-i" style="transition-delay:460ms;--pd:960ms">nobody</span> </span><span class="fc-hd-w is-accw"><span class="fc-hd-i is-acc" style="transition-delay:530ms;--pd:1030ms"><span class="fc-it">wants.<svg class="fc-spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z"/></svg></span></span> </span>`,
    words(["Automate", "*everything.*"], 460),
  ],
  // Hero stats
  [">12k+</dt><dd>tasks run by our agents every day</dd>", ">37+</dt><dd>automations &amp; AI systems shipped</dd>"],
  [">94%</dt><dd>solved without a human</dd>", ">1,595 h</dt><dd>delivered for clients on Upwork</dd>"],
  [">3 weeks</dt><dd>from audit to a live agent</dd>", ">100%</dt><dd>Job Success · Top Rated on Upwork</dd>"],
];
