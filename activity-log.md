# Activity log

Append-only. Each entry feeds the monthly report.

Format: `YYYY-MM-DD` · short title · what happened · artifacts / next

---

## 2026-08-25

- **Engagement kickoff** — Digital Presence + SEO Review scoped (vendors, site SEO, GBP, reviews, ongoing support).
- **Site baseline** — Reviewed [dougwilsonlaw.com](http://www.dougwilsonlaw.com/): Home, Practice Areas, About, Contact. Squarespace. Transactional focus (real estate, corporate/LLC, estate planning, probate). NAP: 4725 Garst Mill Road Suite 3, Roanoke VA 24018 · (540) 767-1174 · info@dougwilsonlaw.com.
- **Access confirmed** — Google Business Profile; Squarespace admin. GSC / GA4 still to confirm.
- **Tracking set up** — README, tracker, activity log, findings, monthly report template + Aug 2026 draft started.
- **Assets folder** — `_assets/` with subfolders (`gbp`, `reviews`, `squarespace`, `gsc`, `ga4`, `vendors`, `reports`, `misc`). Screenshots will be filed here and cited in reports.
- **Seed findings logged** — Sitemap error, `/cart` page, ~4.1★ / ~23–24 Google reviews (public sources; confirm in GBP).
- **Next** — Client sends screenshots (GBP, Squarespace, etc.); file under `_assets/` and compile into findings / Aug report.

- **Asset received** — `_assets/gbp/2026-08-25_gbp-serp-manager-overview.png` (SERP + manager panel for query “wilson law firm roanoke, va”).
- **GBP snapshot from asset** — Verified profile; 4.2★ / 24 Google reviews; category shown as Real estate attorney (Cave Spring, VA); NAP: 4725 Garst Mill Rd SW Ste 3, Roanoke, VA 24018 · +1 540-767-1174; hours Closed · Opens 8:30 a.m.; ~1,110 customer interactions; 963 profile views in search last month; profile strength “Looks good!”; Google prompts: add directions to website, add exterior photo; Avvo 5/5 (5 reviews) in knowledge panel.
- **SERP notes** — dougwilsonlaw.com #1 organic with sitelinks (About Us, Practice Areas, Contact); Facebook #2 (~90+ followers); brand query visibility strong.
- **Next** — More GBP detail screens (categories list, services, full hours, review reply view); Squarespace pages/SEO; vendor list; GSC/GA4 yes-no.

- **Report design locked** — Pulled visual system from Legacy Advisors SEO PDF (Poppins, landscape 11×8.5 slides, black/white, `#54abe5` keyword blue, mint accents, O+E mark, spaced uppercase labels). All Wilson reports will be **HTML** using `reports/css/oe-report.css`.
- **HTML August deck** — `reports/2026-08-digital-presence.html` created from current findings + GBP asset.
- **Design ref filed** — `_assets/misc/SEO_Report_Legacy-Advisors_R3_design-ref.pdf` + page PNGs in `_assets/misc/report-design-ref/`.
- **Next** — Continue collecting screenshots; keep HTML report updated as inputs arrive.

- **Action completed** — Google Analytics added to the site (Squarespace). Treat as GA4 unless confirmed otherwise.
- **Access update** — Analytics now in place; still need Measurement ID / property access confirmation + realtime check, and GSC yes/no.
- **Next** — Optional: screenshot of Squarespace analytics connection or GA4 Admin → `_assets/ga4/`; continue GBP detail + vendor list + GSC.

- **Asset received** — `_assets/squarespace/2026-08-25_ai-visibility-openai-run.png` (Squarespace SEO → AI Visibility; OpenAI run Aug 25, 2026 7:57 AM).
- **AI Visibility baseline** — 10 prompts; **3/10 visible (30%)**; branded 2/5; non-branded 1/5. Hits: probate/estate admin (branded), real estate closings Roanoke (branded), LLC/buy-sell recommend near Roanoke (non-branded). Misses: scheduling, wills/trusts/POA branded, most generic find-an-attorney / advice prompts. 20 AI credits remaining.
- **Finding filed** — `findings/2026-08-ai-visibility.md`. Monitor monthly; do not treat as aggressive SEO mandate.
- **GA Measurement ID** — `G-NWL3L04PQQ` (GA4). Filed in `inputs/ga4.md`.
- **Asset received** — `_assets/squarespace/2026-08-25_traffic-last-30-days.png` (Squarespace Traffic · Jul 27–Aug 25, 2026).
- **Traffic baseline** — Visits 582 (+6%); unique 568 (+7%); pageviews 913 (+7%); bounce 65.96% (+1%). Sources: Direct 372, Google 158, Bing 11. Desktop / Chrome / Windows dominant. Finding: `findings/2026-08-squarespace-traffic.md`.
- **Action completed** — Google Search Console added / set up for the site. Filed in `inputs/gsc.md`.
- **Access update** — GBP + Squarespace + GA4 `G-NWL3L04PQQ` + **GSC** now in place.
- **Next** — GSC screenshots (Sitemaps, Pages/Coverage, Performance) → `_assets/gsc/`; verify sitemap submission (prior 500 issue); continue GBP detail + vendors.

- **Asset received** — `_assets/squarespace/2026-08-25_engagement-site-content.png` (Engagement → Site Content · Jul 27–Aug 25).
- **Page engagement baseline** — Home 541 · Practice Areas 141 · About Us 130 · Contact 101 (913 pageviews). Avg time on page 77s; bounce 65.96%; exit 62.1%. About has longest time (2m 27s) but 93.55% bounce. Finding: `findings/2026-08-engagement-pages.md`.
- **Next** — GSC screenshots; GBP detail; optional Form & Button Conversions; vendors.

- **Asset received** — `_assets/squarespace/2026-08-25_form-button-conversions.png` (Form & Button Conversions · Jul 27–Aug 25).
- **Conversions baseline** — Form submissions **10 (−38% MoM)**; button clicks **37 (−12%)**. All forms from `/contact`: 10 submissions / 76 unique views = **13.2% CVR**. Finding: `findings/2026-08-conversions.md`.
- **Next** — GSC screenshots; GBP detail; vendors.

- **Asset received** — `_assets/squarespace/2026-08-25_seo-ai-visibility-overview.png` (SEO / AI Visibility dashboard).
- **Squarespace SEO score** — Search Visibility Score **80% (Good)**; metadata **4/4**; alt text **21/21**. AI summary matches prior run (branded 2/5 · non-branded 1/5). Finding: `findings/2026-08-squarespace-seo-score.md`.
- **Next** — GSC screenshots; GBP detail; vendors. Note: 80% is platform hygiene, not Google rank.

- **Asset received** — `_assets/squarespace/2026-08-25_ai-prompt-schedule-meeting-miss.png` (ChatGPT preview for schedule-meeting branded prompt).
- **AI name collision** — For “schedule a meeting with Wilson Law Firm,” ChatGPT cites **Tempe AZ (`wilsonlawaz.com`)** and **St. Paul MN (`wilsonlawmn.com`)**, not Roanoke / dougwilsonlaw.com. Miss is brand ambiguity, not just weak content. Finding: `findings/2026-08-ai-prompt-schedule-miss.md`.
- **Next** — Prefer Roanoke/VA in monitored prompts; reinforce local NAP entity clarity; GSC + GBP detail.

- **Asset received** — `_assets/squarespace/2026-08-25_ai-prompt-probate-roanoke-hit.png` (ChatGPT preview · probate/estate · Roanoke · Mentioned).
- **AI hit detail** — Correct Roanoke firm; cites dougwilsonlaw.com + /contact; phone (540) 767-1174; email info@dougwilsonlaw.com; New River Valley. Contrasts with schedule-meeting name collision. Finding: `findings/2026-08-ai-prompt-probate-hit.md`.
- **Next** — GSC screenshots; GBP detail; vendors.

- **Report UI refresh** — Rebuilt `oe-report.css` as a scrolling web report (not PDF slides). Sentence-case headings; CSS eyebrows (no letter-spaced HTML). Updated Aug HTML + template.
- **Next** — GSC screenshots; GBP detail; vendors. Preview: http://127.0.0.1:8899/2026-08-digital-presence.html

- **Logo** — Swapped to official O+E icon SVG (`reports/assets/oe-icon.svg`), white fill for dark report chrome. Source: Company Branding `OE_Icon.svg`.
- **Next** — GSC screenshots; GBP detail; vendors.
- **GitHub** — Pushed to private repo https://github.com/odd-even/wilson-law. Pages unavailable for private repos on current plan.
- **Next** — Team with repo access can open the HTML; for a live URL, deploy (Vercel) or adjust visibility.

- **Dashboard** — Added `reports/dashboard.html`: done so far, identified next actions, September checklist. Index links Dashboard + August report.

- **Visual polish** — Enhanced `oe-report.css`: blue/mint atmospheric heroes, raised stat cards, stronger section headers, motion, shared dashboard components. Same Poppins + brand colors.

- **Evidence inline** — Source screenshots placed under each report section (GBP, Website, AI, Traffic, Pages, Conversions) with shared lightbox; end gallery removed.

- **Asset received** — `_assets/squarespace/2026-08-25_traffic-last-year-2025.png` (Squarespace Traffic · Jan 1–Dec 31, 2025 · 5,346 visits +92% YoY). Added under Site traffic in August report + findings.

- **Asset received** — `_assets/gsc/2026-08-25_gsc-verified-squarespace.png` (GSC verification via Squarespace for https://www.dougwilsonlaw.com/). Status → Verified; Sitemaps/Coverage still open.

- **Drop inbox** — Added repo-root `drop/` for full-size screenshots. Say “process drop” to rename, file into `_assets/{gbp,squarespace,gsc,…}/`, log, and update reports. Prefer over chat paste (chat compresses).

- **Process drop** — Filed `_assets/gsc/2026-08-25_gsc-sitemaps-success.png` (1862×504). GSC `/sitemap.xml` · Success · 4 pages · submitted/read Aug 25, 2026. Updated report, dashboard, inputs/gsc.md.

- **Process drop** — Replaced GBP SERP/manager overview with full-res `_assets/gbp/2026-08-25_gbp-serp-manager-overview.png` (2694×2446). Prior chat copy kept as `…-chat-1024.jpg`. Notes: 1,110 interactions · hours Opens 8:30 a.m. · same Google suggestions. Report GBP section updated.

- **Process drop** — GBP Performance (Mar–Aug 2026): overview, calls, directions, website clicks → `_assets/gbp/2026-08-25_gbp-performance-*.png`. Totals: **1,110** interactions · **5,265** views · **685** searches showed profile · **354** calls · **304** directions · **452** website clicks. Top terms: real estate attorney roanoke va (311), wilson (214). Finding: `findings/2026-08-gbp-performance.md`. Wired into August HTML GBP section.
